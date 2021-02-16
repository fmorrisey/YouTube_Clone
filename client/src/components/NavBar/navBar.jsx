import React from "react";
import "./navBar.css";
import brand from "./yt_logo_rgb_dark.png";

export default function TitleBar(props) {
  return (
    <nav className="">
      <div>
        {/* Menu */}
        <img src={brand} alt={brand} />
      </div>
      
      
      <div className="" style={{ padding: 0 }}>
        <div className=""></div>
      </div>
    </nav>
  );
}
