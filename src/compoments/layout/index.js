// GLOBAL STYLES
import Global from '../../styles/global';

// SWIPER
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// MOLECULES
import Fonts from '../molecules/fonts';

export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <Global />
      <Fonts />
      <main>{children}</main>
    </>
  );
}
