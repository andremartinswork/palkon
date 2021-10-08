// STYLED-COMPONENTS
import styled from "styled-components";

export default function Pattern(props) {
  const { children } = props;
  return (
    <Content>
      <Index>
      {children}
      </Index>
      <Background />
    </Content>
  );
}

const Content = styled.div`
  position: relative;
`;
const Index = styled.div`
  position: relative;
  z-index: 2;
`;
const Background = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 50%;
  background: url("/patterns/pattern.svg");
  opacity: 0.1;
`;
