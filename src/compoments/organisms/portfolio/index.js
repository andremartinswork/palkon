// STYLED COMPONENTS
import styled from "styled-components";

// REACT REVEAL
import Fade from "react-reveal/Fade";

// NEXT
import Image from "next/image";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

// ATOMS
import Section from "../../atoms/section";
import Space from "../../atoms/space";
import Bar from "../../atoms/bar";
import Container from "../../atoms/container";
import Text from "../../atoms/text";
import Align from "../../atoms/align";

// THEME
import { colors, spaces } from "../../../styles/theme";
import { rem } from "polished";

// INSTALL SWIPER MODULES
SwiperCore.use([Pagination]);

export default function Portfolio(props) {
  const { id, title, description, items } = props;
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
                spaceBetween={24}
                freeMode={true}
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
                        <Text className="roboto-16">{item.description}</Text>
                        <Space top="40">
                          <Button
                            type="button"
                            aria-label="View more"
                            className="roboto-12"
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
        width: 338px;
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
  }
`;
const Button = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  color: ${colors.c_00BFFF};

  @media (hover: hover) and (pointer: fine) {
    :hover {
      cursor: pointer;
      color: ${colors.c_26386E}!important;
    }
  }
`;
