// STYLED COMPONENTS
import { createGlobalStyle } from 'styled-components';

// POLISHED
import { normalize, between, rem } from 'polished';

// THEME
import { colors, spaces, texts } from './theme';

const Global = createGlobalStyle`
  ${normalize()};

  * {
    outline: none;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
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

    p {
      margin-bottom: ${spaces['32']};

      :last-child {
        margin-bottom: 0;
      }
    }
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
  .roboto-24 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: ${texts['24']};
    letter-spacing: normal;
    line-height: 1;
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

    @media screen and (max-width: 578px) {
      font-size: ${texts['56']};
      line-height: ${rem('72px')};
    }
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
  .play-16 {
    font-family: 'Playfair Display', serif;
    font-style: normal;
    font-weight: normal;
    font-size: ${texts['16']};
    letter-spacing: normal;
    line-height: 1;
    color: ${colors.c_26386E};
  }
`;

export default Global;
