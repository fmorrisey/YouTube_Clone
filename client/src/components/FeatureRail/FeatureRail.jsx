import React from "react";

import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import useAxios from "axios-hooks";

import "./featured.css";

import FVI from "@material-ui/icons/FeaturedVideo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  h4: {
    lineHeight: "0.01rem",
  },
  ftVidContainer: {
    borderRadius: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    color: "#ffffff",
  },
  ftVidItem: {
    marginTop: theme.spacing(1),
  },
  icon: {
    width: 48,
    height: 48,
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
  },
  videoSlug: {
    backgroundColor: "#202020",
  },
}));

export default function FeatureRail(props) {
  const classes = useStyles();
  /*   Killed this for a temp config file
        const [{ data, loading, error }, refetch] = useAxios(
        "http://localhost:5000/featured/"
        );

    if (loading)
        return (
        <div className={classes.featuredVideo}>
            <p>Loading . . .</p>
        </div>
        );

    if (error)
        return (
        <div className={classes.featuredVideo}>
            <p>Error . . .</p>
        </div>
        );
    */
  console.log(props.featured);
  return (
    <div className={classes.ftVidContainer}>
      {props.videoList.map(function (featured) {
        return (
          <Grid container className={classes.ftVidItem}>
            <Grid item md={3}>
              <FVI className={classes.icon} />
            </Grid>
            <Grid item md={9}>
              <h4 className={classes.h4}>{featured.title}</h4>
              <p>
                {featured.author}
                <br />
                {featured.views} views • {featured.date}
              </p>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
}
