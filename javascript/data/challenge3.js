const gameEvents = new Map([
  [12, "goal"],
  [43, "goal"],
  [64, "yellow card"],
  [70, "red card"],
  [79, "goal"],
]);

const events = [new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

for (const [min, event] of gameEvents) {
  const half = min < 45 ? "first half ->" : "second half ->";
  console.log(`${half} ${min}: ${event}`);
}
