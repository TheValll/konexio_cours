const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsTotal = [];

const calcTip = (price) => {
  tipp = price <= 300 && price >= 50 ? price * 0.15 : price * 0.2;
  const total = tipp + price;
  return total;
};

for (let i = 0; i < bills.length; i++) {
  tipsTotal.push(calcTip(bills[i]));
}
console.log(tipsTotal);
