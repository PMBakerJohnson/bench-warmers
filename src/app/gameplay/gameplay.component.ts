import { Component, OnInit, Inject } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { Router, NavigationEnd } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ActionReaderService } from '../action-reader.service';
import { ActionBreakdown } from '../action-breakdown';

@Component({
  selector: 'app-gameplay',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class GameplayComponent {
  title = 'bench-warmers';
  commandType: string;
  availableCommands: string[];
  userConsole: string[];
  location: string;
  availableLocations: string[];
  entities: string[];
  interactables: string[];
  inventory: string[];

  constructor(private apiConnection: ApiConnectionService, private router: Router, private reader: ActionReaderService) {
  }

  newPrompt() {
    switch (this.commandType) {
      case 'location':
          this.availableCommands = this.availableLocations;
        break;
      case 'use':
          this.availableCommands = this.inventory;
        break;
    }
  }

  commandAction(action: string) {
    switch (action) {
      case 'move':
        this.commandType = 'location';
        this.userConsole.push('Where would you like to move to?');
        this.newPrompt();
        break;
      case 'use':
        this.commandType = 'item';
        this.userConsole.push('What item would you like to use?');
        this.newPrompt();
        break;
      case '':

        break;
    }
  }

  quit() {
    this.apiConnection.logout();
    this.router.navigate(['../character-list']);
  }

}
