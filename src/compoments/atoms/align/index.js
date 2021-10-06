import styled, { css } from 'styled-components';

const Align = styled.div`
  display: flex;

  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}

  ${({ left }) =>
    left &&
    css`
      justify-content: flex-start;
    `}

  ${({ center }) =>
    center &&
    css`
      justify-content: center;
    `}

  ${({ right }) =>
    right &&
    css`
      justify-content: flex-end;
    `}

  ${({ top }) =>
    top &&
    css`
      align-items: flex-start;
    `}

  ${({ middle }) =>
    middle &&
    css`
      align-items: center;
    `}

  ${({ bottom }) =>
    bottom &&
    css`
      align-items: flex-end;
    `}
`;

export default Align;
