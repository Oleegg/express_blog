import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthPage } from "./authPage/AuthPage";
import { HomePage } from "./home/Home";
import { Contacts } from "./contacts/Contacts";
import { Comments } from "./Comments";
import { About } from "./About";
import { NotFound } from "./404/NotFound";
import { LoginPage } from "./loginPage/LoginPage";
import { Services } from "./services/Services";

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/sign-in" element={<LoginPage />} />
      <Route path="/sign-up" element={<AuthPage />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/comments" element={<Comments />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
