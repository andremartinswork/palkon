import { useState, useEffect, useCallback } from "react";

// STYLED COMPONENTS
import styled, { css } from "styled-components";

// NEXT
import Image from "next/image";

// REACT SCROLL
import { Link } from "react-scroll";

// ATOMS
import Text from "../../atoms/text";

// MOLECULES
import Menu from "../menu";

// THEME
import { colors, spaces } from "../../../styles/theme";

export default function Navbar(props) {
  const { items } = props;

  const [prevScroll, setPrevScroll] = useState(0);
  const [prevDirection, setPrevdDirection] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setPrevScroll(window.scrollY || document.documentElement.scrollTop);
  }, []);

  const toogleHeader = (direction, curScroll) => {
    if (direction === 2 && curScroll > 52) {
      setHide(true);
      setPrevdDirection(direction);
    } else if (direction === 1) {
      setHide(false);
      setPrevdDirection(direction);
    }
  };

  const checkScroll = useCallback(() => {
    const curScroll = window.scrollY || document.documentElement.scrollTop;

    let direction = 0;

    if (curScroll > prevScroll) {
      direction = 2;
    } else if (curScroll < prevScroll) {
      direction = 1;
    }

    if (direction !== prevDirection) {
      toogleHeader(direction, curScroll);
    }

    setPrevScroll(curScroll);
  }, [prevScroll, prevDirection]);

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [checkScroll]);

  return (
    <Header hide={hide} scrolled={prevScroll > 400}>
      <Content>
        <Left scrolled={prevScroll > 400}>
          <div className="white">
            <div className="inner">
              <Image
                src="/logos/logo-white.svg"
                alt="Logo Palkon White"
                layout="fixed"
                objectFit="contain"
                width={180}
                height={50}
              />
            </div>
          </div>
          <div className="color">
            <div className="inner">
              <Image
                src="/logos/logo-color.svg"
                alt="Logo Palkon Color"
                layout="fixed"
                objectFit="contain"
                width={180}
                height={50}
              />
            </div>
          </div>
        </Left>
        <Right>
          <Nav scrolled={prevScroll > 400}>
            {items &&
              items.length > 0 &&
              items.map((item, index) => (
                <Link
                  key={String(index)}
                  activeClass="active"
                  to={item.section}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <Text
                    className="roboto-16"
                    weight={500}
                    color={colors.c_FFFFFF}
                  >
                    {item.label}
                  </Text>
                </Link>
              ))}
          </Nav>
          <Menu items={items} scrolled={prevScroll > 400} />
        </Right>
      </Content>
    </Header>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: ${spaces["40"]};
  padding-right: ${spaces["40"]};
  z-index: 100;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease;

  ${({ hide }) => hide && css`
    opacity: 0;
    transform: translateY(-100%);
  `}

  ${({ scrolled }) => scrolled && css`
    background-color: ${colors.c_FFFFFF};
    border-bottom: 1px solid rgba(0,0,0,0.05);
  `}

  @media screen and (max-width: 992px) {
    height: 90px;
  }
  @media screen and (max-width: 578px) {
    padding-left: 24px;
    padding-right: 24px;
  }
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  position: relative;
  width: 180px;
  height: 50px;

  .color {
    position: absolute;
    opacity: 0;
    transition: all 0.5s ease;
  }
  .white {
    position: absolute;
    transition: all 0.5s ease;
  }
  .iner {
    position: relative;
    width: 100%;
    height: 100%;
  }

  ${({ scrolled }) =>
    scrolled &&
    css`
      .color {
        opacity: 1;
      }
      .white {
        opacity: 0;
      }
    `}
`;
const Right = styled.div``;
const Nav = styled.nav`
  display: flex;
  align-items: center;

  a {
    margin-right: ${spaces["40"]};
    transition: all 0.5s ease;

    :last-child {
      margin-right: 0;
    }

    ${({ scrolled }) => scrolled && css`
      .roboto-16 {
        color: ${colors.c_364051}!important;
      }
    `}

    &.active {
      color: ${colors.c_00BFFF};

      .roboto-16 {
        color: ${colors.c_00BFFF}!important;
      }
    }

    @media (hover: hover) and (pointer: fine) {
      :hover {
        cursor: pointer;
        .roboto-16 {
          color: ${colors.c_00BFFF}!important;
        }
      }
    }
  }

  @media screen and (max-width: 1279px) {
    display: none;
  }
`;
