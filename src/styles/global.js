import { createGlobalStyle } from 'styled-components';
import { normalize, between } from 'polished';

const Global = createGlobalStyle`
  ${normalize()};

  h1, h2, h3, h4, h5 , h6, p {
    margin: 0;
  }

  html {
    font-size: 16px;

    @media screen and (max-width: 1920px) {
      font-size: ${between('10px', '16px', '320px', '1280px')}
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  // IMPORT KOERBER
  @font-face {
    font-family: 'Koerber';
    src: url('/fonts/koerber/Koerber-Light.otf') format('opentype');
    font-display: auto;
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Koerber';
    src: url('/fonts/koerber/Koerber-Regular.otf') format('opentype');
    font-display: auto;
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Koerber';
    src: url('/fonts/koerber/Koerber-Semibold.otf') format('opentype');
    font-display: auto;
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Koerber';
    src: url('/fonts/koerber/Koerber-Bold.otf') format('opentype');
    font-display: auto;
    font-weight: 600;
    font-style: normal;
  }

  /* LOCOMOTICE SCROLL */
  html.has-scroll-smooth {
    overflow: hidden;
  }
  html.has-scroll-dragging {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .has-scroll-smooth body {
    overflow: hidden;
  }
  .has-scroll-smooth [data-scroll-container] {
    min-height: 100vh;
  }
  [data-scroll-direction="horizontal"] [data-scroll-container] {
    height: 100vh;
    display: inline-block;
    white-space: nowrap;
  }
  [data-scroll-direction="horizontal"] [data-scroll-section] {
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    height: 100%;
  }
  .c-scrollbar {
    position: absolute;
    right: 0;
    top: 0;
    width: 11px;
    height: 100%;
    transform-origin: center right;
    transition: transform 0.3s, opacity 0.3s;
    opacity: 0;
  }
  .c-scrollbar:hover {
    transform: scaleX(1.45);
  }
  .c-scrollbar:hover, .has-scroll-scrolling .c-scrollbar, .has-scroll-dragging .c-scrollbar {
    opacity: 1;
  }
  [data-scroll-direction="horizontal"] .c-scrollbar {
    width: 100%;
    height: 10px;
    top: auto;
    bottom: 0;
    transform: scaleY(1);
  }
  [data-scroll-direction="horizontal"] .c-scrollbar:hover {
    transform: scaleY(1.3);
  }
  .c-scrollbar_thumb {
    position: absolute;
    top: 0;
    right: 0;
    background-color: black;
    opacity: 0.5;
    width: 7px;
    border-radius: 10px;
    margin: 2px;
    cursor: -webkit-grab;
    cursor: grab;
  }
  .has-scroll-dragging .c-scrollbar_thumb {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }
  [data-scroll-direction="horizontal"] .c-scrollbar_thumb {
    right: auto;
    bottom: 0;
  }
`;

export default Global;
