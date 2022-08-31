import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-wrapper">
        <div className="app-wrapper">
          <div className="row mb-2">
            <div className="col-9">
              <input
                type="text"
                placeholder="Enter Your City"
                id="search"
                className="search"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="submit"
                id="submit"
                placeholder="Search"
              />
            </div>
          </div>
          <div id="cityName" className="city-name text-center">
            Paris
          </div>
          <div className="date text-center">August 30, 2022</div>
          <br />
          <hr />
          <div className="flex-container temp-details justify-content-around">
            <div className="temp">17°</div>
            <div>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                className="icon"
              ></img>
              <span className="looks-like text-center">Clear Sky</span>
            </div>
          </div>
          <div className="details text-center">
            <div>Precipitation</div>
            <div>Humidity</div>
            <div>Wind</div>
          </div>
        </div>
        <footer className="footer">
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
