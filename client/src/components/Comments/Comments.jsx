import React from "react";
import useAxios from "axios-hooks";

export default function CoSmments() {
  const [{ data, loading, error }, refetch] = useAxios(
    "http://localhost:5000/comments/"
  );

  if (loading) return <p>Loading . . .</p>;
  if (error) return <p>Error . . .</p>;

  return (
    <div>
      {data.map(function (comment) {
        return comment.content;
      })}
    </div>
  );
}
