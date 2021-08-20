import axios from "axios";
import React, { useState } from "react";
import CurrentData from "./CurrentData";
import Forecast from "./Forecast";
import "./SearchForm.css";

export default function SearchForm() {
  const [weatherData, setWeatherData] = useState([
    {
      ready: false,
    },
  ]);
  const [city, setCity] = useState("");

  function searchWeather(response) {
    setWeatherData({
      ready: true,
      cityName: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: Math.round(response.data.wind.speed),
      iconID: response.data.weather[0].icon,
      latitude: response.data.coord.lat,
      longitude: response.data.coord.lon,
    });
    console.log(weatherData);
  }

  function updateCity(event) {
    setCity(event.target.value);
    console.log(city);
  }

  function searchCity(event) {
    event.preventDefault();
    let units = "imperial";
    let apiKey = `1f6bf5f6e1d5da325c16280778c22717`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(searchWeather);
  }

  function currentCoordinates(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let units = "imperial";
    let apiKey = `1f6bf5f6e1d5da325c16280778c22717`;
    let urlCoords = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(urlCoords).then(searchWeather);
  }

  function searchCoordinates(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentCoordinates);
  }

  return (
    <div className="SearchForm">
      <div className="row">
        <form className="search col-9" onSubmit={searchCity}>
          <input
            type="text"
            className="col-8 search-bar"
            placeholder="Search City"
            id="city-input"
            onChange={updateCity}
          />
          <input
            type="submit"
            className="col-4 btn btn-warning search-city-button"
            value="Search City"
          />
        </form>
        <form className="col-3" onClick={searchCoordinates}>
          <input
            type="button"
            className="btn btn-warning current-location-button"
            value="Current Location"
          />
        </form>
      </div>
      <CurrentData data={weatherData} />
      <Forecast data={weatherData} />
    </div>
  );
}
