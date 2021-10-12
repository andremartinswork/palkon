// STYLED COMPONENTS
import styled from "styled-components";

// NEXT
import Image from "next/image";

// REACT REVEAL
import Fade from "react-reveal/Fade";

// PARALLAX
import { Parallax } from "react-scroll-parallax";

// ATOMS
import Section from "../../atoms/section";
import Space from "../../atoms/space";
import Container from "../../atoms/container";
import Text from "../../atoms/text";
import Bar from "../../atoms/bar";

// THEME
import { colors, spaces } from "../../../styles/theme";

export default function WhyUs(props) {
  const { id, image, smallTitle, items } = props;

  return (
    <Section id={id}>
      <Top>
        <Parallax className="whyUs-parallax" y={[-20, 20]} tagOuter="div">
          <Content>
            <Image
              src={image.href}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
            />
          </Content>
        </Parallax>
      </Top>
      <Blue>
        <Bar left />
        <Space top="160" bottom="160">
          <Container lg>
            <Blocks>
              <Left>
                <Text
                  className="roboto-14"
                  color={colors.c_FFFFFF}
                  weight={500}
                >
                  {smallTitle}
                </Text>
              </Left>
              <Right>
                {items &&
                  items.length > 0 &&
                  items.map((item, index) => (
                    <Fade key={String(index)} dealy={150 * index}>
                      <Item>
                        <ItemLeft>
                          <Text className="roboto-14" spacing="normal">
                            0{index + 1}
                          </Text>
                        </ItemLeft>
                        <ItemCenter>
                          <Text
                            tag="h3"
                            className="play-48"
                            color={colors.c_FFFFFF}
                          >
                            {item.title}
                          </Text>
                        </ItemCenter>
                        <ItemRight>
                          <Text
                            tag="p"
                            className="roboto-16"
                            color={colors.c_F8FAFF}
                          >
                            {item.text}
                          </Text>
                        </ItemRight>
                      </Item>
                    </Fade>
                  ))}
              </Right>
            </Blocks>
          </Container>
        </Space>
      </Blue>
    </Section>
  );
}

const Top = styled.div`
  position: relative;
  width: 100%;
  height: 900px;
  overflow: hidden;

  :after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.c_26386E};
    height: 450px;
  }

  @media screen and (max-width: 1440px) {
    height: 720px;
  }
  @media screen and (max-width: 1366px) {
    height: 620px;
  }

  .whyUs-parallax {
    position: relative;
    z-index: 2;
    height: 1024px;

    @media screen and (max-width: 1440px) {
      height: 850px;
    }
    @media screen and (max-width: 1366px) {
      height: 750px;
    }
  }
`;
const Content = styled.div`
  position: relative;
  z-index: 2;
  width: calc(((100vw - 1548px) / 2) + 1548px);
  height: 1024px;
  margin-left: auto;

  @media screen and (max-width: 1630px) {
    width: 100%;
  }
  @media screen and (max-width: 1440px) {
    height: 850px;
  }
  @media screen and (max-width: 1366px) {
    height: 750px;
  }
`;
const Blue = styled.div`
  position: relative;
  background-color: ${colors.c_26386E};
`;
const Blocks = styled.div`
  display: flex;

  @media screen and (max-width: 1310px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  width: 200px;

  @media screen and (max-width: 1310px) {
    margin-bottom: ${spaces["80"]};
  }
`;
const Right = styled.div`
  flex: 2;

  .react-reveal {
    width: 100%;
    margin-bottom: ${spaces["120"]};

    :last-child {
      margin-bottom: 0;
    }

    @media screen and (max-width: 578px) {
      margin-bottom: ${spaces["80"]};
    }
  }
`;
const Item = styled.div`
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const ItemLeft = styled.div`
  width: 40px;
`;
const ItemCenter = styled.div`
  flex: 2;
  margin-right: ${spaces[40]};
  transform: translateY(-14px);

  @media screen and (max-width: 768px) {
    transform: translateY(0);

    margin-top: ${spaces["24"]};
    margin-bottom: ${spaces["24"]};
  }
`;
const ItemRight = styled.div`
  max-width: 628px;
  transform: translateY(-8px);

  @media screen and (max-width: 1490px) {
    max-width: 500px;
  }
  @media screen and (max-width: 1100px) {
    max-width: 420px;
  }
  @media screen and (max-width: 900px) {
    max-width: 350px;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
    transform: translateY(0);
  }
`;
