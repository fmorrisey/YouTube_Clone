import React from "react";
import "../../icons/icons.css";
import menuSVG from "./menu.svg"

const Menu = () => {
  return(
    <div>
      <svg xlink:href={ menuSVG } alt="Menu Icon" className="feather"></svg>
    </div>
  )
};

export default Menu;
