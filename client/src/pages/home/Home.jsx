import React from "react";
import "./Home.css";

export const HomePage = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>HomePage</h1>
        <div className="picture"></div>
        {/* <div className="content"> */}
        <p className="star-container">
          <div className="star"></div>We provide bicycle maintenance and repair
          services in Minsk. We have rich experience and knowledge in this
          matter.
          <div className="star"></div>We take a comprehensive approach to
          solving all bicycle repair issues and always take into account your
          wishes and capabilities.
          <div className="star"></div> We try to carry out the work assigned to
          a bicycle workshop efficiently, as quickly as possible and for a
          reasonable price.
        </p>

        {/* </div> */}
      </div>
    </div>
  );
};
