import React from "react";

import { useRoutes } from "../../pages/routes";

import "./App.css";
import { Layout } from "../../components/layout/Layout";

function App() {
  const routes = useRoutes();
  return (
    <div className="wrapper">
      <Layout>
        <main>{routes}</main>
      </Layout>
    </div>
  );
}

export default App;
