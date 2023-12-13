import React from "react";
import { SERVICES } from "./constants";
import "./OurServices.css";

export const OurServices = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      {SERVICES.map(({ image, text }, i) => (
        <div
          key={i}
          className={
            i % 2 === 0 ? "services__content" : "services__content revers"
          }
        >
          <img className="services__img" src={image} alt="service" />
          <div className="services__text">{text}</div>
        </div>
      ))}
    </div>
  );
};
