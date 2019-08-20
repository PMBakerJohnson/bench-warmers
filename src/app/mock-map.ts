import { NPC } from './mock-npc';
import { Interactable } from './mock-interactable';

export class Region {
  regionName: string;
  nearbyRegions: string[];
  regionEntities: NPC[];
  regionInteractables: Interactable[];
}
