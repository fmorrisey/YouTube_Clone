import React from "react";
import "./player.css";

export default function player(props) {
  console.log(props);
  return (
    <div>
      <iframe
        title="YouTube video player"
        src={props.currentVideo.videoURL.toString()}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <span>
        <h2>{props.currentVideo.title}!</h2>
      </span>
      <span>
        <p>
          {props.currentVideo.views} views • {props.currentVideo.date}
        </p>
        {/* Api props for view counts info */}
      </span>
      <hr />
    </div>
  );
}
