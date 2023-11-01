import React, { useState, useEffect, cloneElement } from "react";
import { SLIDERS } from "./constants";
import { Arrows } from "../arrows/Arrows";
import "./Slider.css";

export const Slider = () => {
  const [active, setActive] = useState(0);
  let scrollInterval = null;

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (active + direction < 0) {
      slideNumber = SLIDERS.length - 1;
    } else {
      slideNumber = (active + direction) % SLIDERS.length;
    }

    setActive(slideNumber);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    scrollInterval = setTimeout(() => {
      setActive((active + 1) % SLIDERS.length);
    }, 5000);

    return () => clearTimeout(scrollInterval);
  });

  return (
    <div className="carousel">
      {SLIDERS.map((item, index) => {
        const activeClass = active === index ? " visible" : "";
        console.log(item);
        return cloneElement(item, {
          className: `carousel-item ${activeClass}`,
        });
      })}
      <Arrows className="arrows" changeSlide={changeSlide} />
    </div>
  );
};
