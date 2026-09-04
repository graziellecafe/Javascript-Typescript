const frutas = ["Maçã", "Pêra", "Uva", "Manga"];

console.log("-----------------------");
console.log("Utilizando for normal: ");
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

console.log("-----------------------");
console.log("Utilizando for in: ");
for (let i in frutas) {
  console.log(frutas[i]);
}

console.log("-----------------------");
console.log("Trabalhando com objetos: ");
const pessoa = {
  nome: "Grazielle",
  sobrenome: "Café",
  idade: 32,
  endereco: {
    rua: "Avenida Brasil",
    numero: 40,
    bairro: "Savassi",
  },
};

for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}
