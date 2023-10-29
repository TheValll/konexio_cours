import React from "react";

const Current = () => {
  return (
    <div className="weather-infos">
      <div className="weather">
        <h1>23°C</h1>
        <img src="./assets/icons/strom.png" alt="current weather icon" />
      </div>
      <h3>Watermelon Park</h3>
      <p>29 Octobre 2023, 10:42 | H:32°C L:18°C</p>
      <div className="btn-container">
        <input type="text" id="input" placeholder="Enter a city" />
        <input type="submit" value="" id="submit" />
      </div>
    </div>
  );
};

export default Current;
