import React from "react";
import "./player.css";

export default function player() {
  return (
    <div>
      <iframe
        title="A TITLE!"
        src="https://www.youtube.com/embed/5qap5aO4i9A"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <span>
        <h1>TITLE!</h1>
      </span>
      <span>
        <p>Views!</p>
        {/* Api props for view counts info */}
      </span>
    </div>
  );
}
