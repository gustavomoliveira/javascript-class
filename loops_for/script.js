/* 
11.	Tabuada:
	•	Escreva um programa que imprime a tabuada de um número fornecido pelo usuário (de 1 a 10).
*/

let numero = parseInt(prompt('Digite um número para ver a sua tabuada: '));

for(let i = 1; i <= 10; i++) {
console.log('A multiplicaçao entre o ' + numero + ' X ' + i + ' é igual a: ' + (numero * i));
}

/* 
	12.	Fatorial:
	•	Escreva um programa que calcule o fatorial de um número dado usando um loop for.
*/

let numeroUsuario = parseInt(prompt('Digite um número para calcular o seu fatorial: '));
let fatorial = 1;

for(let i = 1; i <= numeroUsuario ; i++) {
	fatorial *= i;
}
console.log('O fatorial de ' + numeroUsuario + ' é igual a ' + fatorial);


/* 
14.	Array de Nomes:
	•	Crie um array com nomes de 5 pessoas. Use um loop for para imprimir cada nome no console.
*/

let nomes = ['Gustavo', 'Mari', 'Barto', 'Mario', 'Link'];

for(let i = 0; i < nomes.length; i++) {
	console.log(nomes[i]);
}

/* 
	15.	Contagem com continue:
	•	Escreva um programa que conte de 1 a 10, mas pule o número 5 usando o comando continue.
*/

for(let i = 1; i <= 10; i++) {
	if(i === 5) {
		continue;
	}
	console.log(i);
}

/* 
	16.	Contagem com break:
	•	Escreva um programa que conte de 1 a 10, mas pare o loop ao atingir o número 7 usando o comando break.
*/

for(let i = 1; i <= 10; i++) {
	if(i === 7) {
		break;
	}
	console.log(i);
}

/* 
	17.	Inverter uma String:
	•	Escreva um programa que use um loop for para inverter uma string fornecida pelo usuário.
*/

let string = prompt('Digite uma frase: ').toLowerCase();
let stringInvertida = '';

for(let i = string.length - 1; i >= 0; i--){ //inverte todos os caracteres;
	stringInvertida += string[i];
}
console.log(stringInvertida);

/* 
18.	Soma de Elementos do Array:
	•	Dado um array de números, use um loop for para calcular a soma de todos os elementos do array.
*/

let nums = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma = 0;

for(let i = 0; i <= nums.length - 1; i++) {
	soma += nums[i];
}
console.log('A soma de todos os números é de: ' + soma);

/* 
	19.	Multiplicação de Pares:
	•	Dado um array de números, multiplique cada número par por 2 e imprima o novo array.
*/

let numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 28]; 
let numsPares = [];

for(let i = 0; i <= numeros.length - 1; i++) {
	if(numeros[i] % 2 === 0) {
		numsPares.push(numeros[i] * 2);
	}
}
console.log(numsPares);

/* 
	20.	Somando Números Pares e Ímpares Separadamente:
	•	Escreva um programa que, dado um array de números, some separadamente os números pares e ímpares e imprima os resultados.
*/

let todosNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15];
let numsPar = 0;
let numsImpar = 0;

for(let i = 0; i <= todosNumeros.length - 1; i++) {
	if(todosNumeros[i] % 2 === 0) {
		numsPar += todosNumeros[i];
	} else {
		numsImpar += todosNumeros[i];
	}
}
console.log(numsPar);
console.log(numsImpar);