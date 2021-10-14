// NEXT
import dynamic from 'next/dynamic';

// MOLECULES
const Navbar = dynamic(() => import('../compoments/molecules/navbars/navbar'));
const Pattern = dynamic(() => import('../compoments/molecules/pattern'));

// ORGANISMS
const Banner = dynamic(() => import('../compoments/organisms/banner'));
const History = dynamic(() => import('../compoments/organisms/history'));
const WhyUs = dynamic(() => import('../compoments/organisms/whyUs'));
const Philosophy = dynamic(() => import('../compoments/organisms/philosophy'));
const Numbers = dynamic(() => import('../compoments/organisms/numbers'));
const Team = dynamic(() => import('../compoments/organisms/team'));
const Advisors = dynamic(() => import('../compoments/organisms/advisors'));
const Portfolio = dynamic(() => import('../compoments/organisms/portfolio'));
const Sentence = dynamic(() => import('../compoments/organisms/sentence'));
const Footer = dynamic(() => import('../compoments/organisms/footer'));

// DATA
import dataNavbar from "../compoments/molecules/navbars/navbar/data";
import dataBanner from "../compoments/organisms/banner/data";
import dataHistory from "../compoments/organisms/history/data";
import dataWhyUs from "../compoments/organisms/whyUs/data";
import dataPhilosophy from "../compoments/organisms/philosophy/data";
import dataNumbers from "../compoments/organisms/numbers/data";
import dataTeam from "../compoments/organisms/team/data";
import dataAdvisors from "../compoments/organisms/advisors/data";
import dataPortfolio from "../compoments/organisms/portfolio/data";
import dataSentence from "../compoments/organisms/sentence/data";
import dataFooter from "../compoments/organisms/footer/data";

export default function Home() {
  return (
    <>
      <Navbar {...dataNavbar} />
      <Banner {...dataBanner} />
      <History {...dataHistory} />
      <WhyUs {...dataWhyUs} />
      <Pattern>
        <Philosophy {...dataPhilosophy} />
        <Numbers {...dataNumbers} />
      </Pattern>
      <Team {...dataTeam} />
      <Advisors {...dataAdvisors} />
      <Portfolio {...dataPortfolio} />
      <Sentence {...dataSentence} />
      <Footer {...dataFooter} />
    </>
  );
}
