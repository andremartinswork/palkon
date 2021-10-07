import React from "react";
import styled from 'styled-components';
import { colors, spaces } from "../../../styles/theme";
// ATOMS
import Bar from "../../atoms/bar";
import Container from "../../atoms/container";
import Section from "../../atoms/section";
import Space from "../../atoms/space";
import Text from "../../atoms/text";

export default function Philosophy(props) {
  const { id, smallTitle, title, description, items } = props;

  return (
    <Section id={id}>
      <Space top="160" bottom="160">
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
            maxWidth="930px"
          />
        </Container>
        <Container md>
          <Space top="40" bottom="160">
            <Text tag="p" className="roboto-16" maxWidth="420px">
              {description}
            </Text>
          </Space>
          <Items>
            {
              items && items.length > 0 && items.map((item, index) => (
                <Item key={String(index)}>
                  <Left>
                    <Text className="play-48" color={colors.c_00BFFF}>
                      0{index + 1}
                    </Text>
                  </Left>
                  <Right>
                    <Text tag="h3" className="play-24">
                      {item.title}
                    </Text>
                    <Text tag="p" className="roboto-16">
                      {item.description}
                    </Text>
                  </Right>
                </Item>
              ))
            }
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
  padding-left: ${spaces['80']};
`;
const Item = styled.div`
  width: calc(50% - (${spaces['80']} / 2));
  margin-bottom: ${spaces['80']};
  display: inline-flex;
`;
const Left = styled.div`
  width: 70px;

  .play-48 {
    transform: translateY(-2rem);
  }
`;
const Right = styled.div`
  flex: 2;
`;