import React from "react";
import { Link } from "react-router-dom";
import f from "../../ui/icons/svg/social/facebook.svg";
import i from "../../ui/icons/svg/social/instagram.svg";
import t from "../../ui/icons/svg/social/twitter.svg";
import w from "../../ui/icons/svg/social/whatsapp.svg";

import "./SocialLinks.css";

export const SocialLinks = () => {
  return (
    <div className="social">
      <div className="social__link">
        <Link to="/">
          <img src={f} alt="facebook" />
        </Link>
      </div>
      <div className="social__link">
        <Link to="/">
          <img src={i} alt="instagram" />
        </Link>
      </div>
      <div className="social__link">
        <Link to="/">
          <img src={t} alt="twitter" />
        </Link>
      </div>
      <div className="social__link">
        <Link to="/">
          <img src={w} alt="whatsapp" />
        </Link>
      </div>
    </div>
  );
};
