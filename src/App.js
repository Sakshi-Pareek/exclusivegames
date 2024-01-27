import './App.css';
import { useEffect, useState } from 'react';
import Atributo from './components/Atributo';
import Elegirnos from './components/Elegirnos';
import Ellos from './components/Ellos';
import FooterSec from './components/FooterSec';
import Frecuentes from './components/Frecuentes';
import HeaderSec from './components/HeaderSec';
import Jackpot from './components/Jackpot';
import LanzaTu from './components/LanzaTu';
import Luxury from './components/Luxury';
import Mass from './components/Mass';
import Nuestra from './components/Nuestra';
import Platinum from './components/Platinum';
import Preloader from './components/Preloader';
import Silver from "./components/Silver";
import BackToTop from "./assets/images/webp/backtop.png"
import Aos from 'aos';
import "aos/dist/aos.css";
// import { Accord } from './components/Accord';

function App() {
  // ---------------------aos-------------------
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  // -----------------preloader---------------
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 4000);
  }, []);
  // -----------------back-to-top------------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <>
      {screenLoading ? (
        <Preloader />
      ) : (
        <>
          <div className='overflow-hidden'>
            <HeaderSec />
            <Nuestra />
            <Atributo />
            <Jackpot />
            <Elegirnos />
            <Mass />
            <Silver />
            <Luxury />
            <Platinum />
            <Ellos />
            <Frecuentes />
            {/* <Accord/> */}
            <LanzaTu />
            <FooterSec />
            <div>
              <img src={BackToTop} alt="Arrow" className={`${backToTop ? "fixed right-[1%] bottom-[2%] z-30 !cursor-pointer md:w-[45px] w-[30px]" : "d-none"} bg-[#1a555e] rounded-[50%] updown_animation`} onClick={() => top()} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
