import React from "react";
import FormattedDate from "./FormattedDate";

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
          <img src={props.data.iconUrl} className="icon"></img>
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
