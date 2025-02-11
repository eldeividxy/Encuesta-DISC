export interface Option {
  id: number;
  text: string;
  plusValue: Shape | "N";
  minusValue: Shape | "N";
}

export interface UserSelection {
  questionId: number;
  plus: Shape; // Solo valores Shape (excluyendo "N")
  minus: Shape; // Solo valores Shape (excluyendo "N")
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}


export type Shape = 'square' | 'z' | 'triangle' | 'circle' | 'N';
