
import React from 'react';



function MenuFooter() {
const links = ["About Us", "Contact Us", "Terms And Conditions"];
const listLinks = links.map((link) =>
  <li><a href="#" className=''>{link}</a></li>
);
  return (
    <ul>{listLinks}</ul>
  );
}
export default MenuFooter;
