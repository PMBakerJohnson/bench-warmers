export interface CharacterInfo {
  characterId: number;
  fullName: string;
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
