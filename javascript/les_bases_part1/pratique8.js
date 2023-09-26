let language = "english";
let population = 60; //en million
let isIsland = false;
let country = "France";

if (language === "english" && population > 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}
