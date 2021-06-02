import React from "react";

import Paper from "@material-ui/core/paper";
import { makeStyles } from "@material-ui/core/styles";
import useAxios from "axios-hooks";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  featuredVideo: {
    backgroundColor: "#20202020",
    borderRadius: theme.spacing(0.5),
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    color: "#ffffff",
  },
}));

export default function FeatureRail() {
  const classes = useStyles();

  const [{ data, loading, error }, refetch] = useAxios(
    "http://localhost:5000/featured/"
  );

  if (loading) return <p>Loading . . .</p>;
  if (error) return <p>Error . . .</p>;

  return (
    <>
      {data.map(function (featured) {
        return <div className={classes.featuredVideo}>{featured.video}</div>;
      })}
    </>
  );
}
