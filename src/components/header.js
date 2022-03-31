import React, { Fragment, useEffect, useState } from "react";
import "../styles/header.scss";

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
          className={`header main_menu_area animate__animated animate__bounce ${
            true === sticky
              ? " sticky stricky-fixed slideInDown animated"
              : " stricky slideIn animated"
          }`}
        >
          <div className="container-fluid">
            <div className="menu border-right hover-blue">
                 <a href="#">
                     <i class="icon-menu"></i></a>
            </div>
            <div className="logo">
              <a href="./#">
                 VaneCendales
               </a>
            </div>
            <div className="search border-left hover-red">
            <a href="#">
              <i class="icon-search"></i>
              </a>                      
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  
  export default Header;