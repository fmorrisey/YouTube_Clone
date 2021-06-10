import React from "react";
import useAxios from "axios-hooks";
import { makeStyles } from "@material-ui/core/styles";
import ACO from "@material-ui/icons/AccountCircleOutlined";

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
  icon: {
    width: 24,
    height: 24,
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    display: "inline-flex",
    marginTop: "auto",
    marginBottom: "auto",
  },
}));

export default function Comments() {
  const classes = useStyles();

  const [{ data, loading, error }, refetch] = useAxios(
    "http://localhost:5000/comments/"
  );

  if (loading) return <p>Loading . . .</p>;
  if (error) return <p>Error . . .</p>;

  return (
    <>
      {data.map(function (comment) {
        return (
          <div key={null} className={classes.comment}>
            <span>
              <ACO className={classes.icon} />
            </span>
            <span> {comment.content}</span>
          </div>
        );
      })}
    </>
  );
}
