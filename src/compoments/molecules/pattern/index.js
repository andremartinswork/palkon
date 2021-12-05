// STYLED-COMPONENTS
import styled from "styled-components";

import { Parallax } from "react-scroll-parallax";

export default function Pattern(props) {
  const { children } = props;

  return (
    <Content>
      <Index>{children}</Index>
      <Position>
        <Parallax className="custom-class" y={[-10, 10]} tagOuter="div">
          <Background />
        </Parallax>
      </Position>
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
  width: 100%;
  height: 90vh;
  background: url("/patterns/pattern.svg");
  opacity: 0.1;
  
  @media screen and (max-width: 768px) {
    height: 150vh;
  }
`;
const Position = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
