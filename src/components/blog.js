import "../styles/blog.scss";
import React  from "react";
import hand from "../images/hand.png"


function Blog() {

    return (
     <div className="Blog ">
      
       <div className="Blog-image animate__animated animate__slideInLeft animate__delay-1s ">
       <img src={hand} alt="hand" />
       </div>
       <div className="blog-text"> 
       <h1>Lorem Ipsum Dollor</h1>
       <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet ut sit semper senectus morbi donec eget placerat quam. Etiam ante mattis eget velit odio nibh et, at leo. Leo morbi dictumst enim sit egestas hac eget faucibus lacus. Aenean lectus eleifend integer faucibus lorem urna neque. Accumsan sed a, id non et. Egestas mattis consectetur pretium est ac nibh id.
Tortor, placerat ut venenatis ullamcorper porta lectus nec. Convallis accumsan sed a id vitae fusce. Arcu enim sem sed ac. Id sit sagittis a vel fames.
       </p>
       </div>
     </div>
    );
  }
  
  export default Blog;