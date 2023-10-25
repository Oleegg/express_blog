import React from "react";
import './navbar.css'

export const Navbar = () =>{
  return(

    <nav className="nav">
      <h2><a href="/">Title</a></h2>
      <ul>
        <li className="active">
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/comments">Comments</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contacts">Contacts</a>
        </li>
      </ul>
    </nav>
  )
}
