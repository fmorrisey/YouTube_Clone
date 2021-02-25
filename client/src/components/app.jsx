import React from "react";
import "./app.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "./NavBar/navBar";

import Player from "./Player/player";

//Class or Stateful Component

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#181818",
    margin: 0,
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      {/* <Player /> */}
    </div>
  );
}
