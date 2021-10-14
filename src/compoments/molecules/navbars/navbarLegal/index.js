import { useState, useEffect, useCallback } from "react";

// STYLED COMPONENTS
import styled, { css } from "styled-components";

// NEXT
import Image from "next/image";
import Link from "next/link";

// THEME
import { colors, spaces } from "../../../../styles/theme";

export default function NavbarLegal() {
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
          <Link href="/">
            <a>
              <div className="color">
                <div className="inner">
                  <Image
                    src="/logos/logo-color.svg"
                    alt="Logo Palkon Color"
                    layout="fill"
                    objectFit="contain"
                    loading="eager"
                  />
                </div>
              </div>
            </a>
          </Link>
        </Left>
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
  z-index: 10000;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  transition: all 0.5s ease;

  ${({ scrolled }) =>
    scrolled &&
    css`
      background-color: ${colors.c_FFFFFF};
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
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

  @media screen and (max-width: 1280px) {
    width: 150px;
    height: 40px;
  }

  .color {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 1;
    transition: all 0.5s ease;

    .inner {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
`;