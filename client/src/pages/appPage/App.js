import React from "react";
import "./App.css";

import { Header } from "../../components/header/Header";
import { useRoutes } from "../../pages/routes";
import { Footer } from "../../components/footer/Footer";

function App() {
  const routes = useRoutes();
  return (
    <div className="wrapper">
      <Header />
      <main>{routes}</main>
      <Footer />
    </div>
  );
}

export default App;
