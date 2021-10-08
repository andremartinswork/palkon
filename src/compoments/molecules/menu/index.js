import { useState } from 'react';

// REACT SCROLL
import { Link } from 'react-scroll';

// STYLED COMPONENTS
import styled from 'styled-components';

// FRAMER MOTION
import { motion } from 'framer-motion';

// ATOMS
import Modal from '../../atoms/modal';
import Text from '../../atoms/text';

// THEME
import { colors, spaces } from '../../../styles/theme';

// VARIANTS
import { variantClose, variantContent, variantOverlay } from './variants';

export default function Menu(props) {
  const { items } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState(false);

  const onAfterOpen = () => {
    setAnimation(true);
  };

  const onRequestClose = () => {
    setAnimation(false);

    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} />
      <Modal isOpen={isOpen} onAfterOpen={onAfterOpen} onRequestClose={onRequestClose}>
        <Overlay variants={variantOverlay} initial={false} animate={animation ? 'open' : 'close'} onClick={onRequestClose} />
        <Content variants={variantContent} initial={false} animate={animation ? 'open' : 'close'}>
          <PositionButtonClose>
            <ButtonClose onClick={onRequestClose} variants={variantClose} />
          </PositionButtonClose>
          <Items>
            {items &&
              items.length > 0 &&
              items.map((item, index) => (
                <Link key={String(index)} activeClass='active' to={item.section} spy={true} smooth={true} offset={50} duration={500}>
                  <Item
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          delay: 0.2 * (index + 1),
                          duration: 1,
                          type: 'spring',
                          bounce: 0
                        }
                      },
                      close: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          duration: 1,
                          type: 'spring',
                          bounce: 0
                        }
                      }
                    }}
                    initial={false}
                    animate={animation ? 'open' : 'close'}
                  >
                    <Text className='kbr-32' tag='span' weight={400} color={colors.c_1C1C1C}>
                      {item.label}
                    </Text>
                  </Item>
                </Link>
              ))}
          </Items>
        </Content>
      </Modal>
    </>
  );
}

const Button = styled.button`
  position: relative;
  display: none;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 100%;
  padding: 0;
  background-color: ${colors.c_FFFFFF};
  border: 1px solid rgba(0, 0, 0, 0.05);

  :after {
    content: '';
    position: absolute;
    left: 11px;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: ${colors.c_0060FF};
  }

  :before {
    content: '';
    position: absolute;
    right: 11px;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: ${colors.c_0060FF};
  }

  @media screen and (max-width: 1279px) {
    display: flex;
  }
`;
const PositionButtonClose = styled.div`
  position: absolute;
  top: 30px;
  right: 32px;
`;
const ButtonClose = styled(motion.button)`
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
    content: '';
    position: absolute;
    width: 24px;
    height: 1px;
    background-color: ${colors.c_1C1C1C};
    transform: rotate(45deg);
    transition: all 0.5s ease;
  }

  :before {
    content: '';
    position: absolute;
    width: 24px;
    height: 1px;
    background-color: ${colors.c_1C1C1C};
    transform: rotate(-45deg);
    transition: all 0.5s ease;
  }
`;
const Overlay = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
const Content = styled(motion.div)`
  position: relative;
  z-index: 10;
  width: 50vw;
  height: 100vh;
  background-color: white;
  display: flex;
  align-items: center;
  margin-left: auto;
  z-index: 100000;
  box-sizing: border-box;
  padding-left: ${spaces['40']};
  padding-right: ${spaces['40']};

  @media screen and (max-width: 578px) {
    width: 80vw;
  }
  @media screen and (max-width: 340px) {
    width: 100vw;
  }
`;
const Items = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;
const Item = styled(motion.div)`
  text-decoration: none;
  margin-bottom: ${spaces['40']};

  /* :last-child {
    margin-bottom: 0;
  } */
`;
