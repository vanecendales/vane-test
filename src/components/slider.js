import React from "react";
import "../styles/slider.scss";
import { Slide } from 'react-slideshow-image';


import slide1 from "../images/slider/slider-1.jpg";
import slide2 from "../images/slider/slider-2.jpg";
import slide3 from "../images/slider/slider-3.jpg";
import knife from "../images/slider/knife.png";
import heart from "../images/slider/heart.png"

const Slideshow = () => {
    return (
      <div className="slider">
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${heart})`}}>
             <div className="slider_content ">
               <h2>florerwer</h2>
               <p><strong>Lorem ipsum dolor sit amet</strong> consectetur adipiscing elit. Habitasse tortor at eros a vestibulum euismod leo.</p>
               <button className="btn light hover-purple border-top">Call to Action</button>
             </div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${knife})`}}>
            <div className="slider_content ">
               <h2>florerwer</h2>
               <p><strong>Lorem ipsum dolor sit amet</strong> consectetur adipiscing elit. Habitasse tortor at eros a vestibulum euismod leo.</p>
               <button className="btn light hover-purple border-top">Call to Action</button>
             </div>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${heart})`}}>
            <div className="slider_content greenlight">
               <h2>florerwer</h2>
               <p><strong>Lorem ipsum dolor sit amet</strong> consectetur adipiscing elit. Habitasse tortor at eros a vestibulum euismod leo.</p>
               <button className="btn light hover-purple border-top">Call to Action</button>
             </div>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;