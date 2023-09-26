let percentageOfWorld3 = (population, country) => {
  return `${country} has ${population} million people, so it's about ${
    (population * 100) / 7900
  } % of the world population .`;
};

console.log(percentageOfWorld3(8, "France"));
