const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI() {
    return this.mass / (this.height * this.height);
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI() {
    return this.mass / (this.height * this.height);
  },
};

console.log(
  mark.calcBMI() > john.calcBMI()
    ? `L'imc de mark (${mark.calcBMI()}) est plsu grande que celle de John (${john.calcBMI()}) !`
    : `L'imc de John (${john.calcBMI()}) est plsu grande que celle de Mark (${mark.calcBMI()}) !`
);
