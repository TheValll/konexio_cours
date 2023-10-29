import React from "react";

const Nextdays = () => {
  return (
    <div className="nextday">
      <h3>7-Day Forecast</h3>
      <div className="ligne"></div>
      <div className="next-forecast-container">
        <div className="nextforecastlist">
          <p className="day">Yesterday</p>
          <img src="./assets/icons/rain.png" alt="now icon" />
          <p>23°C</p>
          <div className="lignetemps"></div>
          <p>24°C</p>
        </div>

        <div className="nextforecastlist">
          <p className="day">Today</p>
          <img src="./assets/icons/sunny.png" alt="in 1h icon" />
          <p>21°C</p>
          <div className="lignetemps"></div>
          <p>24°C</p>
        </div>

        <div className="nextforecastlist">
          <p className="day">Monday</p>
          <img src="./assets/icons/snow.png" alt="in 1h icon" />
          <p>20°C</p>
          <div className="lignetemps"></div>
          <p>24°C</p>
        </div>

        <div className="nextforecastlist">
          <p className="day">Tuesday</p>
          <img src="./assets/icons/snow.png" alt="in 1h icon" />
          <p>20°C</p>
          <div className="lignetemps"></div>
          <p>24°C</p>
        </div>

        <div className="nextforecastlist">
          <p className="day">Wenesday</p>
          <img src="./assets/icons/snow.png" alt="in 1h icon" />
          <p>20°C</p>
          <div className="lignetemps"></div>
          <p>24°C</p>
        </div>

        <div className="nextforecastlist">
          <p className="day">Thursday</p>
          <img src="./assets/icons/snow.png" alt="in 1h icon" />
          <p>20°C</p>
          <div className="lignetemps"></div>
          <p>24°C</p>
        </div>
      </div>
    </div>
  );
};

export default Nextdays;
