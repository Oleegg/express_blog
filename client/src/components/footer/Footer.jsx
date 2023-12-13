import React from "react";
import logoBike from "../../ui/icons/svg/logo.svg";
import { Link } from "react-router-dom";
import "./Footer.css";
import { SocialLinks } from "../social-links/SocialLinks";
import { ContactMiniMap } from "../contacts/Contact";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="content footer__container">
        <div className="footer__logo">
          <h2>
            <Link className="link nav-link" to="/">
              <img src={logoBike} alt="" />
            </Link>
          </h2>
          <p className="footer__text">Bicycle rental and repair</p>
        </div>
        <ContactMiniMap />
        <div className="footer__content">
          <SocialLinks />
          2023
        </div>
      </div>
    </footer>
  );
};
