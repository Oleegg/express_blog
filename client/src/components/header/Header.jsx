import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../navbar/navbar";
import logoBike from "../../ui/icons/svg/logo.svg";
import logoLogin from "../../ui/icons/svg/login.svg";

import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="content header__container">
        <div className="header__logo">
          <h2>
            <Link className="link nav-link" to="/">
              <img src={logoBike} alt="" />
            </Link>
          </h2>
          <p className="header__text">Bicycle rental and repair</p>
        </div>
        <div className="header__navbar">
          <Navbar />
          <Link className="link nav-link" to="/sign-in">
            <img alt="Logo" src={logoLogin} />
          </Link>
        </div>
      </div>
    </header>
  );
};
