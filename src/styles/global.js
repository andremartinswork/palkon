// STYLED COMPONENTS
import { createGlobalStyle } from 'styled-components';

// POLISHED
import { normalize, between, rem } from 'polished';

// THEME
import { colors, texts } from './theme';

const Global = createGlobalStyle`
  ${normalize()};

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;

    @media screen and (max-width: 1440px) {
      font-size: 14px;
    }
    @media screen and (max-width: 1310px) {
      font-size: 13px;
    }
    @media screen and (max-width: 1100px) {
      font-size: 12px;
    }
    /* @media screen and (max-width: 768px) {
      font-size: 11px;
    } */
    /* @media screen and (max-width: 578px) {
      font-size: 10px;
    } */
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  // TEXTS
  .roboto-10 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: ${texts['10']};
    line-height: 1;
    letter-spacing: 0.1em;
    color: ${colors.c_FFFFFF};
  }
  .roboto-12 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: ${texts['12']};
    line-height: 1;
    color: ${colors.c_26386E};
    transition: all 0.4s ease;
  }
  .roboto-14 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: ${texts['14']};
    letter-spacing: 0.4em;
    color: ${colors.c_999DAA};
  }
  .roboto-16 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: ${texts['16']};
    letter-spacing: normal;
    line-height: ${rem('32px')};
    color: ${colors.c_999DAA};
  }
  .roboto-18 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: ${texts['18']};
    letter-spacing: normal;
    line-height: ${rem('26px')};
    color: ${colors.c_26386E};
  }
  .roboto-56 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: ${texts['56']};
    letter-spacing: normal;
    line-height: ${rem('74px')};
    color: ${colors.c_00BFFF};
  }
  
  .play-72 {
    font-family: 'Playfair Display', serif;
    font-style: normal;
    font-weight: 400;
    font-size: ${texts['72']};
    letter-spacing: normal;
    line-height: ${rem('92px')};
    color: ${colors.c_FFFFFF};
  }
  .play-48 {
    font-family: 'Playfair Display', serif;
    font-style: normal;
    font-weight: 400;
    font-size: ${texts['48']};
    letter-spacing: normal;
    line-height: ${rem('64px')};
    color: ${colors.c_26386E};

    @media screen and (max-width: 578px) {
      font-size: ${texts['32']};
      line-height: ${rem('48px')};
    }
  }
  .play-24 {
    font-family: 'Playfair Display', serif;
    font-style: normal;
    font-weight: 400;
    font-size: ${texts['24']};
    letter-spacing: normal;
    line-height: ${rem('40px')};
    color: ${colors.c_26386E};
  }
`;

export default Global;
