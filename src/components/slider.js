import React from "react";
import "../styles/slider.scss";
import { Slide } from 'react-slideshow-image';
import bg4 from "../images/slider/bg.gif";
import bg5 from "../images/slider/bg5.gif";
import bg6 from "../images/slider/bg6.gif";
import heart from "../images/slider/heart.png";

const Slideshow = () => {
    return (
      <div className="slider">
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${bg4})`}}>
             <div className="slider_content ">
               <h2>Title slider 1</h2>
               <p><strong>Lorem ipsum dolor sit amet</strong> consectetur adipiscing elit. Habitasse tortor at eros a vestibulum euismod leo.</p>
               <button className="btn light hover-purple border-top">Call to Action</button>
             </div>
             <div></div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${bg5})`}}>
            <div className="slider_content hearth">
               <h2>Another title</h2>
               <p><strong>Lorem ipsum dolor sit amet</strong> consectetur adipiscing elit. Habitasse tortor at eros a vestibulum euismod leo.</p>
               <button className="btn light hover-purple border-top">Call to Action</button>
             </div>
             <div className="hearth-img animate__animated animate__pulse animate__infinite	infinite">
             <img src={heart} alt="hearth pulsing" />
             </div>
            </div>
          </div>
          <div className="each-slide">
            <div className="pumping" style={{'backgroundImage': `url(${bg6})`}}>
            <div className="slider_content greenlight">
               <h2>thanks for keep watching</h2>
               <p><strong>Lorem ipsum dolor sit amet</strong> consectetur adipiscing elit. Habitasse tortor at eros a vestibulum euismod leo.</p>
               <button className="btn light hover-purple border-top">Call to Action</button>
             </div>
             <div></div>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;