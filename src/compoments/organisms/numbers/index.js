import React from "react";
import styled from "styled-components";

// ATOMS
import Section from "../../atoms/section";
import Space from "../../atoms/space";
import Container from "../../atoms/container";
import Bar from "../../atoms/bar";
import Text from "../../atoms/text";
import Align from "../../atoms/align";
import { colors, spaces } from "../../../styles/theme";

export default function Numbers(props) {
  const { id, title, items } = props;

  return (
    <Section id={id}>
      <Space top="160" bottom="160">
        <Container lg>
          <Align center>
            <Bar />
          </Align>
          <Text tag="h2" className="play-48" align="center">
            {title}
          </Text>
        </Container>
        <Space top="120">
          <Container md>
            <Blocks>
              {items.map((item, index) => (
                <Number key={String(index)}>
                  <Text
                    className="roboto-14"
                    color={colors.c_26386E}
                    align="center"
                  >
                    {item.label}
                  </Text>
                  <Space top="16">
                  <Text className="roboto-56" align="center">
                    {item.number}
                  </Text>
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
  border: 1px solid rgba(0,0,0,0.05);
`;
const Number = styled.div`
  flex: 1;
  border-right: 1px solid rgba(0,0,0,0.05);
  padding-top: ${spaces['32']};
  padding-bottom: ${spaces['32']};

  :last-child {
    border-right: none;
  }
`;
const Pattern = styled.div`
  width: 100%;
  height: 900px;
  background: url("/patterns/pattern.svg");
  opacity: 0.1;
`;
