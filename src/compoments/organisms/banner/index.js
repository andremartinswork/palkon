// STYLED COMPONENTS
import styled from "styled-components";

// REACT REVEAL
import Fade from "react-reveal/Fade";

// ATOMS
import Section from "../../atoms/section";
import Text from "../../atoms/text";
import Container from "../../atoms/container";
import IconArrows from "../../atoms/icons/iconArrows";

export default function Banner(props) {
  const { id, title, scrollLabel, video } = props;

  return (
    <Section id={id}>
      <Content>
        <div className="inner">
          <Container lg>
            <Fade>
              <Text tag="h1" editor text={title} className="play-72" />
            </Fade>
          </Container>
        </div>
      </Content>
      <Video>
        <video
          width="100%"
          height="100%"
          autoPlay
          playsInline
          muted
          loop
          playing="true"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Video>
      <PositionScroll>
        <Scroll>
          <Fade delay={600}>
            <Text className="roboto-10">{scrollLabel}</Text>
            <IconArrows />
          </Fade>
        </Scroll>
      </PositionScroll>
    </Section>
  );
}

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;

  .inner {
    width: 100%;
  }

  @media screen and (max-width: 578px) {
    height: 720px;
  }
`;
const Video = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  video {
    object-fit: cover;

    @media screen and (max-width: 1024px) {
     object-position: 70%;
    }
  }
`;
const PositionScroll = styled.div`
  position: absolute;
  bottom: 80px;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
`;
const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    margin-top: 16px;
    animation: a-scroll 1.8s infinite ease-in-out;

    @keyframes a-scroll {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(16px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`;
