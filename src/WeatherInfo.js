import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div id="cityName" className="city-name text-center">
        {props.data.city}
      </div>
      <div className="date text-center">
        <FormattedDate date={props.data.date} />
      </div>
      <br />
      <hr />
      <div className="flex-container temp-details justify-content-around">
        <div className="temp">{Math.round(props.data.temperature)}°</div>
        <div>
          <WeatherIcon code={props.data.icon} size={50} className="icon" />
          <span className="text-capitalize looks-like">
            {props.data.description}
          </span>
        </div>
      </div>
      <div className="details text-center">
        <div>Humidity: {props.data.humidity}%</div>
        <div>Wind Speed: {Math.round(props.data.wind)} km/h</div>
      </div>
    </div>
  );
}
