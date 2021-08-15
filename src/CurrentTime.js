import React from "react";

export default function CurrentTime() {
  let time = null;
  function currentTime(data) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let weekday = days[data.getDay()];
    let hour = data.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    let minute = data.getMinutes();
    if (minute < 10) {
      minute = `0${minute}`;
    }
    time = `${weekday} ${hour}:${minute}`;
  }

  currentTime(new Date());
  return <div>{time}</div>;
}
