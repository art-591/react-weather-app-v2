import axios from "axios";
import React, { useState } from "react";
import CurrentData from "./CurrentData";
import Forecast from "./Forecast";

export default function SearchForm() {
  const [citySearch, setCitySearch] = useState(null);
  const [city, setCity] = useState(null);
  const [temp, setTemp] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);
  const [data, setData] = useState(false);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  let weatherData = {
    cityName: city,
    temperature: Math.round(temp),
    weatherDescription: description,
    humidityPercentage: humidity,
    windSpeed: Math.round(wind),
    iconID: icon,
    dataValue: data,
    latitude: lat,
    longitude: lon,
    units: "imperial",
    apiKey: `1f6bf5f6e1d5da325c16280778c22717`,
  };

  function searchWeather(response) {
    setTemp(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
    setCity(response.data.name);
    setLat(response.data.coord.lat);
    setLon(response.data.coord.lon);
    setData(true);
  }

  function updateCity(event) {
    setCitySearch(event.target.value);
  }

  function searchCity(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${weatherData.apiKey}&units=${weatherData.units}`;
    axios.get(url).then(searchWeather);
  }

  function currentCoordinates(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let urlCoords = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${weatherData.apiKey}&units=${weatherData.units}`;
    axios.get(urlCoords).then(searchWeather);
  }

  function searchCoordinates(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(currentCoordinates);
  }

  return (
    <div className="weatherContainer">
      <div className="row">
        <form className="search col-10 row" onSubmit={searchCity}>
          <input
            type="text"
            className="col-9"
            placeholder="Search City"
            id="city-input"
            onChange={updateCity}
          />
          <input
            type="submit"
            className="col-3 btn btn-warning"
            value="Submit"
          />
        </form>
        <form className="col-2" onClick={searchCoordinates}>
          <input
            type="button"
            className="current btn btn-warning"
            value="Current"
          />
        </form>
      </div>
      <CurrentData data={weatherData} />
      <Forecast data={weatherData} />
    </div>
  );
}
