import { Component, OnInit, Inject } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { Router, NavigationEnd } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ActionReaderService } from '../action-reader.service';
import { ActionBreakdown } from '../action-breakdown';
import { ActionSequence } from 'protractor';
import { CharacterInfo } from '../mock-character';
import { MapService } from '../map.service';

@Component({
  selector: 'app-gameplay',
  templateUrl: './gameplay.component.html',
  styleUrls: ['./gameplay.component.css']
})
export class GameplayComponent {
  title = 'bench-warmers';
  commandType: string;
  lingeringAction: string;
  availableCommands: string[];
  userConsole: string[];
  region: string;
  availableRegions: string[];
  entities: string[];
  interactables: string[];
  inventory: string[];

  character: CharacterInfo;

  constructor(private apiConnection: ApiConnectionService, private router: Router, private reader: ActionReaderService,
    private mapService: MapService) {
    this.character = this.router.getCurrentNavigation().extras.state.character;
    this.commandType = 'action';
    //this.region = this.character.region
    //this.availableRegions = mapService.nearby(this.region);
    //this.entities = MapService.entities(this.region)
    //this.interactables = MapService.entities(this.region)
    //this.inventory = character.inventory


  this.newPrompt();
  }

  newPrompt() {
    switch (this.commandType) {
      case 'action':
        this.availableCommands = this.validActions();
        break;
      case 'regions':
        this.availableCommands = this.availableRegions;
        break;
      case 'use':
        this.availableCommands = this.inventory;
        break;
      case 'combine':
        this.lingeringAction = 'combine';
        this.availableCommands = this.inventory;
        break;
      case 'interactable':
        this.availableCommands = this.interactables;
        break;
      case 'entitiesTalk':
        this.lingeringAction = 'talk';
        this.availableCommands = this.entities;
        break;
      case 'entitiesAttack':
        this.lingeringAction = 'attack';
        this.availableCommands = this.entities;
        break;
      case 'entitiesSteal':
        this.lingeringAction = 'steal';
        this.availableCommands = this.entities;
        break;
    }
  }

  validActions() {
    let actions: string[];
    if (this.availableRegions.length > 0) {
      actions.push('move');
    }
    if (this.entities.length > 0) {
      actions.push('talk');
      actions.push('attack');
      actions.push('steal');
    }
    if (this.interactables.length > 0) {
      actions.push('interact');
    }
    if (this.inventory.length > 0) {
      actions.push('use');
      actions.push('combine');
    }
    return actions;
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
      case 'interact':
        this.commandType = 'interactable';
        this.userConsole.push('what would you like to interact with?');
        this.newPrompt();
        break;
      case 'talk':
        this.commandType = 'entitiesTalk';
        this.userConsole.push('Who would you like to talk to?');
        this.newPrompt();
        break;
      case 'attack':
          this.commandType = 'entitiesAttack';
          this.userConsole.push('Who would you like to attack?');
          this.newPrompt();
          break;
      case 'steal':
          this.commandType = 'entitiesSteal';
          this.userConsole.push('Who would you like to steal from?');
          this.newPrompt();
          break;
    }
  }

  quit() {
    this.apiConnection.logout();
    this.router.navigate(['../character-list']);
  }

}
