const standardDarker = 0.1;
const standardLighter = 0.1;
const standardOpactiy = 0.5;
const standardRadius = '2px';
const baseUnit = 5;

export const namedColors = {
  white: '#fff',
  black: '#494949',
  active: '#0063E1',
  bgColorFrame: '#343B4B',
  bgColorTally: '#fff',
  bgColorPad: '#D8D8D8',
  fontColorLight: '#FFF',
  fontColorDark: '#494949',
  fontColorButton: '#494949',
}

export const theme = {
  name: 'lightTheme',
  namedColors,
  standardOpactiy,
  standardLighter,
  standardDarker,
  standardRadius,
  baseUnit,
}

export type Theme = typeof theme;
export default theme;

