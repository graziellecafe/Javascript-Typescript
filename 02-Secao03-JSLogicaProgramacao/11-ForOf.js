console.log("--------------");
console.log("For normal: ");
const nome = "Grazielle Café";
for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}

console.log("--------------");
console.log("For of: "); // retorna o valor

for (let valor of nome) {
  console.log(valor);
}
