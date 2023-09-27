const myCountry = {
  country: "France",
  capital: "Paris",
  language: "french",
  population: 68,
  neighbours: ["spain", "germany", "belgium"],
  isIsland: false,

  checkIsland() {
    return this.isIsland === true ? "it's an insland" : "it's not an insland";
  },
  describe() {
    return `This is ${this.country}, has ${this.population} mliiions ${
      this.language
    } people and ${
      myCountry.neighbours.length
    } neighbours and a capital called ${
      myCountry.capital
    } and ${this.checkIsland()}`;
  },
};

console.log(myCountry.describe());
