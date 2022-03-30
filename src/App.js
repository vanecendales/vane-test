
import React from 'react';
import "./styles/index.scss";
import "./styles/animate.css";
import "./styles/responsive.css";
import "./styles/index.scss";


import Header from './components/header';
import Slider from "./components/slider";
import Hero from './components/hero';
import Services from './components/services';
import News from './components/newsletter';

import { eventsData } from "./components/data";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Hero />     
      <Services data={eventsData} /> 
      <News />
    </div>
  );
}

export default App;
