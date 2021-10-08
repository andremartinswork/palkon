import styled from "styled-components";

// ATOMS
import Section from "../../atoms/section";
import Space from "../../atoms/space";
import Text from "../../atoms/text";
import Bar from "../../atoms/bar";
import Container from "../../atoms/container";

// THEME
import { colors, spaces } from "../../../styles/theme";

export default function Advisors(props) {
  const { id, smallTitle, title, items } = props;

  return (
    <Section id={id}>
      <Space top="160" bottom="80">
        <Container lg>
          <Bar />
          <Space bottom="64">
            <Text tag="h6" className="roboto-14">
              {smallTitle}
            </Text>
          </Space>
          <Text
            tag="h2"
            className="play-48"
            editor
            text={title}
            maxWidth="770px"
          />
          <Space top="120">
            <Items>
              {items &&
                items.length > 0 &&
                items.map((item, index) => (
                  <Item key={String(index)}>
                    <Text className="play-24" lineHeight={1}>
                      {item.name}
                    </Text>
                    <Text
                      className="roboto-14"
                      spacing="normal"
                      weight={300}
                      color={colors.c_00BFFF}
                    >
                      {item.job}
                    </Text>
                    <Space top="32" bottom="32">
                      <Text className="roboto-16">{item.description}</Text>
                    </Space>

                    <Button
                      type="button"
                      aria-label="View more"
                      className="roboto-12"
                    >
                      View more
                    </Button>
                  </Item>
                ))}
            </Items>
          </Space>
        </Container>
      </Space>
    </Section>
  );
}

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;
  margin-right: -20px;
`;
const Item = styled.div`
  width: calc(33.333% - 40px);
  padding-left: ${spaces["32"]};
  padding-right: ${spaces["32"]};
  padding-top: ${spaces["48"]};
  padding-bottom: ${spaces["32"]};
  box-sizing: border-box;
  background-color: ${colors.c_F8FAFF};
  border-radius: 8px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: ${spaces["80"]};
`;
const Button = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;

  @media (hover: hover) and (pointer: fine) {
    :hover {
      cursor: pointer;
      color: ${colors.c_00BFFF}!important;
    }
  }
`;
