import React from "react";

// STYLED COMPONENTS
import styled from "styled-components";

// ATOMS
import Container from "../../atoms/container";
import Section from "../../atoms/section";
import Space from "../../atoms/space";
import Text from "../../atoms/text";

export default function Footer(props) {
  const {
    title,
    description,
    labelEmail,
    email,
    labelInternship,
    internship,
    labelAddress,
    address,
    items,
  } = props;

  return (
    <Section id="footer">
      <Space top="160">
        <Container lg>
          <Text tag="h2" className="play-48">
            {title}
          </Text>
          <Blocks>
            <Left>
              <Top>
                <Text tag="p" className="roboto-16" maxWidth="410px">
                  {description}
                </Text>
              </Top>
              <Bottom>
                <Col>
                  <Text>
                    {labelEmail}
                  </Text>
                </Col>
                <Col>
                <Text>
                    {labelInternship}
                  </Text>
                </Col>
                <Col>
                <Text>
                    {labelInternship}
                  </Text>
                </Col>
              </Bottom>
            </Left>
            <Right>

            </Right>
          </Blocks>
        </Container>
      </Space>
    </Section>
  );
}

const Blocks = styled.div`

`;
const Left = styled.div`

`;
const Right = styled.div`

`;
const Top = styled.div`

`;
const Bottom = styled.div`

`;
const Col = styled.div`

`;