import React from "react";
import "./app.css";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import NavBar from "./NavBar/navBar";
import Player from "./Player/player";
import FeatureRail from "./FeatureRail/FeatureRail";
import Comments from "./Comments/Comments";

//Class or Stateful Component

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  sideRail: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  player: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  comments: {
    marginLeft: theme.spacing(10),
  },
  featuredRail: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <Grid container spacing={0}>
        <Grid item md={9} xs={12}>
          <div className={classes.player}>
            <Player />
          </div>
        </Grid>
        <Grid item md={3} xs={12}>
          <FeatureRail className={classes.featuredRail} />
        </Grid>
        <Grid item md={8} xs={12}>
          <Paper className={classes.paper}>About Section</Paper>
        </Grid>
        <Grid item md={8} xs={12}>
          <Comments className={classes.comments} />
        </Grid>
      </Grid>
    </div>
  );
}
