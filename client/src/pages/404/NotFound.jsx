import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <>
      <h1>The requested page was not found</h1>
      <NavLink className="link link-404" to="/">
        Go to home page
      </NavLink>
    </>
  );
};
