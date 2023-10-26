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
    `https://m218.syncusercontent.com/mfs-60:654c50e09404d9c7e7e8f52d5e728ae3=============================/p/aeroports.json?allowdd=0&datakey=FSaUOVbsGH2mFtgIkaTuQPlj3ueNXJuXh+JmycOHa85o4qnyYVfIWF8Npmj/duNm9hhg8fX5wZKPATUPR5bkGugDNqfkSu0RV9R2EnbG/gw5ttxX17b4uDnGKG0umWzH56jIuQqTalxHBIFa5lP0qwM3DuTL3u5UMxkb8ReFKvfEpymJquvygQJTzupt2ytsnPLWLLftQcjKuepZXVztmmq/CB1hJvHKJ+fr3JwbofF97UTbYJj77vLcqf4Z5VgjIXKLXGdm6ZrA/zO1Iek0d4sH74QBqTCULW7V5topDeridvyqaGFPFcMNT64ZYmTFuxNuN30ea9o/3zGstuATlA&engine=ln-3.1.38&errurl=TUQIfBXpNqAHVXKXDJY9iNJw8GckXg3XIiBci+6Q3bGtjp1vXkzn49FakwukCRqbjOQZ84ovj6EMLbB1L7/Ijk2K5eQqKLm2rMjBcHcrSApCfdwKaFVaaD0r6ZqsoQ4cyy9pJ4O8+FduFpX3jsoqtH0JDc5GNzH8C1OMmg6pCs/voOLnxqdVnv/2ZSNYC+/+dwd5bixlPW4MTgaqlfN27UYDMXdLu1fp5HS38EGH7aVMh8m35G2qPrRG47IXMk9upluJA3qMcnpDIE0jRNWIqFauF/jKYW/oNsOBlhqNW/6sG5x2F75eCmdYcmfKoi/F1BljyfZGlECTuwjZCLLUSg==&header1=Q29udGVudC1UeXBlOiB0ZXh0L3BsYWlu&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iYWVyb3BvcnRzLmpzb24iO2ZpbGVuYW1lKj1VVEYtOCcnYWVyb3BvcnRzLmpzb247&ipaddress=3277191185&linkcachekey=c35eaa330&linkoid=2168150011&mode=101&sharelink_id=14722538380011&timestamp=1698306026964&uagent=80b12c334bbd7b97cf291509cc39c7f38f38fea6&signature=c8e6abcbc07ab2f37ac89048c69f50716ab29cdb&cachekey=60:654c50e09404d9c7e7e8f52d5e728ae3=============================`
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
