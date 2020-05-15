import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faArrowCircleUp, faTimes, faBars, faHammer, faDownload, faHandSpock, faHandPaper, faChevronCircleUp, faChevronCircleDown, faAward, faFolder, faBook} from '@fortawesome/free-solid-svg-icons'
import banner from './assets/banner.svg';
import pakka1 from './assets/pakka1.png';
import pakka2 from './assets/pakka2.png';
import pakka3 from './assets/pakka3.png';
import pakka4 from './assets/pakka4.png';
import pakka5 from './assets/pakka5.png';
import pakka6 from './assets/pakka6.png';
import pakka7 from './assets/pakka7.png';
import sauma1 from './assets/klippa.png';
import sauma2 from './assets/títa og mæla borða.png';
import sauma3 from './assets/sauma.png';
import sauma4 from './assets/festa borða og strauja.png';
import sauma5 from './assets/merkja.png';
import sokkurinn from './assets/sokkurinn.png';
import bokin from './assets/bókin.png';
import skyrtan from './assets/skyrtan.png';
import './App.css';
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"

library.add(faEnvelope, faArrowCircleUp, faChevronCircleDown, faChevronCircleUp, faTimes, faBars, faHammer, faDownload, fab, faHandSpock, faHandPaper, faAward, faFolder, faBook);

function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={banner} className="App-banner" alt="Refigt banner" />
      </header>
      <About/>
      <img src={sokkurinn} className="wrapping-img"/>
      <img src={bokin} className="wrapping-img"/>
      <img src={skyrtan} className="wrapping-img"/>
      <br/>
      <div class="w3-bar w3-black">
        <button class="w3-bar-item w3-button" onClick={openCity('Use')}>How to use</button>
        <button class="w3-bar-item w3-button" onClick={openCity('Make')}>How to make</button>
      </div>
      <div id="Use" class="city">
        <h2>How to use</h2>
      </div>
      <div id="Make" class="city">
        <h2>How to make</h2>
      </div>
      <img src={pakka1} className="wrapping-img"/>
      <img src={pakka2} className="wrapping-img"/>
      <img src={pakka3} className="wrapping-img"/>
      <img src={pakka4} className="wrapping-img"/>
      <img src={pakka5} className="wrapping-img"/>
      <img src={pakka6} className="wrapping-img"/>
      <img src={pakka7} className="wrapping-img"/>
      <br/>
      <img src={sauma1} className="wrapping-img"/>
      <img src={sauma2} className="wrapping-img"/>
      <img src={sauma3} className="wrapping-img"/>
      <img src={sauma4} className="wrapping-img"/>
      <img src={sauma5} className="wrapping-img"/>
      <Footer/>
    </div>
  );
}

export default App;
