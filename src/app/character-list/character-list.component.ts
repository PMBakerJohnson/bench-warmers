import { Component, OnInit, Input } from '@angular/core';
import { CharacterInfo } from '../character-interface';
import { ApiConnectionService } from '../api-connection.service';
import { Router } from '@angular/router';
import { WorldStateService } from '../world-state.service';
import { reject } from 'q';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: CharacterInfo[];
  @Input() id: Number;

  constructor(private apiConnection: ApiConnectionService, private router: Router, private state: WorldStateService) {
   }

  async ngOnInit() {
    if (!localStorage.getItem('currentUser')) {
      this.router.navigate(['index']);
    }
    let promise = await new Promise((resolve, reject) => {
      this.apiConnection.getCharacterList().toPromise().then(
        res => {
          this.characters = res;
          resolve();
        },
        error =>
        reject(error));
    });
    if (this.state.character != null) {
      const char = this.state.character;
      this.characters.find(c => c.fullName === char.fullName && c.classIdFk === char.classIdFk).selected = true;
    }
  }

  select(selectedChar: any): void {
    this.deselect();
    this.state.character = selectedChar;
    selectedChar.selected = true;
  }

  deselect(): void {
    for (let char of this.characters) {
      char.selected = false;
    }
  }
}
