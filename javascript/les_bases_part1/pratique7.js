// const numNeighbours = prompt("« Combien de pays frontaliers a votre pays ?");

const numNeighbours = Number(
  prompt("« Combien de pays frontaliers a votre pays ?")
);

// if (numNeighbours == 1) {
//   console.log("un seul pays frontalier!");
// } else if (numNeighbours > 1) {
//   console.log("Plus d'un pays frontalier");
// } else {
//   console.log("« Pas de frontières");
// }

if (numNeighbours === 1) {
  console.log("un seul pays frontalier!");
} else if (numNeighbours > 1) {
  console.log("Plus d'un pays frontalier");
} else {
  console.log("« Pas de frontières");
}
