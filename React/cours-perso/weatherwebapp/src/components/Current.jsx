import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Current = ({ data, location, getWeatherDescription }) => {
  const dateFormat = () => {
    const date = new Date();
    const datePart = date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const timePart = date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${datePart}, ${timePart}`;
  };

  const [city, setCity] = useState(null);
  useEffect(() => {
    if (location) {
      axios
        .get(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location.latitude}&longitude=${location.longitude}`
        )
        .then((res) => setCity(res.data.city));
    }
  }, [location]);

  return data && location ? (
    <div className="weather-infos">
      <div className="weather">
        <h1>{data.current.temperature_2m}°C</h1>
        <img
          src={`./assets/icons/${getWeatherDescription(
            data.current.weathercode
          )}.png`}
          alt="current weather icon"
        />
      </div>
      <h3>{city}</h3>
      <p>
        {dateFormat()} | L:
        {data.daily.temperature_2m_min[1]}°C - H:
        {data.daily.temperature_2m_max[1]}°C
      </p>
      <div className="btn-container">
        <input type="text" id="input" placeholder="Enter a city" />
        <input type="submit" value="" id="submit" />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
export default Current;
