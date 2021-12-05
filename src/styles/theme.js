import { rem } from 'polished';

export const colors = {
  c_00BFFF: '#00BFFF',
  c_26386E: '#26386E',
  c_364051: '#364051',
  c_F8FAFF: '#F8FAFF',
  c_999DAA: '#878a94',
  c_FFFFFF: '#FFFFFF'
};

export const containers = {
  xl: '1548px',
  lg: '1352px',
  md: '1158px'
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
  16: rem('16px'),
  8: rem('8px')
};

export const texts = {
  72: rem('72px'),
  64: rem('64px'),
  56: rem('56px'),
  48: rem('48px'),
  32: rem('32px'),
  24: rem('24px'),
  20: rem('20px'),
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
