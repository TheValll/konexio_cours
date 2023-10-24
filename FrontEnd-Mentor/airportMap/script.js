const map = L.map("map").setView([49.00970078, 2.548599958], 5);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="https://github.com/TheValll">ValMap</a>',
}).addTo(map);

fetch(`http://localhost:3000/airports`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.shift();
    data.forEach((el) => {
      if (parseFloat(el[2]) === NaN || parseFloat(el[3]) === NaN) {
        return;
      } else {
        const marker = L.marker([el[2], el[3]]).addTo(map);
        marker.bindPopup(`<b>Airport ${el[0]}</b><br>${el[1]}`).openPopup();
      }
    });
  });
