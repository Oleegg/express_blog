import React from "react";
import { Card } from "../card/Card";
import "./Cards.css";

const CARD_TEXT = [
  "We provide bicycle maintenance and repair services in Minsk. We have rich experience and knowledge in this matter.",
  "We take a comprehensive approach to solving all bicycle repair issues and always take into account your  wishes and capabilities.",
  "We try to carry out the work assigned to a bicycle workshop efficiently, as quickly as possible and for a reasonable price.",
];

export const Cards = () => {
  return (
    <div className="cards">
      {CARD_TEXT.map((el, index) => (
        <Card el={el} key={index} />
      ))}
    </div>
  );
};
