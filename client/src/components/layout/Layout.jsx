import React, { useEffect } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";

export const Layout = ({ children }) => {
  const url = window.location.href;
  useEffect(() => {
    console.log(url);
  }, url);

  if (children != "Contacts") {
    return (
      <>
        <Header /> {children} <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header /> {children}
      </>
    );
  }
};
