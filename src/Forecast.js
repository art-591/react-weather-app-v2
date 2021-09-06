import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props]);

  function getForecastData(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded === false) {
    let lat = props.data.latitude;
    let lon = props.data.longitude;
    let apiKey = `1f6bf5f6e1d5da325c16280778c22717`;
    let units = `imperial`;
    let urlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(urlForecast).then(getForecastData);
    return null;
  } else {
    return (
      <div className="forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
