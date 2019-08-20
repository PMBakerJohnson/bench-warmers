import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiConnectionService } from '../api-connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.css']
})
export class CharacterCreatorComponent implements OnInit {

  characterForm = new FormGroup({
    name: new FormControl(),
    class: new FormControl(),
    placeholder: new FormControl(),
    placeholder2: new FormControl()
  });
  creationError: string;

  constructor(private api: ApiConnectionService, private router: Router) { }

  ngOnInit() {
  }

  characterSubmit() {
    const characterInfo: {name: string, class: string, placeholder: string,
      placeholder2: string} = Object.assign({}, this.characterForm.value);

    this.api.createCharacter(characterInfo)
    .subscribe(data => {
      if (data) {
        this.router.navigate(['character-info'], { state: { character: data } });
      } else {
        this.creationError = 'Character creation failed, please try again!';
      }
    });
  }

}
