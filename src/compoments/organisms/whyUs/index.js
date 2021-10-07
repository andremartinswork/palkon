// STYLED COMPONENTS
import styled from "styled-components";

// NEXT
import Image from 'next/image';

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
        <Content>
          <Image
            src={image.href}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
          />
        </Content>
      </Top>
      <Blue>
        <Space top="160" bottom="160">
          <Container lg>
            <Blocks>
              <Bar />
              <Left>
                <Text className="roboto-14" color={colors.c_FFFFFF}>
                  {smallTitle}
                </Text>
              </Left>
              <Right>
                {items &&
                  items.length > 0 &&
                  items.map((item, index) => (
                    <Item key={String(index)}>
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

  :after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.c_26386E};
    height: 450px;
  }
`;
const Content = styled.div`
  position: relative;
  z-index: 2;
  width: calc(((100vw - 1548px) / 2) + 1548px);
  height: 100%;
  margin-left: auto;
`;
const Blue = styled.div`
  background-color: ${colors.c_26386E};
`;
const Blocks = styled.div`
  display: flex;
`;
const Left = styled.div`
  width: 200px;
`;
const Right = styled.div`
  flex: 2;
`;
const Item = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${spaces["120"]};

  :last-child {
    margin-bottom: 0;
  }
`;
const ItemLeft = styled.div`
  width: 40px;
`;
const ItemCenter = styled.div`
  flex: 2;
  margin-right: ${spaces[40]};
`;
const ItemRight = styled.div`
  width: 628px;
`;
