import React from "react";

// NEXT
import NextLink from "next/link";

// REACT SCROLL
import { Link } from "react-scroll";

// STYLED COMPONENTS
import styled from "styled-components";
import { colors, spaces } from "../../../styles/theme";

// ATOMS
import Container from "../../atoms/container";
import Section from "../../atoms/section";
import Space from "../../atoms/space";
import Text from "../../atoms/text";
import ChevronDown from "../../atoms/icons/chevronDown";

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
                  <Text className="play-16">{labelEmail}</Text>
                  <Text className="roboto-16">{email}</Text>
                </Col>
                <Col>
                  <Text className="play-16">{labelInternship}</Text>
                  <Text className="roboto-16">{internship}</Text>
                </Col>
                <Col>
                  <Text className="play-16">{labelAddress}</Text>
                  <Text editor className="roboto-16" text={address} />
                </Col>
              </Bottom>
            </Left>
            <Right>
              {items &&
                items.length > 0 &&
                items.map((item, index) => (
                  <Link
                    key={String(index)}
                    to={item.section}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    <Text className="roboto-24">{item.label}</Text>
                  </Link>
                ))}
            </Right>
          </Blocks>
        </Container>
        <Border>
          <Container lg>
            <Flex>
              <Rights>
                <Text className="roboto-14" spacing="normal">
                  2021 © Palkon Capital Management
                </Text>
              </Rights>
              <Legal>
                <NextLink href="/legal-policy">
                  <a>
                    <Text className="roboto-14" spacing="normal" noWrap>
                      Legal notice
                    </Text>
                  </a>
                </NextLink>
              </Legal>
              <Back>
              <Link to="banner" smooth={true} offset={0} duration={500}>
                <BackToTop>
                  <Text
                    className="roboto-14"
                    weight={400}
                    spacing="normal"
                    color={colors.c_00BFFF}
                    noWrap
                  >
                    Back to top
                  </Text>
                  <ChevronDown />
                </BackToTop>
              </Link>
              </Back>
            </Flex>
          </Container>
        </Border>
      </Space>
    </Section>
  );
}

const Blocks = styled.div`
  margin-top: ${spaces["32"]};
  padding-bottom: ${spaces["160"]};
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 578px) {
    padding-bottom: ${spaces["120"]};
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Left = styled.div``;
const Right = styled.div`
  @media screen and (max-width: 500px) {
    margin-top: ${spaces["80"]};
  }

  a {
    display: block;
    text-align: right;
    margin-bottom: ${spaces["24"]};

    @media screen and (max-width: 500px) {
      text-align: left;
    }

    @media (hover: hover) and (pointer: fine) {
      :hover {
        cursor: pointer;

        .roboto-24 {
          color: ${colors.c_00BFFF}!important;
        }
      }
    }
  }
`;
const Top = styled.div`
  @media screen and (max-width: 768px) {
    max-width: 350px;
  }
  @media screen and (max-width: 550px) {
    max-width: 300px;
  }
`;
const Bottom = styled.div`
  display: flex;
  margin-top: ${spaces["80"]};

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;
const Col = styled.div`
  margin-right: ${spaces["120"]};

  :last-child {
    margin-right: 0;
  }

  .play-16 {
    margin-bottom: 8px;
  }

  @media screen and (max-width: 900px) {
    margin-right: 0;
    margin-bottom: ${spaces["56"]};

    :last-child {
      margin-bottom: 0;
    }
  }
`;
const Border = styled.div`
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  min-height: 88px;
  box-sizing: border-box;
  padding-top: ${spaces["16"]};
  padding-bottom: ${spaces["16"]};

  @media screen and (max-width: 420px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
const Rights = styled.div`
  margin-right: ${spaces["80"]};

  @media screen and (max-width: 470px) {
    margin-right: ${spaces["40"]};
  }

  @media screen and (max-width: 420px) {
    width: 100%;
    margin-right: 0;
  }
`;
const Legal = styled.div`
  flex: 2;

  @media (hover: hover) and (pointer: fine) {
    :hover {
      cursor: pointer;

      .roboto-14 {
        color: ${colors.c_00BFFF}!important;
      }
    }
  }

  @media screen and (max-width: 420px) {
    flex: initial;
    width: 50%;
  }
`;
const Back = styled.div`
  @media screen and (max-width: 420px) {
    width: 50%;
    display: flex;
    justify-content: flex-end;
  }
`; 
const BackToTop = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 14px;
    margin-left: 8px;
    transform: rotate(-180deg);
    fill: ${colors.c_00BFFF};
  }

  @media (hover: hover) and (pointer: fine) {
    :hover {
      cursor: pointer;

      .roboto-14 {
        transform: translateX(-8px);
      }
    }
  }
`;
