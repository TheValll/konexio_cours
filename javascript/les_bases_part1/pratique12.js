let price = 64;
let pourboire;
let finalPrice;

pourboire = price <= 300 && price <= 50 ? price * 0.15 : price * 0.2;
// pourboire = price < 50 ? (price * 15) / 100 : (price * 20) / 100;

console.log(pourboire);

finalPrice = `La valeur est de ${price}, le pourboire est de ${pourboire} et le prix finale est de ${
  price + pourboire
}`;
console.log(finalPrice);
