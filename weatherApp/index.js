const success = async (pos) => {
  let data2 = "";
  latitude = pos.coords.latitude;
  longitude = pos.coords.longitude;
  // console.log(latitude, longitude);
  await fetch(
    `https://api.weatherapi.com/v1/current.json?key=92be7c89067c4927ae2151448231110&q=${latitude},${longitude}`,
    { method: "get" }
  )
    .then((res) => res.text())
    .then((data) => {
      data2 = JSON.parse(data);
      console.log(data2);
    });

  document.body.innerHTML = `
    <div class="card">
    <div class="card--container">
      <div class="crucial--infos">
        <i class="fa-solid fa-location-dot"></i>
        <p id="location">${data2.location.name}, ${data2.location.country}</p>
        <p id="date">${data2.location.localtime}</p>
        <img
          id="icon"
          src="${data2.current.condition.icon}"
          alt="image de la meteo"
          height="200px"
        />
        <p id="temp">${data2.current.temp_c}°</p>
        <p id="condition">${data2.current.condition.text}</p>
      </div>
      <div class="secondary--infos">
        <div class="secondary--infos--container">
          <div class="humidity--content">
            <img
              id="iconSmall"
              src="./icon.png"
              alt="image de l'humitide"
              height="50px"
            />
            <p class="infos">Humidity</p>
            <p class="value">${data2.current.humidity} %</p>
          </div>
          <div class="precipitation--content">
            <img
              id="iconSmall"
              src="./icon.png"
              alt="image des precipitations"
              height="50px"
            />
            <p class="infos">Precipitation</p>
            <p class="value">${data2.current.precip_in} %</p>
          </div>
          <div class="windy--content">
            <img
              id="iconSmall"
              src="./icon.png"
              alt="image de windy"
              height="50px"
            />
            <p class="infos">Windy</p>
            <p class="value">${data2.current.wind_kph} km/h</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
};

const error = () => {
  console.log("error");
};
const displayWeather = () => {
  navigator.geolocation.getCurrentPosition(success, error);
};

displayWeather();
