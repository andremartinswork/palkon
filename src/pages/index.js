
// ORGANISMS
import Banner from '../compoments/organisms/banner';
import History from '../compoments/organisms/banner';
import Philosophy from '../compoments/organisms/banner';
import Numbers from '../compoments/organisms/banner';
import Team from '../compoments/organisms/banner';
import Advisors from '../compoments/organisms/banner';
import Portfolio from '../compoments/organisms/banner';
import Sentence from '../compoments/organisms/banner';

// DATA
import dataBanner from '../compoments/organisms/banner/data';
import dataHistory from '../compoments/organisms/history/data';
import dataPhilosophy from '../compoments/organisms/philosophy/data';
import dataNumbers from '../compoments/organisms/numbers/data';
import dataTeam from '../compoments/organisms/team/data';
import dataAdvisors from '../compoments/organisms/advisors/data';
import dataPortfolio from '../compoments/organisms/portfolio/data';
import dataSentence from '../compoments/organisms/sentence/data';

export default function Home() {
  return (
    <>
      <Banner {...dataBanner} />
      <History {...dataHistory} />
      <Philosophy {...dataPhilosophy} />
      <Numbers {...dataNumbers} />
      <Team {...dataTeam} />
      <Advisors {...dataAdvisors} />
      <Portfolio {...dataPortfolio} />
      <Sentence {...dataSentence} />
    </>
  )
}
