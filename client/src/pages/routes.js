import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthPage } from "./AuthPage";
import { HomePage } from "./Home";
import { Contacts } from "./Contacts";
import { Comments } from "./Comments";
import { About } from "./About";
import { NotFound } from "./NotFound";

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/comments" element={<Comments />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
