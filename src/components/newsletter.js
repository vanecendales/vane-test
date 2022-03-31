import React from "react";
import "../styles/news.scss";


function News() {

    return (
    <div className="newsletter">
        <h1 className="light border-bottom"><i class="icon-right"></i>Newsletter</h1>
      <div className="empty-space border-left border-bottom"></div>
      <div className="empty-space border-bottom descrip">keep in touch with all our news <i class="icon-right"></i> <i class="icon-right"></i></div>
      <button className="btn light hover-red border-left border-bottom">Call to Action</button>
  
    </div>
    );
  }
  
  export default News;