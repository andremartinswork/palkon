import { rem } from 'polished';

export const colors = {
  c_0060FF: '#0060FF',
  c_00FFD2: '#00FFD2',
  c_FFFFFF: '#FFFFFF',
  c_000000: '#000000',
  c_1C1C1C: '#1C1C1C',
  c_707070: '#707070',
  c_F5F3F1: '#F5F3F1'
};

export const containers = {
  xl: '1280px',
  lg: '1120px'
};

export const spaces = {
  160: rem('160px'),
  120: rem('120px'),
  80: rem('80px'),
  72: rem('72px'),
  64: rem('64px'),
  56: rem('56px'),
  48: rem('48px'),
  40: rem('40px'),
  32: rem('32px'),
  24: rem('24px'),
  16: rem('16px')
};

export const texts = {
  32: rem('32px'),
  24: rem('24px'),
  18: rem('18px'),
  16: rem('16px'),
  14: rem('14px'),
  12: rem('12px'),
  10: rem('10px')
};

const theme = {
  colors,
  containers,
  spaces,
  texts
};

export default theme;
