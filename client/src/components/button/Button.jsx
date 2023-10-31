import React from "react";
import "./Button.css";

export const Button = ({ name, type = "button" }) => {
  return <button type={type}>{name}</button>;
};
