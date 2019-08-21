import { CharacterInfo } from './character-interface';

export interface ClassInfo {
  classId: number;
  className: string;
  characters?: CharacterInfo[];
}
