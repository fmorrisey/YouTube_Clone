import React, { Component } from "react";
import "./app.css";

import NavBar from "./NavBar/navBar";

import Player from "./Player/player"

//Class or Stateful Component
export default class App extends Component {
  constructor(props) {
    super(props);
    // NOT USESLESS
  }

  render() {
    return (
      <div className="">
        <NavBar />
        <Player />
      </div>
    );
  }
}
