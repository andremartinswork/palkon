// STYLED COMPONENTS
import styled, { css } from "styled-components";

// THEME
import { colors, containers, spaces } from "../../../styles/theme";

const Bar = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  width: 1px;
  height: ${spaces['160']};
  background-color: ${colors.c_00BFFF};
  transform: translateY(-50%);

  ${({ center }) => center && css`
    left: 50%;
    transform: translateY(-50%) translateX(0.5px);
  `}

  ${({ left }) => left && css`
    left: calc((100vw - ${containers.lg}) / 2);

    @media screen and (max-width: 1490px) {
      left: calc((100vw - ${containers.md}) / 2);
    }
    @media screen and (max-width: 1310px) {
      left: calc((100vw - 1024px) / 2);
    }
    @media screen and (max-width: 1100px) {
      left: 80px;
    }
    @media screen and (max-width: 992px) {
      left: 60px;
    }
    @media screen and (max-width: 768px) {
      left: 40px;
    }
    @media screen and (max-width: 578px) {
      left: 24px;
    }
  `}
`;

export default Bar;
