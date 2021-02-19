import React, { Component } from "react";
import "./app.css";

import NavBar from "./NavBar/navBar";

import Player from "./Player/player"

import Button from "./Buttons/buttons"

//Class or Stateful Component
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {clickCount: 0};
    this.onClickMSG = this.onClickMSG.bind(this);

  }

  onClickMSG(){
    this.setState = this.state.clickCount++;
    console.log(this.state.clickCount, "I've been click captain!")
  }

  render() {
    return (
      <div className="">
        <NavBar />
        {/* <Player /> */}
        <Button className="red" children="test" onClick={this.onClickMSG}/>
      </div>
    );
  }
}
