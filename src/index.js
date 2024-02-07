import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PropertyProvider } from "./PropertyContext/PropertyContext.js";

ReactDOM.render(
  <React.StrictMode>
    <PropertyProvider>
      <App />
    </PropertyProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
