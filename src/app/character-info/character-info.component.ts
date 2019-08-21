import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterInfo } from '../character-interface';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {
  character: CharacterInfo;

  constructor(private router: Router) {
    this.character = this.router.getCurrentNavigation().extras.state.character;
   }

  ngOnInit() {
    if (!localStorage.getItem('currentUser')) {
      this.router.navigate(['index']);
    }
  }

}
