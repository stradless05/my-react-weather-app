import axios from "axios";
import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });
  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      name: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }

  if (weatherData.loaded) {
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
              {weatherData.name}
            </div>
            <div className="date text-center">
              <FormattedDate date={weatherData.date} />
            </div>
            <br />
            <hr />
            <div className="flex-container temp-details justify-content-around">
              <div className="temp">{Math.round(weatherData.temperature)}°</div>
              <div>
                <img src={weatherData.iconUrl} className="icon"></img>
                <span className="text-capitalize looks-like">
                  {weatherData.description}
                </span>
              </div>
            </div>
            <div className="details text-center">
              <div>Humidity: {weatherData.humidity}%</div>
              <div>Wind Speed: {Math.round(weatherData.wind)} km/h</div>
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
  } else {
    let apiKey = "5f091c27ecd3875fabda53b65ecd4358";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading....";
  }
}
