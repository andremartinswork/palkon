// REACT
import { useState } from "react";

// STYLED COMPONENTS
import styled from "styled-components";

// REACT REVEAL
import Fade from "react-reveal/Fade";

// NEXT
import Image from "next/image";

// ATOMS
import Section from "../../atoms/section";
import Space from "../../atoms/space";
import Text from "../../atoms/text";
import Bar from "../../atoms/bar";
import Container from "../../atoms/container";

// MOLECULES
import ModalPeople from "../../molecules/modals/modalPeople";

// THEME
import { colors, spaces } from "../../../styles/theme";
import image from "next/image";

export default function Advisors(props) {
  const { id, smallTitle, title, items } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(false);

  const toggleModal = (val) => {
    setIsOpen(!isOpen);
    !isOpen && setSelected(val);
  };

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
            maxWidth="960px"
          />
          <Space top="120">
            <Items>
              {items &&
                items.length > 0 &&
                items.map((item, index) => (
                  <Fade key={String(index)} delay={150 * index}>
                    <Item>
                      <Wrapper>
                        {item.image && item.image.href && (
                          <Relative>
                            <Image
                              src={item.image.href}
                              alt={item.name}
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center"
                            />
                          </Relative>
                        )}
                        <div>
                          <Text className="play-24" lineHeight={1}>
                            {item.name}
                          </Text>
                          <Space top="8">
                            <Text
                              className="roboto-14"
                              spacing="normal"
                              weight={300}
                              color={colors.c_00BFFF}
                            >
                              {item.job}
                            </Text>
                          </Space>
                        </div>
                      </Wrapper>
                      <Space top="32" bottom="32">
                        <Text className="roboto-16" ellipsis={3}>
                          {item.description}
                        </Text>
                      </Space>
                      <Button
                        type="button"
                        aria-label="View more"
                        className="roboto-14"
                        onClick={() => toggleModal(item)}
                      >
                        View more
                      </Button>
                    </Item>
                  </Fade>
                ))}
            </Items>
          </Space>
        </Container>
      </Space>
      <ModalPeople
        selected={selected}
        toggleModal={toggleModal}
        isOpen={isOpen}
      />
    </Section>
  );
}

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;
  margin-right: -20px;

  .react-reveal {
    width: calc(33.333% - 40px);
    margin-bottom: ${spaces["80"]};
    margin-left: 20px;
    margin-right: 20px;

    @media screen and (max-width: 1100px) {
      width: calc(50% - 40px);
    }
    @media screen and (max-width: 768px) {
      width: calc(50% - 32px);
      margin-left: 16px;
      margin-right: 16px;
    }
    @media screen and (max-width: 640px) {
      width: 100%;
      margin-left: 16px;
      margin-right: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    margin-left: -16px;
    margin-right: -16px;
  }
`;
const Item = styled.div`
  padding-left: ${spaces["32"]};
  padding-right: ${spaces["32"]};
  padding-top: ${spaces["32"]};
  padding-bottom: ${spaces["32"]};
  box-sizing: border-box;
  background-color: ${colors.c_F8FAFF};
  border-radius: 8px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Relative = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 16px;
`;
const Button = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${colors.c_00BFFF}!important;
  letter-spacing: normal !important;
  font-weight: 400 !important;
  transition: all 0.5s ease;

  @media (hover: hover) and (pointer: fine) {
    :hover {
      cursor: pointer;
      color: ${colors.c_26386E}!important;
    }
  }
`;
