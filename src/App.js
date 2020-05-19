import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faArrowCircleUp, faTimes, faBars, faHammer, faDownload, faHandSpock, faHandPaper, faChevronCircleUp, faChevronCircleDown, faAward, faFolder, faBook} from '@fortawesome/free-solid-svg-icons'
import banner from './assets/banner.svg';
import sokkurinn from './assets/sokkurinn.png';
import bokin from './assets/bókin.png';
import skyrtan from './assets/skyrtan.png';
import './App.css';
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import Tabs from "./components/Tabs/Tabs"
import Gallery from "./components/Gallery/Gallery"

library.add(faEnvelope, faArrowCircleUp, faChevronCircleDown, faChevronCircleUp, faTimes, faBars, faHammer, faDownload, fab, faHandSpock, faHandPaper, faAward, faFolder, faBook);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={banner} className="App-banner" alt="Regift banner" />
      </header>
      
      <div className="page">
        <div className="section">
          <div className="title">Reusable gift wrapping</div>
          <p style={{textAlign: "center"}}>The design in three different sizes to match the most famous gifts, the sock, the book and the shirt</p>
          <div>
            <img src={sokkurinn} className="wrapping-img"/>
            <img src={bokin} className="wrapping-img"/>
            <img src={skyrtan} className="wrapping-img"/>
          </div>
        </div>
        <div style={{clear: "both", paddingTop: 10}}>
          <Tabs className="section"/>
        </div>
      </div>
      <div className="section">
        <Gallery/>
      </div>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
