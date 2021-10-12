import styled, { css } from 'styled-components';

// THEME
import { containers } from '../../../styles/theme';

const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;

  ${({ xl }) => xl && css`
    width: ${containers.xl};
  `}

  ${({ lg }) => lg && css`
    width: ${containers.lg};

    @media screen and (max-width: 1490px) {
      width: ${containers.md};
    }
    @media screen and (max-width: 1310px) {
      width: 1024px;
    }
    @media screen and (max-width: 1100px) {
      width: calc(100% - 160px);
    }
    @media screen and (max-width: 992px) {
      width: calc(100% - 120px);
    }
    @media screen and (max-width: 768px) {
      width: calc(100% - 80px);
    }
    @media screen and (max-width: 578px) {
      width: calc(100% - 48px);
    }
  `}

  ${({ md }) => md && css`
    width: ${containers.md};

    @media screen and (max-width: 1310px) {
      width: 1024px;
    }
    @media screen and (max-width: 1100px) {
      width: calc(100% - 160px);
    }
    @media screen and (max-width: 992px) {
      width: calc(100% - 120px);
    }
    @media screen and (max-width: 768px) {
      width: calc(100% - 80px);
    }
    @media screen and (max-width: 578px) {
      width: calc(100% - 48px);
    }
  `}
`;

export default Container;
