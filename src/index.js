import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weather from "./Weather.js";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Weather />
    <br />
    <footer>
      <a href="https://github.com/kindamoody/react-weather-app">
        Open Source Code
      </a>{" "}
      by Shayne
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
