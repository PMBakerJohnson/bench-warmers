import { Component, OnInit } from '@angular/core';
import { CharacterInfo } from '../character-interface';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  username = 'UserOne';

    //Characters: Character[] = [
    //{name: 'One', health: 10},
    //{name: 'Two', health: 10},
    //{name: 'Three', health: 10}
  //];

  constructor() { }

  ngOnInit() {
  }

}
