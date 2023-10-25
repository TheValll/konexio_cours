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
      console.log(data);
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
      // language.textContent = `Language : ${data[0].languages[0]}`;
      // currencies.textContent = `Currencies : ${
      //   data[0].currencies.name + data[0].currencies.symbol
      // }`;
    });
};
// ADD MARKERS ON MAP

const pinFunct = async () => {
  activeMap = 1;
  await fetch(`http://localhost:3000/aeroports`)
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
