import React, { Fragment, useEffect, useState } from "react";
import "../styles/header.scss";
import logo from "../images/logo.png";

function Header() {
    const [sticky, setSticky] = useState(false);
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setSticky(true);
      } else if (window.scrollY < 70) {
        setSticky(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [sticky]);
  
    return (
      <Fragment>
        <div
          className={`header main_menu_area ${
            true === sticky
              ? " stricky stricky-fixed slideInDown animated"
              : " stricky slideIn animated"
          }`}
        >
          <div className="container-fluid">
            <div className="menu border-right">
                 <a id="open-overlay-nav"  href="#">
                     <i class="icon-menu"></i></a>
            </div>
            <div className="logo">
              <a href="./#">
                 VaneCendales
               </a>
            </div>
            <div className="search border-left">
            <a class="search searchToggler" href="#">
              <i class="icon-search"></i>
              </a>                      
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  
  export default Header;