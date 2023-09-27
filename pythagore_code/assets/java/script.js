const tips = (price) => {
  let tip;
  tip = price <= 300 && price > +50 ? price * 0.15 : price * 0.2;
  return `The total price is ${
    tip + price
  } for a price of ${price} and a tip of ${tip}`;
};

tips(250);
console.log(tips(250));
