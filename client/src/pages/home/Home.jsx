import React from "react";
import "./Home.css";
import { Slider } from "../../components/slider/Slider";
import { Card } from "../../components/card/Card";
import { OurServices } from "../../components/our_services/OurServices";

export const HomePage = () => {
  return (
    <div className="home">
      <Slider />
      <div className="home-content content">
        {/* <div className="picture"></div> */}
        {/* <div className="content"> */}
        <Card />
        <OurServices />
      </div>
    </div>
  );
};
