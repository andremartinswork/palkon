// STYLED COMPONENTS
import styled from "styled-components";

// REACT REVEAL
import Fade from "react-reveal/Fade";

// ATOMS
import Section from "../../atoms/section";
import Space from "../../atoms/space";
import Container from "../../atoms/container";
import Bar from "../../atoms/bar";
import Text from "../../atoms/text";

// THEME
import { colors, spaces } from "../../../styles/theme";

export default function Numbers(props) {
  const { id, title, items } = props;

  return (
    <Section id={id}>
      <Bar center />
      <Space top="160" bottom="160">
        <Container lg>
          <Text tag="h2" className="play-48" align="center">
            {title}
          </Text>
        </Container>
        <Space top="120">
          <Container md>
            <Blocks>
              {items &&
                items.length > 0 &&
                items.map((item, index) => (
                  <Number key={String(index)}>
                    <Fade delay={150 * index}>
                      <Text
                        className="roboto-14"
                        color={colors.c_26386E}
                        align="center"
                        weight={500}
                      >
                        {item.label}
                      </Text>
                    </Fade>
                    <Space top="16">
                      <Fade delay={150 * index}>
                        <Text className="roboto-56" align="center" weight={400}>
                          {item.number}
                        </Text>
                      </Fade>
                    </Space>
                  </Number>
                ))}
            </Blocks>
          </Container>
        </Space>
      </Space>
    </Section>
  );
}

const Blocks = styled.div`
  width: 100%;
  padding-top: ${spaces["80"]};
  padding-bottom: ${spaces["80"]};
  border-radius: 8px;
  background-color: ${colors.c_FFFFFF};
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Number = styled.div`
  flex: 1;
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  padding-top: ${spaces["32"]};
  padding-bottom: ${spaces["32"]};

  :last-child {
    border-right: none;
  }

  @media screen and (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    width: 100%;
    padding-top: ${spaces["80"]};
    padding-bottom: ${spaces["80"]};

    :first-child {
      padding-top: 0;
    }

    :last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
`;
