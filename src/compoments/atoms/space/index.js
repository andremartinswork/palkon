import styled, { css } from 'styled-components';

import { spaces } from '../../../styles/theme';

const Space = styled.div`
  ${({ top }) =>
    top &&
    css`
      padding-top: ${spaces[top]};
    `}

  ${({ bottom }) =>
    bottom &&
    css`
      padding-bottom: ${spaces[bottom]};
    `}
`;

export default Space;
