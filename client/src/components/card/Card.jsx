import React from "react";

export const Card = ({ el, index }) => {
  return (
    <div className="home__text" key={index}>
      <div className="star-container">
        <div className="star"></div>
        {el}
      </div>
    </div>
  );
};
