import React from "react";
import "./Home.css";
import { Slider } from "../../components/slider/Slider";
import { OurServices } from "../../components/our_services/OurServices";
import { OurAdvantages } from "../../components/our_advantages/OurAdvantages";

export const HomePage = () => {
  return (
    <div className="home">
      <Slider />
      <div className="home-content content">
        {/* <div className="picture"></div> */}
        {/* <div className="content"> */}
        <OurAdvantages />
        <OurServices />
      </div>
    </div>
  );
};
