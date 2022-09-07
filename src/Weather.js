import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "5f091c27ecd3875fabda53b65ecd4358";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather">
        <div className="weather-wrapper">
          <div className="app-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="row mb-2">
                <div className="col-9">
                  <input
                    onChange={handleChange}
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
            </form>
            <WeatherInfo data={weatherData} />
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
    search();
    return "Loading....";
  }
}
