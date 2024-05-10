export interface Option {
  option: string;
  isCorrect: boolean;
}

export interface MCQ {
  question: string;
  options: Array<Option>;
}

export interface MCQResponse extends MCQ {
  id: string;
}

export type MCQUpdateRequest = MCQResponse;
