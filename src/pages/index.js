// MOLECULES
import Pattern from "../compoments/molecules/pattern";

// ORGANISMS
import Banner from "../compoments/organisms/banner";
import History from "../compoments/organisms/history";
import WhyUs from "../compoments/organisms/whyUs";
import Philosophy from "../compoments/organisms/philosophy";
import Numbers from "../compoments/organisms/numbers";
import Team from "../compoments/organisms/team";
import Advisors from "../compoments/organisms/advisors";
import Portfolio from "../compoments/organisms/portfolio";
import Sentence from "../compoments/organisms/sentence";

// DATA
import dataBanner from "../compoments/organisms/banner/data";
import dataHistory from "../compoments/organisms/history/data";
import dataWhyUs from "../compoments/organisms/whyUs/data";
import dataPhilosophy from "../compoments/organisms/philosophy/data";
import dataNumbers from "../compoments/organisms/numbers/data";
import dataTeam from "../compoments/organisms/team/data";
import dataAdvisors from "../compoments/organisms/advisors/data";
import dataPortfolio from "../compoments/organisms/portfolio/data";
import dataSentence from "../compoments/organisms/sentence/data";

export default function Home() {
  return (
    <>
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
    </>
  );
}
