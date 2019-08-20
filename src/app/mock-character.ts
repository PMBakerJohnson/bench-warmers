import { Region } from './mock-map';

export interface CharacterInfo {
  characterId: number;
  fullName: string;
  // region could also be type Region, depending whats easier to return from the API
  // region: string;
  // inventory: string[];
  userIdFk: number;
  classIdFk: number;
  classIdFkNavigation: ClassIdFkNavigation;
  userIdFkNavigation?: any;
}

interface ClassIdFkNavigation {
  classId: number;
  className: string;
  characters: any[];
}
