/* console.log("Linha 0");
console.log("Linha 1");
console.log("Linha 2");
console.log("Linha 3");
console.log("Linha 4");
console.log("Linha 5");

// Utilizando for
for (let i = 0; i <= 5; i++) {
  console.log("Linha " + i);
}*/

for (let i = 0; i <= 10; i++) {
  const itsPar = i % 2 === 0 ? "Par" : "Ímpar";
  console.log(i, itsPar);
}

const frutas = ["Maçã", "Pêra", "Uva"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
