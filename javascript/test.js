function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return [];
  }

  let count = 0;
  let sumNegatives = 0;

  input.map((i) => {
    // count += i > 0 ? 1 : 0;
    // sumNegatives += i < 0 ? i : 0;
    i > 0 ? count++ : (sumNegatives += i);
  });

  return [count, sumNegatives];
}
