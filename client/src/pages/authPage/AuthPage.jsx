import React from "react";
import { Link } from "react-router-dom";
import { SignUp } from "../../components/form/up/SignUp";
import "./AuthPage.css";

export const AuthPage = () => {
  return (
    <>
      <h1>AuthPage</h1>
      <SignUp />
      <div className="container-link">
        <p>Do you have an account?</p>
        <Link className="link auth-link" to="/sign-in">
          Sign In
        </Link>
      </div>
    </>
  );
};
