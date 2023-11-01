import React from "react";

import "./Slide.css";

export const Slide = ({ url, title }) => {
  return (
    <div className="carousel-item">
      <img src={url} alt={title} className="slide-image" />
      <div className="slide-title">{title}</div>
    </div>
  );
};
