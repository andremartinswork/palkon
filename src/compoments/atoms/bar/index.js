// STYLED COMPONENTS
import styled from 'styled-components';
import { colors } from '../../../styles/theme';

const Bar = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  width: 1px;
  height: 160px;
  background-color: ${colors.c_00BFFF};
  transform: translateY(-150%);
`;

export default Bar;
