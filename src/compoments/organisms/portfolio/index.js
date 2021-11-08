// REACT
import { useEffect, useState } from 'react';

// STYLED COMPONENTS
import styled from "styled-components";

// REACT REVEAL
import Fade from "react-reveal/Fade";

// NEXT
import Image from "next/image";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

// ATOMS
import Section from "../../atoms/section";
import Space from "../../atoms/space";
import Bar from "../../atoms/bar";
import Container from "../../atoms/container";
import Text from "../../atoms/text";
import Align from "../../atoms/align";

// MOLECULES
import ModalPortfolio from "../../molecules/modals/modalPortfolio";

// THEME
import { colors, spaces } from "../../../styles/theme";
import { rem } from "polished";



export default function Portfolio(props) {
  const { id, title, description, items } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    // INSTALL SWIPER MODULES
    SwiperCore.use([Pagination, Navigation]);
  },[]) 

  const toggleModal = (val) => {
    setIsOpen(!isOpen);
    !isOpen && setSelected(val)
  }

  return (
    <Section id={id} bgColor={colors.c_26386E}>
      <Bar center />
      <Space top="160" bottom="160">
        <Container lg>
          <Text
            tag="h2"
            className="play-48"
            editor
            text={title}
            color={colors.c_FFFFFF}
            align="center"
          />
          <Align center>
            <Space top="64" bottom="120">
              <Text
                tag="p"
                className="roboto-16"
                maxWidth="420px"
                align="center"
                color={colors.c_FFFFFF}
              >
                {description}
              </Text>
            </Space>
          </Align>
        </Container>
        <Overflow>
          <Container lg>
            <WrapperSwiper>
              <Swiper
                slidesPerView={"auto"}
                pagination={true}
                navigation={true}
                spaceBetween={24}
                freeMode={true}
                grabCursor={true}
                breakpoints={{
                  768: {
                    spaceBetween: 32,
                  },
                  1024: {
                    spaceBetween: 40,
                  },
                }}
              >
                {items.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Fade>
                      <div className="content">
                        <div className="image">
                          <Image
                            src={item.logo.href}
                            alt={item.logo.alt}
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"
                          />
                        </div>
                        <Space top="32" bottom="16">
                          <Text tag="h4" className="roboto-18" weight={400}>
                            {item.title}
                          </Text>
                        </Space>
                        <Text className="roboto-16" ellipsis={3}>{item.description}</Text>
                        <Space top="40">
                          <Button
                            type="button"
                            aria-label="View more"
                            className="roboto-14"
                            onClick={() => toggleModal(item)}
                          >
                            View more
                          </Button>
                        </Space>
                      </div>
                    </Fade>
                  </SwiperSlide>
                ))}
              </Swiper>
            </WrapperSwiper>
          </Container>
        </Overflow>
      </Space>
      <ModalPortfolio
        selected={selected}
        toggleModal={toggleModal}
        isOpen={isOpen}
      />
    </Section>
  );
}

const Overflow = styled.div`
  overflow-x: hidden;
`;
const WrapperSwiper = styled.div`
  padding-bottom: ${spaces["160"]};

  @media screen and (max-width: 578px) {
    padding-bottom: 0;
  }

  .swiper {
    overflow: visible;

    .swiper-wrapper {
      .swiper-slide {
        width: 400px;
        box-sizing: border-box;
        background-color: ${colors.c_FFFFFF};
        padding-left: ${spaces["32"]};
        padding-right: ${spaces["32"]};
        padding-top: ${spaces["40"]};
        padding-bottom: ${spaces["40"]};
        border-radius: 8px;
        box-sizing: border-box;

        .image {
          position: relative;
          width: 100%;
          height: 180px;
          text-align: center;
        }

        @media screen and (max-width: 1440px) {
          width: 338px;
        }

        @media screen and (max-width: 768px) {
          width: 300px;

          .image {
            height: 120px;
          }
        }
      }
    }

    .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal,
    .swiper-pagination-custom,
    .swiper-pagination-fraction {
      bottom: ${rem("-160px")};

      @media screen and (max-width: 578px) {
        display: none;
      }

      .swiper-pagination-bullet {
        width: 32px;
        height: 2px;
        border-radius: 0;
        margin: 0 8px;
        background-color: ${colors.c_00BFFF}!important;
      }
      .swiper-pagination-bullet-active {
        background-color: ${colors.c_00BFFF}!important;
      }
    }

    .swiper-button-prev {
      left: calc((100vw - 1352px) / -2);
      top: 43%;
      width: 64px;
      height: 120px;
      background-color: ${colors.c_00BFFF};
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      transition: all 0.5s ease;
      opacity: 0.9;

      :after {
        color: ${colors.c_FFFFFF};
        font-size: 32px;
      }

      @media (hover: hover) and (pointer: fine) {
        :hover {
          opacity: 1;
        }
      }

      @media screen and (max-width: 1490px) {
        left: calc((100vw - 1158px) / -2);
      }
      @media screen and (max-width: 1310px) {
        left: calc((100vw - 1024px) / -2);
      }
      @media screen and (max-width: 1100px) {
        left: -80px;
        width: 56px;
        height: 92px;

        :after {
          font-size: 20px;
        }
      }
      @media screen and (max-width: 992px) {
        left: -60px;
      }
      @media screen and (max-width: 768px) {
        left: -40px;
      }
      @media screen and (max-width: 578px) {
        display: none;
      }
    }
    .swiper-button-next {
      top: 43%;
      right: calc((100vw - 1352px) / -2);
      width: 64px;
      height: 120px;
      background-color: ${colors.c_00BFFF};
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      transition: all 0.5s ease;
      opacity: 0.9;

      :after {
        color: ${colors.c_FFFFFF};
        font-size: 32px;
      }

      @media (hover: hover) and (pointer: fine) {
        :hover {
          opacity: 1;
        }
      }

      @media screen and (max-width: 1490px) {
        right: calc((100vw - 1158px) / -2);
      }
      @media screen and (max-width: 1310px) {
        right: calc((100vw - 1024px) / -2);
      }
      @media screen and (max-width: 1100px) {
        right: -80px;
        width: 56px;
        height: 92px;

        :after {
          font-size: 20px;
        }
      }
      @media screen and (max-width: 992px) {
        right: -60px;
      }
      @media screen and (max-width: 768px) {
        right: -40px;
      }
      @media screen and (max-width: 578px) {
        display: none;
      }
    }

    .swiper-button-disabled {
      opacity: 0;
    }
  }
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
