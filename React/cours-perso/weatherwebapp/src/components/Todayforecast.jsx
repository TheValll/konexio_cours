import React from "react";

const Todayforecast = () => {
  return (
    <div className="today-forecast">
      <h3>Today forecast</h3>
      <div className="ligne"></div>
      <div className="today-forecast-container">
        <div className="forecastlist">
          <p>Now</p>
          <img src="./assets/icons/rain.png" alt="now icon" />
          <p>23°C</p>
        </div>
        <div className="forecastlist">
          <p>19h</p>
          <img src="./assets/icons/sunny.png" alt="in 1h icon" />
          <p>21°C</p>
        </div>
        <div className="forecastlist">
          <p>20h</p>
          <img src="./assets/icons/snow.png" alt="in 1h icon" />
          <p>20°C</p>
        </div>
        <div className="forecastlist">
          <p>20h</p>
          <img src="./assets/icons/snow.png" alt="in 1h icon" />
          <p>20°C</p>
        </div>
        <div className="forecastlist">
          <p>20h</p>
          <img src="./assets/icons/snow.png" alt="in 1h icon" />
          <p>20°C</p>
        </div>
        <div className="forecastlist">
          <p>20h</p>
          <img src="./assets/icons/snow.png" alt="in 1h icon" />
          <p>20°C</p>
        </div>
      </div>
    </div>
  );
};

export default Todayforecast;
