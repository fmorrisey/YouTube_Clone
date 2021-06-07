import React from "react";
import "./player.css";

export default function player(props) {
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
        <h3>{props.currentVideo.title}!</h3>
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
