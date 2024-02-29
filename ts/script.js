"use strict";
const seum = (a, b) => {
    return a + b;
};
console.log(seum(7, 5));
const greet = (name = "") => {
    if (name !== "") {
        return `Hello ${name}`;
    }
    return "oui";
};
console.log(greet());
