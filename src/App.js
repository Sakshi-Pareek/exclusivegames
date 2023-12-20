import './App.css';
import Atributo from './components/Atributo';
import Elegirnos from './components/Elegirnos';
import Ellos from './components/Ellos';
import FooterSec from './components/FooterSec';
import HeaderSec from './components/HeaderSec';
import Jackpot from './components/Jackpot';
import LanzaTu from './components/LanzaTu';
import Luxury from './components/Luxury';
import Mass from './components/Mass';
import Nuestra from './components/Nuestra';
import Platinum from './components/Platinum';
import Silver from './components/Silver';

function App() {
  return (
    <>
    <HeaderSec />
      <Nuestra/>
      <Atributo/>
      <Jackpot/>
      <Elegirnos/>
      <Mass/>
      <Silver/>
      <Luxury/>
      <Platinum/>
      <Ellos/>
      <LanzaTu/>
      <FooterSec/>
      </>
  );
}

export default App;
