const success = (pos) => {
  latitude = pos.coords.latitude;
  longitude = pos.coords.longitude;
  console.log(latitude, longitude);
  // fetch(
  //   `https://api.weatherapi.com/v1/current.json?key=92be7c89067c4927ae2151448231110&q=${latitude},${longitude}`,
  //   { method: "get" }
  // )
  //   .then((res) => res.text())
  //   .then((data) => {
  //     let data2 = JSON.parse(data);
  //     console.log(data2);
  //   });
};
const error = () => {
  console.log("error");
};
navigator.geolocation.getCurrentPosition(success, error);
