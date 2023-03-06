import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dallas" />
        <footer>
          <a href="https://github.com/kindamoody/react-weather-app">
            Open-sourced on GitHub
          </a>{" "}
          by Shayne and hosted on{" "}
          <a href="https://eclectic-gumdrop-604895.netlify.app">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
