import React from "react";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ReactDOM from "react-dom/client";
import "./CSS/general.css";
import "./CSS/header.css";
import "./CSS/about.css";
import "./CSS/vehicle.css";
import "./CSS/testimonials.css";
import "./CSS/phoneApp.css";
import "./CSS/footer.css";
import "./CSS/faq.css";
import App from "./App";

register();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
