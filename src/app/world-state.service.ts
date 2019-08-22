import { Injectable } from '@angular/core';
import { CharacterInfo } from './character-interface';

@Injectable({
  providedIn: 'root'
})
export class WorldStateService {
  character: CharacterInfo;

  constructor() { }
}
