const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [firstNumber, secondNumber, ...rest] = numbers;

console.log(firstNumber); // Saída: 1
console.log(secondNumber); // Saída: 2
console.log(`O restante dos números são: `, rest);
