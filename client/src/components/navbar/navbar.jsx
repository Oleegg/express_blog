import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <nav className="nav">
          <ul>
            <li>
              <NavLink className="link nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="link nav-link" to="/comments">
                Comments
              </NavLink>
            </li>
            <li>
              <NavLink className="link nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="link nav-link" to="/contacts">
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
