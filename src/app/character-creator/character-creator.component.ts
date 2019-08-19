import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.css']
})
export class CharacterCreatorComponent implements OnInit {

  public name="CharacterName";
  public class="CharacterClass";
  public placeholder="Placeholder";
  public placeholder2="Placeholder";

  constructor() { }

  ngOnInit() {
  }

}
