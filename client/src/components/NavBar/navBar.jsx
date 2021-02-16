import React from "react";
import "./navBar.css";
import brand from "./yt_logo_rgb_dark.png";
import { Menu } from "react-feather";

export default function TitleBar(props) {
  return (
    <nav className="navbar navbar-style">
      <div>
        <Menu color="#ffff" width={35} />
        <img src={brand} alt={brand} />
      </div>

      <div className="col-md-12" style={{ padding: 0 }}>
        <div className="navbar-nav"></div>
      </div>
    </nav>
  );
}
