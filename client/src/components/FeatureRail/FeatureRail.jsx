import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import useAxios from "axios-hooks";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  featuredVideo: {
    backgroundColor: "#202020",
    borderRadius: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    color: "#ffffff",
  },
}));

export default function FeatureRail() {
  const classes = useStyles();

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

  return (
    <>
      {data.map(function (featured) {
        return <div className={classes.featuredVideo}>{featured.video}</div>;
      })}
    </>
  );
}
