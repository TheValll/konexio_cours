// VARIABLE SET

const inputValue = document.getElementById("input");
const submitInput = document.getElementById("submit");
let activeMap = 0;

// LOAD MAP ON SCREEN

const map = L.map("map").setView([49.00970078, 2.548599958], 6);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  minZoom: 2,
  attribution:
    '&copy; <a href="https://github.com/TheValll" target="_blank">TheValllMap</a>',
}).addTo(map);
let planeIcon = L.icon({
  iconUrl: "./marker.png",
  iconSize: [32, 32],
});

// SUBMIT COUNTRY SEARCH

submitInput.addEventListener("click", async () => {
  if (activeMap === 1) {
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });
  }
  pinFunct();
});

// COUNTRY INFO

const countryInfo = async () => {
  const nameCountryLabel = document.querySelector(".nameCountry");
  const infos = document.querySelector(".infos");
  const flag = document.getElementById("flags");
  const region = document.getElementById("region");
  const capital = document.getElementById("capital");
  const population = document.getElementById("population");
  // const language = document.getElementById("language");
  // const currencies = document.getElementById("currencies");

  let country = inputValue.value;

  await fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      try {
        let populationCount = data[1].population;
        populationCount = populationCount
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

        nameCountryLabel.textContent = `${data[1].name.official} : `;
        infos.style.display = "block";
        flag.src = data[1].flags.png;
        region.textContent = `Region : ${data[1].continents[0]}`;
        capital.textContent = `Capital : ${data[1].capital[0]}`;
        population.textContent = `Population : ${populationCount} people`;
      } catch {
        try {
          let populationCount = data[0].population;
          populationCount = populationCount
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
          nameCountryLabel.textContent = `${data[0].name.official} : `;
          infos.style.display = "block";
          flag.src = data[0].flags.png;
          region.textContent = `Region : ${data[0].continents[0]}`;
          capital.textContent = `Capital : ${data[0].capital[0]}`;
          population.textContent = `Population : ${populationCount} people`;
        } catch {
          return;
        }
      }
    });
};
// ADD MARKERS ON MAP

const pinFunct = async () => {
  activeMap = 1;
  await fetch(
    `https://m218.syncusercontent.com/mfs-60:654c50e09404d9c7e7e8f52d5e728ae3=============================/p/aeroports.json?allowdd=0&datakey=UNmOuvNX2Rk4jmlaqq5rq4woEd1xvbFVB3ScdmjZODG1paA/1O4yvNf0b1yZSj+GL8yFUILgh5YSTkRguiUvPzzTYo13dbhf9+LPTbJe42t6goBlJXYnNab6vj4S31T8LoYmnF0EO2U4JDqZUYY51uMxI+yKgTV2k7aobUM4tpKKEoKjkwHDhkD2qGRLdS/HRhLcghNSnaE1TyXGZHabIf1WJZZcIOTgt54nY4b00XcyB8vzA2CFUBE8dC/h5oVoeP1dmxnmoRxYXgDAyg7j29SF1/Y+5mut9G9dfJRMP1KnQTvOzV8C29WLKY3DrmrgVe+sx8YBIXpDV5HHGqxRnw&engine=ln-3.1.38&errurl=FPnkVOAac/OzFK9+XTiAm7HuEeDUKTwxqHuQR3hQg7sM2RtbKzQDUFvw2DyjG7kNBO3N7qiLfY9EMuVKJbXzvAkpd8LkDrrNnp0L7M68mU7S26MlT/dzNV0/JoaxwFtRrjOckAIAxLOMpGuOxr1lm6TASAVV6fSlxUjFZNEyiA8kdgo7mzdyg98xKX8hobLKnnn4c6j/rkoX/xagWePsPrZqmSgXgOtkE3g2GjI6/87tPt9BZGnlai2w6om+znwKGRnJNIRkEG2S/sYgvoWoAljczWC5xmdrJZ1AXlNsS95Wycoo0LjWjL+mOD186E2K7K4mtysHfzODo+Y3f2/tyw==&header1=Q29udGVudC1UeXBlOiB0ZXh0L3BsYWlu&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iYWVyb3BvcnRzLmpzb24iO2ZpbGVuYW1lKj1VVEYtOCcnYWVyb3BvcnRzLmpzb247&ipaddress=2961239711&linkcachekey=c35eaa330&linkoid=2168150011&mode=101&sharelink_id=14722538380011&timestamp=1698241105456&uagent=9a0267475084414485643b212482e954156a6ed7&signature=498698dddb01e087168c1460b836afedeeb9002f&cachekey=60:654c50e09404d9c7e7e8f52d5e728ae3=============================`
  )
    .then((res) => {
      if (!res.ok) {
        return;
      } else {
        return res.json();
      }
    })
    .then((data) => {
      let country = inputValue.value;
      const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
      data.shift();
      map.panTo(new L.LatLng([data[1][2]], [data[1][3]]));
      data.forEach((el) => {
        if (el[1] === capitalizeFirstLetter(country)) {
          const marker = L.marker([el[2], el[3]], { icon: planeIcon }).addTo(
            map
          );
          marker.bindPopup(`<b>Airport ${el[0]}</b><br>${el[1]}`).openPopup();
        }
      });
    });
  countryInfo();
  inputValue.value = "";
};
