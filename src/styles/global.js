// STYLED COMPONENTS
import { createGlobalStyle } from 'styled-components';

// POLISHED
import { normalize, between, rem } from 'polished';

// THEME
import { colors, texts } from './theme';

const Global = createGlobalStyle`
  ${normalize()};

  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;

    /* @media screen and (max-width: 1920px) {
      font-size: ${between('10px', '16px', '320px', '1280px')}
    } */
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  // TEXTS
  .roboto-14 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: ${texts['14']};
    letter-spacing: normal;
    line-height: ${rem('24px')};
    color: ${colors.c_999DAA};
    /* FIX EMPTY SPACE */
    transform: translateY(-0.5rem);
  }
  .roboto-14 {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
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
    /* FIX EMPTY SPACE */
    transform: translateY(-0.5rem);
  }
  .play-48 {
    font-family: 'Playfair Display', serif;
    font-style: normal;
    font-weight: 400;
    font-size: ${texts['48']};
    letter-spacing: normal;
    line-height: ${rem('64px')};
    color: ${colors.c_26386E};
    /* FIX EMPTY SPACE */
    transform: translateY(-1rem);
  }
  .play-24 {
    font-family: 'Playfair Display', serif;
    font-style: normal;
    font-weight: 400;
    font-size: ${texts['24']};
    letter-spacing: normal;
    line-height: ${rem('40px')};
    color: ${colors.c_26386E};
    transform: translateY(-1rem);
  }
`;

export default Global;
