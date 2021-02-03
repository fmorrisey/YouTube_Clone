import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import "./app.css";

import TitleBar from "./TitleBar/navBar";

import Footer from "./Footer/footer";

//Class or Stateful Component
export default class App extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="container-fluid">
        <TitleBar />
       
        <Footer />
      </div>
    );
  }
}
