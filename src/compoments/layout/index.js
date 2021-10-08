// GLOBAL STYLES
import Global from '../../styles/global';

// SWIPER
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// MOLECULES
import Fonts from '../molecules/fonts';
import Navbar from '../molecules/navbar'

// DATA
import dataNavbar from '../molecules/navbar/data';

export default function Layout(props) {
  const { children } = props;

  return (
    <>
      <Global />
      <Fonts />
      <Navbar {...dataNavbar} />
      <main>{children}</main>
    </>
  );
}
