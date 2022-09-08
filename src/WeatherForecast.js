import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "9c50c4a04c8cf9efd46e93616974921c";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={44} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max"> hi 19° /</span>
            <span className="WeatherForecast-temperature-min"> low 10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
