// STYLED COMPONENTS
import styled from "styled-components";

// POLISHED
import { rem } from "polished";

// REACT REVEAL
import Fade from "react-reveal/Fade";

// ATOMS
import Bar from "../../atoms/bar";
import Container from "../../atoms/container";
import Section from "../../atoms/section";
import Space from "../../atoms/space";
import Text from "../../atoms/text";

// THEME
import { colors, spaces } from "../../../styles/theme";

export default function Philosophy(props) {
  const { id, smallTitle, title, description, items } = props;

  return (
    <Section id={id}>
      <Bar left />
      <Space top="160" bottom="80">
        <Container lg>
          <Space bottom="32">
            <Text tag="h5" className="roboto-14" weight={500}>
              {smallTitle}
            </Text>
          </Space>
          <Text
            tag="h2"
            className="play-48"
            editor
            text={title}
            maxWidth="930px"
          />
        </Container>
        <Container md>
          <Space top="64" bottom="120">
            <Text tag="p" className="roboto-16" maxWidth="420px">
              {description}
            </Text>
          </Space>
          <Items>
            {items &&
              items.length > 0 &&
              items.map((item, index) => (
                <Fade key={String(index)} delay={150 * index}>
                  <Item>
                    <Left>
                      <Text
                        className="play-48"
                        color={colors.c_00BFFF}
                        lineHeight={1}
                      >
                        0{index + 1}
                      </Text>
                    </Left>
                    <Right>
                      <Text tag="h3" className="play-24">
                        {item.title}
                      </Text>
                      <Space top="16">
                        <Text
                          tag="p"
                          className="roboto-14"
                          spacing="normal"
                          lineHeight={rem("30px")}
                        >
                          {item.description}
                        </Text>
                      </Space>
                    </Right>
                  </Item>
                </Fade>
              ))}
          </Items>
        </Container>
      </Space>
    </Section>
  );
}

const Items = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-left: ${spaces["80"]};
  padding-right: ${spaces["80"]};

  @media screen and (max-width: 900px) {
    padding-left: 0;
    padding-right: 0;
  }
  @media screen and (max-width: 768px) {
    padding-left: ${spaces["120"]};
    padding-right: ${spaces["120"]};
  }
  @media screen and (max-width: 650px) {
    padding-left: 0;
    padding-right: 0;
  }

  .react-reveal {
    width: calc(50% - (${spaces["80"]} / 2));
    padding-bottom: ${spaces["80"]};

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;
const Item = styled.div`
  display: flex;
  
  
`;
const Left = styled.div`
  width: 70px;
  transform: translateY(-6px);

  @media screen and (max-width: 578px) {
    transform: translateY(0);
  }
`;
const Right = styled.div`
  flex: 2;
`;
