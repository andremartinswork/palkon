import { ParallaxProvider } from "react-scroll-parallax";
import { NextSeo } from 'next-seo';

// GLOBAL STYLES
import Global from "../../styles/global";

// SWIPER
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// MOLECULES
import Fonts from "../molecules/fonts";

export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <Global />
      <Fonts />
      <NextSeo
        title="Palkon - Capital Management"
        description="Founded in 2013, Palkon Capital Management invests in innovative private and public life sciences companies. We build long-term partnerships with exceptional management teams developing groundbreaking technologies that address significant unmet medical needs."
        canonical="http://www.palkoncap.com"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'http://www.palkoncap.com',
          title: 'Palkon - Capital Management',
          description: 'Founded in 2013, Palkon Capital Management invests in innovative private and public life sciences companies. We build long-term partnerships with exceptional management teams developing groundbreaking technologies that address significant unmet medical needs.',
          images: [
            {
              url: '/social/cover.jpg',
              width: 800,
              height: 600,
              alt: 'Palkon - Capital Management',
              type: 'image/jpeg',
            }
          ],
          site_name: 'Palkon - Capital Management',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <main>
        <ParallaxProvider>{children}</ParallaxProvider>
      </main>
    </>
  );
}
