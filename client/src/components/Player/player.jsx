import React from "react";
import "./player.css";

export default function player() {
  return (
    <div className="">
      <iframe
        src="https://www.youtube.com/embed/5qap5aO4i9A"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
