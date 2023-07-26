import './App.css';
import DownloadSection from './component/DownloadSection';
import FooterSection from './component/FooterSection';
import Header from './component/Header';
import Section1 from './component/Section1';
import Section2 from './component/Section2';
import Section3 from './component/Section3';
import Section4 from './component/Section4';
import Section5 from './component/Section5';
import Section6 from './component/Section6';

function App() {
  return (
    <div >
    <Header/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <DownloadSection/>
    <FooterSection/>
    </div>
  );
}

export default App;
