import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiConnectionService } from '../api-connection.service';
import { Router } from '@angular/router';
import { CharacterInfo } from '../character-interface';
import { ClassInfo } from '../class-interface';

@Component({
  selector: 'app-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.css']
})
export class CharacterCreatorComponent implements OnInit {
  characterForm = new FormGroup({
    fullName: new FormControl(),
    classIndex: new FormControl()
  });

  classes: ClassInfo[];
  creationError: string;

  constructor(private api: ApiConnectionService, private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem('currentUser')) {
      this.router.navigate(['index']);
    } else {
      this.api.getClasses().subscribe(data => this.classes = data)
    }
  }

  characterSubmit() {
    const characterInfo: CharacterInfo = {
      fullName: this.characterForm.get('fullName').value,
      classIdFkNavigation: this.classes[this.characterForm.get('classIndex').value],
      userIdFk: +localStorage.getItem('currentUserId'),
      classIdFk: this.classes[this.characterForm.get('classIndex').value].classId
    };

    this.api.createCharacter(characterInfo)
    .subscribe(data => {
      if (data > 0) {
        this.router.navigate(['character-info'], { state: { character: characterInfo } });
      } else if (data === -1) {
        this.creationError = 'You already have a character of that name and class!';
      } else {
        this.creationError = 'Character creation failed, please try again!';
      }
    });
  }

}
