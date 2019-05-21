export type NumPadMode = 'ADD' | 'SUB' | 'MULT' | 'DIV';

export interface ILineItem {
  id: string,
  payee: string,
  action: NumPadMode,
  value: number,
}
