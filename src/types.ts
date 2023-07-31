export type State = {
  currentOperand?: string | null;
  previousOperand?: string | null;
  operation?: string | null;
  overwrite?: boolean;
};

export type Action = {
  type: string;
  payload?: any;
};
