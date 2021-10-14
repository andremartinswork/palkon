// REACT
import { useState } from "react";

// STYLED COMPONENTS
import styled, { css } from "styled-components";

// ATOMS
import Modal from "../../../atoms/modal";
import Space from "../../../atoms/space";
import Text from "../../../atoms/text";
import IconLinkedIn from "../../../atoms/icons/linkedIn";
import IconFacebook from "../../../atoms/icons/facebook";

// THEME
import { colors, spaces } from "../../../../styles/theme";

export default function ModalPeople(props) {
  const { selected, isOpen, toggleModal } = props;

  const [animation, setAnimation] = useState(false);

  const onAfterOpen = () => {
    setAnimation(true);
  };

  const onRequestClose = () => {
    setAnimation(false);

    setTimeout(() => {
      toggleModal();
    }, 1000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
    >
      <Overlay open={animation} onClick={onRequestClose} />
      <Content open={animation}>
        <PositionButtonClose>
          <ButtonClose
            type="button"
            aria-label="close modal"
            onClick={onRequestClose}
          />
        </PositionButtonClose>
        <Text tag="h2" className="play-48">
          {selected.name}
        </Text>
        <Space top="40" bottom="80">
          <Text tag="p" className="roboto-18" color={colors.c_00BFFF}>
            {selected.job}
          </Text>
        </Space>
        <Text editor className="roboto-16" text={selected.text} />
        {selected && (selected.linkedIn || selected.facebook) && (
          <Space top="160">
            <Social>
              {selected.linkedIn && (
                <a
                  href={selected.linkedIn}
                  target="_blank"
                  aria-label={`${selected.name} - linkedIn`}
                  rel="noopener noreferrer"
                >
                  <IconLinkedIn />
                </a>
              )}
              {selected.facebook && (
                <a
                  href={selected.facebook}
                  target="_blank"
                  aria-label={`${selected.name} - facebook`}
                  rel="noopener noreferrer"
                >
                  <IconFacebook />
                </a>
              )}
            </Social>
          </Space>
        )}
      </Content>
    </Modal>
  );
}

const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0);
  transform: translateX(100%);
  transition: all 1s ease;

  ${({ open }) =>
    open &&
    css`
      transform: translateX(0);
      background-color: rgba(0, 0, 0, 0.7);
    `}
`;
const Content = styled.div`
  position: relative;
  z-index: 10;
  width: 50vw;
  min-height: 100vh;
  padding-top: ${spaces["160"]};
  padding-bottom: ${spaces["160"]};
  padding-left: ${spaces["120"]};
  padding-right: ${spaces["120"]};
  background-color: white;
  margin-left: auto;
  z-index: 10000000000;
  box-sizing: border-box;
  transform: translateX(100%);
  transition: all 0.8s ease;

  ${({ open }) =>
    open &&
    css`
      transform: translateX(0);
    `}

  @media screen and (max-width: 1100px) {
    width: 70vw;
  }
  @media screen and (max-width: 768px) {
    padding-left: ${spaces["80"]};
    padding-right: ${spaces["80"]};
  }
  @media screen and (max-width: 578px) {
    width: 100vw;
    padding-top: ${spaces["120"]};
    padding-bottom: ${spaces["120"]};
    padding-left: ${spaces["40"]};
    padding-right: ${spaces["40"]};
  }
`;
const Social = styled.div`
  display: flex;

  a {
    display: block;
    width: 40px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    margin-right: 8px;
    transition: all 0.5s ease;

    svg {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);

      path {
        transition: all 0.5s ease;
      }
    }

    @media (hover: hover) and (pointer: fine) {
      :hover {
        border: 1px solid ${colors.c_26386E};

        svg {
          path {
            fill: ${colors.c_26386E};
          }
        }
      }
    }
  }
`;
const PositionButtonClose = styled.div`
  position: absolute;
  top: 30px;
  right: 32px;

  @media screen and (max-width: 578px) {
    right: 24px;
  }
`;
const ButtonClose = styled.button`
  position: relative;
  padding: 0;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  opacity: 0.8;

  :after {
    content: "";
    position: absolute;
    width: 24px;
    height: 1px;
    background-color: ${colors.c_999DAA};
    transform: rotate(45deg);
    transition: all 0.5s ease;
  }

  :before {
    content: "";
    position: absolute;
    width: 24px;
    height: 1px;
    background-color: ${colors.c_999DAA};
    transform: rotate(-45deg);
    transition: all 0.5s ease;
  }

  @media (hover: hover) and (pointer: fine) {
    :hover {
      cursor: pointer;
      opacity: 1;

      :after, :before {
        background-color: ${colors.c_26386E};
      }
    }
  }
`;
