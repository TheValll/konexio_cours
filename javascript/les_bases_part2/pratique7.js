const neighbours = ["germany", "belgium", "spain"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("germany")) {
  console.log("Probably not a central European country :D");
}
neighbours[neighbours.indexOf("germany")] = "Allemagne";
console.log(neighbours);
