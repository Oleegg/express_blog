import React from "react";

import "./Card.css";

const CARD_TEXT = [
  "We provide bicycle maintenance and repair services in Minsk. We have rich experience and knowledge in this matter.",
  "We take a comprehensive approach to solving all bicycle repair issues and always take into account your  wishes and capabilities.",
  "We try to carry out the work assigned to a bicycle workshop efficiently, as quickly as possible and for a reasonable price.",
];

export const Card = () => {
  return (
    <div className="card">
      {CARD_TEXT.map((el) => (
        <div className="home__text">
          <div className="star-container">
            <div className="star"></div>
            {el}
          </div>
        </div>
      ))}
    </div>
  );
};
