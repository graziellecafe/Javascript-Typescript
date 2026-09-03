const pessoa = {
  nome: "Grazielle",
  sobrenome: "Café",
  idade: 32,
  endereco: {
    rua: "Avenida Brasil",
    numero: 320,
  },
};

console.log(`O meu nome é: `, pessoa.nome);

// Atribuição via desestruturação:
const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome);
