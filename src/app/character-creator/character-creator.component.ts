import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiConnectionService } from '../api-connection.service';
import { Router } from '@angular/router';
import { CharacterInfo } from '../mock-character';

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.css']
})
export class CharacterCreatorComponent implements OnInit {

  characterForm = new FormGroup({
    fullname: new FormControl(),
    classidfknavigation: new FormGroup({
      classname: new FormControl()
    })
  });
  creationError: string;

  constructor(private api: ApiConnectionService, private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem('currentUser')) {
      this.router.navigate(['index']);
    }
  }

  characterSubmit() {
    const characterInfo: CharacterInfo = Object.assign({}, this.characterForm.value);

    this.api.createCharacter(characterInfo)
    .subscribe(data => {
      if (data) {
        this.router.navigate(['character-info'], { state: { character: characterInfo } });
      } else {
        this.creationError = 'Character creation failed, please try again!';
      }
    });
  }

}
