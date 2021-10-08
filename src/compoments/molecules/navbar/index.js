import { useState, useEffect, useCallback } from "react";

// STYLED COMPONENTS
import styled, { css } from "styled-components";

// REACT SCROLL
import { Link } from "react-scroll";

// ATOMS
import Container from "../../atoms/container";
import Text from "../../atoms/text";
import LogoWhite from "../../atoms/logos/logoWhite";

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
    <Header hide={hide}>
      
        <Content>
          <Left>
            <LogoWhite className="logo" />
          </Left>
          <Right>
            <Nav>
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
            <Menu items={items} />
          </Right>
        </Content>

    </Header>
  );
}

const Header = styled.header`
  position: fixed;
  top: 0;
  left: ${spaces['40']};
  right: ${spaces['40']};
  z-index: 100;
  height: 80px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  transition: all 0.5s ease;

  ${({ hide }) =>
    hide &&
    css`
      opacity: 0;
      transform: translateY(-50%);
    `}

  @media screen and (max-width: 992px) {
    height: 80px;
  }
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  .lettring {
    display: none;
  }

  @media screen and (max-width: 992px) {
    .logo {
      display: none;
    }
    .lettring {
      display: block;
    }
  }
`;
const Right = styled.div``;
const Nav = styled.nav`
  display: flex;

  a {
    margin-right: ${spaces["40"]};
    transition: all 0.5s ease;

    :last-child {
      margin-right: 0;
    }

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
