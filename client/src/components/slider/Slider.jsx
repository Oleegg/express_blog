import React, { useState } from "react";
import { Arrows } from "../arrows/Arrows";
import { Slide } from "../slide/Slide";
import i1 from "../../ui/icons/pictures/rent-bike.jpg";
import i2 from "../../ui/icons/pictures/service.jpg";
import i3 from "../../ui/icons/pictures/service-2.jpg";

import "./Slider.css";

const images = [i1, i2, i3];

export const Slider = (width, height) => {
  const [slide, setSlide] = useState(0);
  console.log(slide);

  const changeSlide = (direction) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = images.length - 1;
    } else {
      slideNumber = (slide + direction) % images.length;
    }
    setSlide(slideNumber);
  };

  return (
    <div
      style={{ width, height }}
      className="slider"
      // onTouchStart={handleTouchStart}
      // onTouchMove={handleTouchMove}
    >
      {/* <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      > */}
      <Arrows changeSlide={changeSlide} />
      <div
        className="slide-list"
        style={{ transform: `translateX(-${slide * 100}%)` }}
      >
        {images.map((url, index) => (
          <Slide key={index} url={url} title={"text"} />
        ))}
      </div>
      {/* </SliderContext.Provider> */}
    </div>
  );
};
