import React from "react";

import Paper from "@material-ui/core/paper";
import { makeStyles } from "@material-ui/core/styles";

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
}));

export default function FeatureRail() {
  const classes = useStyles();
  return <Paper className={classes.sideRail}>SIDE RAIL</Paper>;
}
