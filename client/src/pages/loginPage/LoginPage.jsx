import React from "react";
import { Link } from "react-router-dom";
import { SignIn } from "../../components/form/in/SignIn";
import "./LoginPage.css";

export const LoginPage = () => {
  return (
    <>
      .<h1>LoginPage</h1>
      <SignIn />
      <div className="container-link">
        <p>don't have an account?</p>
        <Link className="link login-link" to="/sign-up">
          Sign Up
        </Link>
      </div>
    </>
  );
};
