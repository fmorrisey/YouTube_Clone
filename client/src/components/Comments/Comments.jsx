import React from "react";
import useAxios from "axios-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  comment: {
    backgroundColor: "#202020",
    borderRadius: theme.spacing(0.5),
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    color: "#FFFFFF",
  },
}));

export default function CoSmments() {
  const classes = useStyles();

  const [{ data, loading, error }, refetch] = useAxios(
    "http://localhost:5000/comments/"
  );

  if (loading) return <p>Loading . . .</p>;
  if (error) return <p>Error . . .</p>;

  return (
    <>
      {data.map(function (comment) {
        return <div className={classes.comment}>{comment.content}</div>;
      })}
    </>
  );
}
