import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faGift, faCut, faEnvelope, faArrowCircleUp, faTimes, faBars, faHammer, faDownload, faHandSpock, faHandPaper, faChevronCircleUp, faChevronCircleDown, faAward, faFolder, faBook} from '@fortawesome/free-solid-svg-icons'
import sokkurinn from './assets/sokkurinn.svg';
import bokin from './assets/bókin.svg';
import skyrtan from './assets/skyrtan.svg';
import './App.css';
import Footer from "./components/Footer/Footer"
import About from "./components/About/About"
import Tabs from "./components/Tabs/Tabs"
import Gallery from "./components/Gallery/Gallery"
import Banner from "./components/Banner/Banner"

library.add(faEnvelope, faArrowCircleUp, faChevronCircleDown, faChevronCircleUp, faTimes, faBars, faHammer, faDownload, fab, faHandSpock, faHandPaper, faAward, faFolder, faBook, faGift, faCut);

function App() {

  return (
    <div className="App">
      <Banner/>
      <div className="page">
        <div className="section">
          <div className="title">Gift wrapping</div>
          <p style={{textAlign: "center"}}>The reusable design in three different sizes to match the most famous gifts, the sock, the book and the shirt</p>
          <div className="container">
            <img src={sokkurinn} alt="Gift wrapping in a size that fits socks." className="wrapping-img"/>
            <img src={bokin} alt="Gift wrapping in a size that fits books." className="wrapping-img"/>
            <img src={skyrtan} alt="Gift wrapping in a size that fits shirts." className="wrapping-img"/>
          </div>
        </div>
        <div style={{clear: "both", paddingTop: 10}}>
          <Tabs className="section"/>
        </div>
      </div>
      <div className="section">
        <Gallery/>
        <p style={{textAlign: "center"}}>Send me your results to hulda@huldalilja.com so I can feature it here!</p>
      </div>
      <div className="section">
        <About/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
