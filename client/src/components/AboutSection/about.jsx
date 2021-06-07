import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import "./about.css";
import ACO from "@material-ui/icons/AccountCircleOutlined";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  about: {
    borderRadius: theme.spacing(0.5),
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    color: "#FFFFFF",
  },
  icon: {
    width: 48,
    height: 48,
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
}));

export default function About(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.about} spacing={0}>
        <Grid item md={1} xs={1}>
          <ACO className={classes.icon} />
        </Grid>
        <Grid item md={9} xs={9}>
          <h1>{props.currentVideo.channel}</h1>
          <p>{props.currentVideo.description}</p>
        </Grid>
      </Grid>
    </div>
  );
}
