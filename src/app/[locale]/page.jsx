import { useTranslations } from "next-intl";
import InreactiveService from '../../components/interactive-service/page'
import Datas from '../../components/Datas/page'
import AboutUs from '../../components/about-us/page'
import Statistics from '../../components/statistics/page'
import UsefulLinks from '../../components/usefull-links/page'
import PublicTrans from '../../components/public-trans/page'
import News from '../../components/news/page';



export default function Home() {


  return (
    <div>
      <div className="container">
        <AboutUs />
        <News/>
        <InreactiveService/>
        <PublicTrans/>
        <Datas/>
        <Statistics/>
        <UsefulLinks/>
      </div>
    </div>
  );
}
