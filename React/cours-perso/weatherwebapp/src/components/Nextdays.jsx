import React from "react";

const Nextdays = ({ data, getWeatherDescription }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const convertDateToWeekday = (dateString) => {
    const date = new Date(dateString);
    const weekday = date.toLocaleDateString("fr-FR", { weekday: "long" });
    return capitalizeFirstLetter(weekday);
  };

  const displayForecast = (day, code, minTemp, maxTemp) => {
    return (
      <div className="nextforecastlist">
        <p className="day">{day}</p>
        <div className="img-container">
          <img
            src={`./assets/icons/${getWeatherDescription(code)}.png`}
            alt="now icon"
          />
        </div>
        <p>{minTemp}°C</p>
        <div className="lignetemps"></div>
        <p>{maxTemp}°C</p>
      </div>
    );
  };

  return data ? (
    <div className="nextday">
      <h3>4-Day Forecast</h3>

      <div className="ligne"></div>
      <div className="next-forecast-container">
        {displayForecast(
          "Yesterday",
          data.daily.weathercode[0],
          data.daily.temperature_2m_min[0],
          data.daily.temperature_2m_max[0]
        )}
        {displayForecast(
          "Today",
          data.daily.weathercode[1],
          data.daily.temperature_2m_min[1],
          data.daily.temperature_2m_max[1]
        )}

        {displayForecast(
          convertDateToWeekday(data.daily.time[2]),
          data.daily.weathercode[2],
          data.daily.temperature_2m_min[2],
          data.daily.temperature_2m_max[2]
        )}
        {displayForecast(
          convertDateToWeekday(data.daily.time[3]),
          data.daily.weathercode[3],
          data.daily.temperature_2m_min[3],
          data.daily.temperature_2m_max[3]
        )}
        {displayForecast(
          convertDateToWeekday(data.daily.time[4]),
          data.daily.weathercode[4],
          data.daily.temperature_2m_min[4],
          data.daily.temperature_2m_max[4]
        )}
        {displayForecast(
          convertDateToWeekday(data.daily.time[5]),
          data.daily.weathercode[5],
          data.daily.temperature_2m_min[5],
          data.daily.temperature_2m_max[5]
        )}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Nextdays;
