import React  from "react";
import "../styles/hero.scss";


function Hero() {

    return (
     <div className="hero dark">
       <h1>Hello, My name is Vane and <br/> I’m a Product Designer</h1>
       <div className="hero-button border-top border-light">
         <div className="empty-space"> <i class="icon-right"></i> <i class="icon-right"></i></div>
         <button className="btn dark black hover-green border-left border-right border-light">CALL TO ACTION</button>
         <div className="empty-space"><i class="icon-left"></i> <i class="icon-left"></i></div>
       </div>
     </div>
    );
  }
  
  export default Hero;