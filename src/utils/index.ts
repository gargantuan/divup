import R from 'ramda';
import { NumPadMode, ILineItem } from '../types'

const processLineItem = (total: number, action: NumPadMode, amount: number) => {
  switch (action) {
    case "ADD":
      return total + amount;
    case "SUB":
      return total - amount;
    case "MULT":
      return total * amount;
    case "DIV":
      return amount > 0 ? total / amount : total;
    default:
      return total;
  }
};

const reduceTotal = (items: ILineItem[]) => {
  return items.reduce((acc, next) => {
    return processLineItem(acc, next.action, next.value);
  }, 0);
};

export const totals = R.compose(
  R.mapObjIndexed(reduceTotal),
  R.groupBy<ILineItem>(R.prop('payee'))
);
