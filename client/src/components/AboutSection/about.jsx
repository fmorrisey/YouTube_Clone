import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  about: {
    backgroundColor: "#202020",
    borderRadius: theme.spacing(0.5),
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    color: "#FFFFFF",
  },
}));

export default function About(props) {
  const classes = useStyles();
  return (
    <div className={classes.about}>
      <h1>{props.currentVideo.channel}</h1>
      {/* <img
        src={props.currentVideo.channelImage}
        alt={props.currentVideo.channel}
      /> */}
      <p>{props.currentVideo.description}</p>
    </div>
  );
}
