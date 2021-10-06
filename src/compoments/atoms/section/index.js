import styled, { css } from 'styled-components';

const Section = styled.section`
  position: relative;

  ${({ bgColor }) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `}

  ${({ xHidden }) =>
    xHidden &&
    css`
      overflow-x: hidden;
    `}

  ${({ yHidden }) =>
    yHidden &&
    css`
      overflow-y: hidden;
    `}
`;

export default Section;
