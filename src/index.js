import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WeatherSearch from "./WeatherSearch";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h2>Weather Search Engine</h2>
    <WeatherSearch />
    <br />
    <footer>Open Source Code by Shayne</footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
