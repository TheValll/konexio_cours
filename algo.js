// Considérons la fonction f(x) qui est égale à 8x + 6 sur l'intervalle I = [-40;27[ et égale à 4x² + 6x + 3 sur l'intervalle I = ]27;52].
// Calculer l'angle 0YX du triangle 0XY en dégre au au millième près en cm théoriquesur I[-40;52].
// Si x n'est pas inclue dans I alors return x = (value of x) isn,t on I.

const calc = (data) => {
  return data
    .map((x) => {
      if (x < -40 || x > 52) return `x = ${x} isn,t on I`;
      let y = 0;
      if (x >= -40 && x < 27) {
        y = 8 * x + 6;
      }
      if (x > 27 && x <= 52) {
        y = 4 * x ** 2 + 6 * x + 3;
      }
      let hypotenus = Math.sqrt(x ** 2 + y ** 2);
      return `${(Math.acos(y / hypotenus) * (180 / Math.PI)).toFixed(3)} cm`;
    })
    .join(" ");
};

const data = [1, 14, -87, -23, 32, 76];

console.log(calc(data));
