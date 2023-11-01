import React, { useState, useEffect, cloneElement } from "react";
import i1 from "../../ui/icons/pictures/rent-bike.jpg";
import i2 from "../../ui/icons/pictures/service.jpg";
import i3 from "../../ui/icons/pictures/service-2.jpg";
// import { Slide } from "../slide/Slide";
import { Arrows } from "../arrows/Arrows";
import "./Slider.css";

const images = [
  { url: i1, title: "Rental of bicycles and child seats" },
  { url: i2, title: "Bicycle and scooter repair" },
  { url: i3, title: "Bike tuning and maintenance" },
];

const SLIDERS = images.map((el, i) => (
  <div key={i}>
    <img src={el.url} alt={el.title} className="slide-image" />
    <div
      className={
        i === 0 || i === 2
          ? "slide-title title-right"
          : i === 1
          ? "slide-title title-top-left"
          : "slide-title"
      }
    >
      {el.title}
    </div>
  </div>
));

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
      setActive((active + 1) % images.length);
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
