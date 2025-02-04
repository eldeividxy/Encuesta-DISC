
export interface Option {

  id: number;

  text: string;

  value: string;

}


// Define and export the UserSelection type



export interface UserSelection {

  questionId: number;

  plus: string;

  minus: string;

}





export interface Question {

  id: number;

  text: string;

  options: Option[];

}



export type Shape = 'square' | 'z' | 'triangle' | 'circle';
