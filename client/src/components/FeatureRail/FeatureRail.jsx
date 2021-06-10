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
    lineHeight: "1px",
    marginBottom: theme.spacing(0),
  },
  ftVidContainer: {
    borderRadius: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    color: "#ffffff",
  },
  ftVidItem: {
    marginTop: theme.spacing(1),
    borderBottom: "1px solid #303030",
  },
  icon: {
    width: 48,
    height: 48,
    margin: theme.spacing(2),
    padding: theme.spacing(1),
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
  },
  videoSlug: {
    backgroundColor: "#202020",
  },
  text: {
    marginBottom: theme.spacing(2),
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

  return (
    <div className={classes.ftVidContainer}>
      {props.videoList.map((featured) => {
        return (
          <span>
            {featured.tags.map((tag, index) => (
              <>{tag}</>
            ))}
          </span>
        );
      })}
      {props.videoList.map((featured, index) => {
        return (
          <Grid container key={`feat-${index}`} className={classes.ftVidItem}>
            <a href={featured.url}>
              <Grid item md={3}>
                <FVI className={classes.icon} />
              </Grid>
            </a>
            <Grid item md={6}>
              <a href={featured.url}>
                <h4 className={classes.h4}>{featured.title}</h4>
                <p className={classes.text}>
                  {featured.author}
                  <br />
                  {featured.views} views • {featured.date}
                </p>
              </a>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
}
