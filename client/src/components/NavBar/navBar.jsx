import React from "react";
import "./navBar.css";
import brand from "./yt_logo_rgb_dark.png";
import Menu from "../../assets/icons/menu/menu.jsx";

export default function TitleBar(props) {
  return (
    <nav className="navbar navbar-style navbar-expand-lg">
      <Menu />
      <img src={ brand } alt={ brand } />
      <div className="col-md-12" style={{ padding: 0 }}>
        <div className="navbar-nav"></div>
      </div>
    </nav>
  );
}
