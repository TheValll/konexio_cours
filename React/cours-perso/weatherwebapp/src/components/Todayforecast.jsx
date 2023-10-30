import React from "react";

const Todayforecast = ({ data, getWeatherDescription }) => {
  const hoursFormat = (hoursToAdd) => {
    const date = new Date();
    date.setHours(date.getHours() + hoursToAdd);
    const hour = date.getHours();
    return hour;
  };

  const todayForecast = (hours, code, hoursTemps) => {
    return (
      <div className="forecastlist">
        <p>{hours}h</p>
        <img
          src={`./assets/icons/${getWeatherDescription(code)}.png`}
          alt="in 1h icon"
        />
        <p>{hoursTemps}°C</p>
      </div>
    );
  };
  return data ? (
    <div className="today-forecast">
      <h3>Today forecast</h3>
      <div className="ligne"></div>
      <div className="today-forecast-container">
        <div className="forecastlist">
          <p>Now</p>
          <img
            src={`./assets/icons/${getWeatherDescription(
              data.current.weathercode
            )}.png`}
            alt="in 1h icon"
          />
          <p>{data.current.temperature_2m}°C</p>
        </div>

        {todayForecast(
          hoursFormat(1),
          data.hourly.weathercode[hoursFormat(1) + 23],
          data.hourly.temperature_2m[hoursFormat(1) + 23]
        )}

        {todayForecast(
          hoursFormat(2),
          data.hourly.weathercode[hoursFormat(2) + 23],
          data.hourly.temperature_2m[hoursFormat(2) + 23]
        )}

        {todayForecast(
          hoursFormat(3),
          data.hourly.weathercode[hoursFormat(3) + 23],
          data.hourly.temperature_2m[hoursFormat(3) + 23]
        )}

        {todayForecast(
          hoursFormat(4),
          data.hourly.weathercode[hoursFormat(4) + 23],
          data.hourly.temperature_2m[hoursFormat(4) + 23]
        )}

        {todayForecast(
          hoursFormat(5),
          data.hourly.weathercode[hoursFormat(5) + 23],
          data.hourly.temperature_2m[hoursFormat(5) + 23]
        )}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Todayforecast;
