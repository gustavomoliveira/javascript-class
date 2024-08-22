/* 
11.	Tabuada:
	•	Escreva um programa que imprime a tabuada de um número fornecido pelo usuário (de 1 a 10).
*/

let numero = parseInt(prompt('Digite um número para ver a sua tabuada: '));

for(let i = 1; i <= 10; i++) {
console.log('A multiplicaçao entre o ' + numero + ' X ' + i + ' é igual a: ' + (numero * i));
}
