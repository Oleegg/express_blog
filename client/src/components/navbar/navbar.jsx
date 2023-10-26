import React from "react";
import "./navbar.css";
import { NavLink,Link } from "react-router-dom";
import { Auth } from "../auth/Auth";

export const Navbar = () => {
  return (
    <div className="navbar">
      <h2>
        <Link className="nav-link" to="/">Title</Link>
      </h2>
      <div className="navbar__container">
        <nav className="nav">
          <ul>
            <li>
              <NavLink className="nav-link" to="/comments">Comments</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </nav>
        <Link className="nav-link" to="/auth"><Auth /></Link>
      </div>
    </div>
  );
};
