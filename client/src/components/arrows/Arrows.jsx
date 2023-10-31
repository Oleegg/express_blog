import React from "react";
import "./Arrows.css";

export const Arrows = ({ changeSlide }) => {
  return (
    <div className="arrows">
      <div className="arrow left" onClick={() => changeSlide(-1)} />
      <div className="arrow right" onClick={() => changeSlide(1)} />
    </div>
  );
};
