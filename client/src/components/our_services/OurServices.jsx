import React from "react";
import i1 from "../../ui//icons/pictures/mini-service.jpg";
import i2 from "../../ui//icons/pictures/veu-bike.jpg";

import "./OurServices.css";

const SERVICES = [
  {
    image: i1,
    text: "We do simple bicycle repairs right away. If the technician is busy or the work is complex or time-consuming, the bicycle is accepted for repair and remains in the bicycle workshop. The duration of bicycle repair is 1-2 days. If the service is extremely busy, the deadline is negotiated with the customer.",
  },
  {
    image: i2,
    text: "We provide inspections and cost estimates for bicycle repairs for free. We carry out bicycle repairs all year round. We also provide free advice on the proper operation and maintenance of your bicycle.",
  },
];

export const OurServices = () => {
  return (
    <div className="services">
      {SERVICES.map(({ image, text }) => (
        <div className="services__content">
          <img className="services__img" src={image} alt="service" />
          <div className="services__text">{text}</div>
        </div>
      ))}
    </div>
  );
};
