import React from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  if (props.data.dataValue === true) {
    function getForecastData(response) {
      let dailyWeather = response.data.daily;
    }
    function searchForecast(lat, lon) {
      let apiKey = props.data.apiKey;
      let units = `imperial`;
      let urlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
      axios.get(urlForecast).then(getForecastData);
    }
    searchForecast(props.data.latitude, props.data.longitude);

    return <div>Daily Forecast Coming Soon!</div>;
  } else {
    return <div></div>;
  }
}
