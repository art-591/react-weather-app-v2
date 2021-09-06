import React from "react";
import "./CurrentData.css";
import CurrentTime from "./CurrentTime";
import WeatherIcon from "./WeatherIcon";
import "./WeatherIcon.css";
import Temperature from "./Temperature";

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
              <WeatherIcon code={props.data.iconID} size={100} />
            </div>
            <div className="col-3">
              <Temperature fahrenheit={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
