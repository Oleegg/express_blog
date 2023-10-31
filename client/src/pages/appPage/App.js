import React from "react";
import "./App.css";

import { Header } from "../../components/header/Header";
import { useRoutes } from "../../pages/routes";
import { Footer } from "../../components/footer/Footer";
import { Slider } from "../../components/slider/Slider";

function App() {
  const routes = useRoutes();
  return (
    <div className="wrapper">
      <Header />
      <Slider />
      <main>{routes}</main>
      <Footer />
    </div>
  );
}

export default App;
