import React from "react";
import "./App.css";

import { Navbar } from "./components/navbar/navbar";
import { useRoutes } from "./pages/routes";

function App() {
  const routes = useRoutes();
  return (
    <div className="content">
      <header className="header">
        <div className="container">
          <Navbar />
        </div>
      </header>
      <main>{routes}</main>
      <footer></footer>
    </div>
  );
}

export default App;
