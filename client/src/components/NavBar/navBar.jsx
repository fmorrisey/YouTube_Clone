import React from "react";
import "./navBar.css";
import brand from "./yt_logo_rgb_dark.png";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
//import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    textColor: "#FFFFFF",
    background: "#202020",
    maxHeight: '56px',
  },
  menuButton: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  brand: {
    marginBottom: theme.spacing(1),
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" height="10px" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img src={brand} alt={brand} className={classes.brand} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
