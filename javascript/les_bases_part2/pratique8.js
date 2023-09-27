const calcTip = (price) => {
  tipp = price <= 300 && price >= 50 ? price * 0.15 : price * 0.2;
  return tipp;
};

calcTip(100);
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip([bills[0]]), calcTip([bills[1]]), calcTip([bills[2]])];

const total = [
  bills[0] + tips[0],
  Number([bills[1]]) + Number([tips[1]]),
  Number([bills[2]]) + Number([tips[2]]),
  [bills[2]] + [tips[2]],
];
console.log(total);
console.log(typeof bills[0]);
console.log(typeof [bills[0]]);
