import React from "react";
import "./CurrentData.css";
import CurrentTime from "./CurrentTime";
import WeatherIcon from "./WeatherIcon";
import "./WeatherIcon.css";

export default function CurrentData(props) {
  if (props.data.ready === true) {
    return (
      <div>
        <div className="data">
          <div className="row">
            <div className="col-8">
              <h1 className="current-city">{props.data.cityName}</h1>
              <CurrentTime time={props.data.time} />
              <div className="sky">{props.data.description}</div>
              <div className="weather">
                Humidity:{" "}
                <span className="humidity property">
                  {props.data.humidity}%
                </span>
                , Wind:{" "}
                <span className="wind property">
                  {props.data.windSpeed} mph
                </span>
              </div>
            </div>
            <div className="col-1">
              <WeatherIcon code={props.data.iconID} />
            </div>
            <div className="col-3 current-temp">
              <span>{props.data.temperature}</span>
              <span className="units">°F</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
