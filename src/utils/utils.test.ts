import * as Utils from './';
import { ILineItem } from '../types';

const testCase: ILineItem[] = [
  { id:"1", payee: "A", action: "ADD", value: 0 },
  { id:"2", payee: "B", action: "ADD", value: 0 },
  { id:"3", payee: "C", action: "ADD", value: 0 },

  { id:"4", payee: "A", action: "ADD", value: 10 },
  { id:"5", payee: "B", action: "ADD", value: 20 },
  { id:"6", payee: "C", action: "ADD", value: 30 },

  { id:"7", payee: "A", action: "ADD", value: 10 },
  { id:"8", payee: "B", action: "ADD", value: 10 },
  { id:"9", payee: "C", action: "ADD", value: 10 },

  { id:"10", payee: "A", action: "SUB", value: 5 },
  { id:"11", payee: "B", action: "SUB", value: 5 },
  { id:"12", payee: "C", action: "SUB", value: 5 },

  { id:"13", payee: "A", action: "DIV", value: 2 },
  { id:"14", payee: "B", action: "DIV", value: 2 },
  { id:"15", payee: "C", action: "DIV", value: 2 }
];

describe('Utils', () => {
  describe('totals', () => {
    it('Calcultaes totals correctly', () => {
      expect(Utils.totals(testCase)).toEqual({
        "A": 7.5,
        "B": 12.5,
        "C": 17.5,
      });
    })
  })
});
