/* 
Operadores Lógicos 

&& -> AND: Todas as expressoes precisam ser true para retornar true
|| -> OR 
! => NOT
*/

const verdadeiro = true && true && true;
console.log("Utilizando o AND: ", verdadeiro); // true

const usuario = "Grazielle";
const senha = 123456;

const vaiLogar = usuario === "Grazielle";
console.log("Verificar se o sistema vai logar: ", vaiLogar); // true

console.log("Verificando o OR: ");
const perfil = "admin";
const senhaPerfil = 12345;

//                        true                 false
const comparacao = perfil === "admin" || senhaPerfil === 1234; //true
console.log(comparacao);
