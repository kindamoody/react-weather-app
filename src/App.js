import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dallas" />

        <footer>
          <a
            href="https://github.com/kindamoody/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-sourced on GitHub
          </a>{" "}
          by Shayne and hosted on Netlify
        </footer>
      </div>
    </div>
  );
}
