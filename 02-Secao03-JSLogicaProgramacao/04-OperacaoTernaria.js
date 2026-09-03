// ? :

const pontuacaoUsuario = 1010;

if (pontuacaoUsuario >= 1000) {
  console.log("Usuário VIP");
} else {
  console.log("Usuário Normal");
}

// Operação Ternária:
const nivelUsuario =
  pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário Normal";

console.log(nivelUsuario);

// Valor Padrao
const corUsuario = "Pink";
const corPadrao = corUsuario || "Preta";

console.log(corPadrao);
