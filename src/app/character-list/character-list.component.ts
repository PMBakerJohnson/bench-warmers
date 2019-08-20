import { Component, OnInit } from '@angular/core';
import { CharacterInfo } from '../mock-character';
import { ApiConnectionService } from '../api-connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: CharacterInfo[];

  constructor(private apiConnection: ApiConnectionService, private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem('currentUser')) {
      this.router.navigate(['index']);
    }
    this.apiConnection.getCharacterList().subscribe((data: any[]) => {
      this.characters = data;
    });
  }

  getInfo(character: CharacterInfo) {
    this.router.navigate(['../character-info'], { state: { character: character } });
  }
}
