import React, { useState } from "react";

export default function Temperature(props) {
  const [units, setUnits] = useState("fahrenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnits("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }
  if (units === "fahrenheit") {
    return (
      <div className="current-temp">
        <span>{props.fahrenheit}</span>
        <span className="units">
          °F |{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = Math.round(((props.fahrenheit - 32) * 5) / 9);
    return (
      <div className="current-temp">
        <span>{celsius}</span>
        <span className="units">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>{" "}
          | °C
        </span>
      </div>
    );
  }
}
