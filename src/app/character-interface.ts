import { ClassInfo } from './class-interface';

export interface CharacterInfo {
  characterId?: number;
  fullName?: string;
  userIdFk?: number;
  classIdFk?: number;
  classIdFkNavigation?: ClassInfo;
  userIdFkNavigation?: any;
  selected?: boolean;
}
