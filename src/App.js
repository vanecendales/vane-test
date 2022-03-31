
import React from 'react';
import './styles/animate.min.css';
import "./styles/index.scss";
import "./styles/responsive.scss";


import Header from './components/header';
import Slider from "./components/slider";
import Hero from './components/hero';
import Services from './components/services';
import News from './components/newsletter';
import ProductInfo from './components/product-info';
import Blog from './components/blog';
import Footer from './components/footer';
import { eventsData } from "./components/data";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Hero />     
      <Services data={eventsData} /> 
      <News />
      <ProductInfo />
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
