import Current from "./components/Current";
import Nextdays from "./components/Nextdays";
import Todayforecast from "./components/Todayforecast";
import Map from "./components/Map";
import "./styles/index.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  const [data, setData] = useState(null);

  useEffect(() => {
    if (location) {
      axios
        .get(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,precipitation,weathercode&hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,uv_index,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,uv_index_max&timezone=GMT&past_days=1&models=best_match`
        )
        .then((res) => {
          setData(res.data);
        });
    }
  }, [location]);

  const getWeatherDescription = (code) => {
    switch (true) {
      case code === 0:
        return "sunny";
      case code >= 1 && code <= 3:
        return "cloudsun";
      case code >= 45 && code <= 48:
        return "cloudy";
      case code >= 51 && code <= 67:
        return "rain";
      case code >= 71 && code <= 77:
        return "snow";
      case code >= 80 && code <= 82:
        return "rain";
      case code >= 85 && code <= 86:
        return "snow";
      case code >= 95 && code <= 99:
        return "storm";
      default:
        return "Unknown weather condition";
    }
  };

  return location ? (
    <div className="app">
      <div className="app-left">
        <Current
          data={data}
          location={location}
          getWeatherDescription={getWeatherDescription}
        />
      </div>
      <div className="app-right">
        <div className="left">
          <Todayforecast
            data={data}
            getWeatherDescription={getWeatherDescription}
          />
          <Map location={location} />
        </div>
        <Nextdays data={data} getWeatherDescription={getWeatherDescription} />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default App;
