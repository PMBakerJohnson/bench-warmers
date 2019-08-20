import { Component, OnInit } from '@angular/core';
import { Character } from '../mock-character';
import { ApiConnectionService } from '../api-connection.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Character[];

  constructor(private apiConnection: ApiConnectionService) { }

  ngOnInit() {
    this.apiConnection.getCharacterList().subscribe((data => {
      this.characters = data;
    }));
  }

}
