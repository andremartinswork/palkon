import styled, { css } from 'styled-components';

// THEME
import { containers } from '../../../styles/theme';

const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;

  ${({ xl }) =>
    xl &&
    css`
      width: ${containers.xl};

      @media screen and (max-width: 1280px) {
        width: ${containers.lg};
      }
      @media screen and (max-width: 1200px) {
        width: calc(100% - 160px);
      }
      @media screen and (max-width: 768px) {
        width: calc(100% - 80px);
      }
      @media screen and (max-width: 578px) {
        width: calc(100% - 48px);
      }
    `}

  ${({ lg }) =>
    lg &&
    css`
      width: ${containers.lg};

      @media screen and (max-width: 1200px) {
        width: calc(100% - 160px);
      }
      @media screen and (max-width: 768px) {
        width: calc(100% - 80px);
      }
      @media screen and (max-width: 578px) {
        width: calc(100% - 48px);
      }
    `}

  ${({ md }) =>
    md &&
    css`
      width: ${containers.md};

      @media screen and (max-width: 1279px) {
        width: calc(100% - 160px);
      }
      @media screen and (max-width: 992px) {
        width: calc(100% - 128px);
      }
      @media screen and (max-width: 768px) {
        width: calc(100% - 80px);
      }
      @media screen and (max-width: 578px) {
        width: calc(100% - 64px);
      }
      @media screen and (max-width: 440px) {
        width: calc(100% - 48px);
      }
    `}
`;

export default Container;
