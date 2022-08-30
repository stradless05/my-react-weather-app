import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-wrapper text-center">
        <input
          type="text"
          placeholder="Enter Your City"
          id="search"
          className="search mx-auto"
        />
        <input
          type="submit"
          className="submit mx-auto"
          id="submit"
          placeholder="Search"
        />
        <h1 id="cityName" className="city-name text-center">
          Paris
        </h1>
        <h2>August 30, 2022</h2>
        <div>17°</div>
        <div>Clear Sky</div>
        <div>
          <div>Precipitation</div>
          <div>Humidity</div>
          <div>Wind</div>
        </div>
        <footer>
          This project is created by Emily Mahler and is{" "}
          <a
            href="https://github.com/stradless05/my-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
