import React from "react";

// STYLED COMPONENTS
import styled from "styled-components";

// NEXT
import Image from "next/image";

// ATOMS
import Section from "../../atoms/section";
import Container from "../../atoms/container";
import Space from "../../atoms/space";
import Align from "../../atoms/align";
import Text from "../../atoms/text";

// THEME
import { colors } from "../../../styles/theme";

export default function Sentence(props) {
  const { id, text, name, job, image } = props;
  return (
    <Section id={id}>
      <Wrapper>
      <Content>
        <Container lg>
          <Space top="160" bottom="160">
            <Align right>
              <MaxWidth>
                <Text tag="p" className="play-32" color={colors.c_FFFFFF}>
                  {text}
                </Text>
                <Space top="80">
                  <Text className="roboto-16" color={colors.c_FFFFFF} weight={500} lineHeight={1}>
                    {name}
                  </Text>
                  <Text className="roboto-14" color={colors.c_FFFFFF} weight={300} spacing="normal" lineHeight={1} style={{ marginTop: '8px' }}>
                    {job}
                  </Text>
                </Space>
              </MaxWidth>
            </Align>
          </Space>
        </Container>
      </Content>
      <Image
        src={image.href}
        alt={image.alt}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      </Wrapper>
    </Section>
  );
}

const Wrapper = styled.div`
  @media screen and (max-width: 1100px) {
    img {
      object-position: left center!important;
    }
  }
 
`;
const Content = styled.div`
  position: relative;
  width: 100%;
  min-height: 720px;
  z-index: 2;
  display: flex;
  align-items: center;
  background-color: rgba(33, 64, 133, 0.3);

  @media screen and (max-width: 578px) {
    min-height: auto;
  }
`;
const MaxWidth = styled.div`
  max-width: 920px;
`;
