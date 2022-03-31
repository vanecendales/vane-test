import "../styles/footer.scss";
import React  from "react";
import MenuFooter from "../modules/menu_footer";


function Footer() {

    return (
        <div className="footer" >
          <div className="footer-menu " id="menu">  <MenuFooter/></div> 
          <div className="footer-social">
                <a href="#" className="social-btn facebook border-left"><i class="icon-facebook"></i> </a>    
                <a href="#" className="social-btn twitter border-left"><i class="icon-twitter"></i></a>           
                <a href="#" className="social-btn instagram border-left"><i class="icon-instagram"></i></a>   
            </div>
        </div>
    );
  }
  
  export default Footer;