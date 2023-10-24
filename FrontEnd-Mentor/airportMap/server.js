// IMPORT DATA

const fs = require("fs");

let request = fs.readFileSync("data.csv").toString();

let airportCoord = [];
let airports = request.split("\n");

airports.forEach((airport) => {
  airport = airport.split(",");
  let infos = [];
  infos.push(airport[1]);
  infos.push(airport[3]);
  infos.push(airport[4]);
  infos.push(airport[5]);
  airportCoord.push(infos);
});

let tosys = fs.createWriteStream("./aeroports.json", { autoClose: true });
tosys.write(JSON.stringify(airportCoord));
tosys.end();

const Koa = require("koa");
const r = require("koa-route");
const app = new Koa();

app.use(
  r.get("/", (ctx) => {
    ctx.type = "text/html";
    ctx.body = fs.readFileSync("./index.html");
  })
);
app.use(
  r.get("/airports", (ctx) => {
    ctx.type = "text/json";
    ctx.body = fs.readFileSync("./aeroports.json");
  })
);
app.use(
  r.get("/script.js", (ctx) => {
    ctx.type = "text/javascript";
    ctx.body = fs.readFileSync("./script.js");
  })
);
app.use(
  r.get("/style.css", (ctx) => {
    ctx.type = "text/css";
    ctx.body = fs.readFileSync("./style.css");
  })
);

app.listen(3000, () => {
  console.log("en écoute sur le port: 3000");
});
