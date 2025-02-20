export interface Option {
  id: number;
  text: string;
  plusValue: Shape | "N";
  minusValue: Shape | "N";
}

export interface UserSelection {
  questionId: number;
  plusOptionId: number;  
  minusOptionId: number; 
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface ResultsProps {
  userSelections: UserSelection[];
  questions: Question[]; 
  onClose: () => void;
}


export type Shape = 'square' | 'z' | 'triangle' | 'circle' | 'N';
