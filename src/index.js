import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/general.css";
import "./CSS/header.css";
import "./CSS/about.css";
import "./CSS/vehicle.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
