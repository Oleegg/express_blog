import React from "react";
import "./Home.css";
import { Slider } from "../../components/slider/Slider";

export const HomePage = () => {
  return (
    <div className="home">
      <Slider />
      <div className="home-content content">
        {/* <div className="picture"></div> */}
        {/* <div className="content"> */}
        <div className="home__text">
          <div className="star-container">
            <div className="star"></div>We provide bicycle maintenance and
            repair services in Minsk. We have rich experience and knowledge in
            this matter.
          </div>
          <div className="star-container">
            <div className="star"></div>We take a comprehensive approach to
            solving all bicycle repair issues and always take into account your
            wishes and capabilities.
          </div>
          <div className="star-container">
            <div className="star"></div> We try to carry out the work assigned
            to a bicycle workshop efficiently, as quickly as possible and for a
            reasonable price.
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
