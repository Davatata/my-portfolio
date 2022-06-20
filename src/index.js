import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";
import App from "./App";
import AboutPage from "./pages/AboutPage";
import ToolsPage from "./pages/ToolsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route excat path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tools" element={<ToolsPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);