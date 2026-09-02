/* 
&& -> false && true -> false 

FALSY 
false 
0 
'' " " ``
null/undefined
NaN 

todos os acima retornam false / falsy 
*/

// retorna o ultimo valor
console.log("Luiz" && "Maria"); // Maria

console.log("Luiz" && null && "Maria"); // null

// outro exemplo:
function falaOi() {
  return "Oi";
}

let vaiExecutar;

console.log(vaiExecutar && falaOi()); // undefined

// Para o OR
console.log(0 || false || null || "Luiz" || true); // Luiz
