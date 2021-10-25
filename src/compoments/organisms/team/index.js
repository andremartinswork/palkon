// REACT
import { useState } from 'react';

// STYLED COMPONENTS
import styled from "styled-components";

// REACT REVEAL
import Fade from "react-reveal/Fade";

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

export default function Team(props) {
  const { id, smallTitle, title, items } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(false);

  const toggleModal = (val) => {
    setIsOpen(!isOpen);
    !isOpen && setSelected(val)
  }

  return (
    <Section id={id} bgColor={colors.c_F8FAFF}>
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
            maxWidth="770px"
          />
          <Space top="120">
            <Items>
              {items &&
                items.length > 0 &&
                items.map((item, index) => (
                  <Fade key={String(index)} delay={150 * index}>
                    <Item>
                      <Text className="play-24" lineHeight={1}>
                        {item.name}
                      </Text>
                      <Space top="16">
                        <Text
                          className="roboto-14"
                          spacing="normal"
                          weight={300}
                          color={colors.c_00BFFF}
                        >
                          {item.job}
                        </Text>
                      </Space>
                      <Space top="40" bottom="32">
                        <Text className="roboto-16" ellipsis={3}>{item.description}</Text>
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
  padding-top: ${spaces["40"]};
  padding-bottom: ${spaces["40"]};
  box-sizing: border-box;
  background-color: ${colors.c_FFFFFF};
  border-radius: 8px;
`;
const Button = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${colors.c_00BFFF}!important;
  letter-spacing: normal!important;
  font-weight: 400!important;
  transition: all 0.5s ease;

  @media (hover: hover) and (pointer: fine) {
    :hover {
      cursor: pointer;
      color: ${colors.c_26386E}!important;
    }
  }
`;
