import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import RoodContext from "./companents/Context/RoodContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoodContext>
        <App />
      </RoodContext>
    </BrowserRouter>
  </React.StrictMode>
);
