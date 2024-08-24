/* 
11.	Tabuada:
	•	Escreva um programa que imprime a tabuada de um número fornecido pelo usuário (de 1 a 10).
*/

/* let numero = parseInt(prompt('Digite um número para ver a sua tabuada: '));

for(let i = 1; i <= 10; i++) {
console.log('A multiplicaçao entre o ' + numero + ' X ' + i + ' é igual a: ' + (numero * i));
}
 */
/* 
	12.	Fatorial:
	•	Escreva um programa que calcule o fatorial de um número dado usando um loop for.
*/

/* let numeroUsuario = parseInt(prompt('Digite um número para calcular o seu fatorial: '));
let fatorial = 1;

for(let i = 1; i <= numeroUsuario ; i++) {
	fatorial *= i;
}
console.log('O fatorial de ' + numeroUsuario + ' é igual a ' + fatorial); */


/* 
	13.	Números Primos:
	•	Escreva um programa que imprime todos os números primos de 1 a 100.
*/

//"São considerados números primos os termos numéricos maiores que 1, divisíveis por 1 e por ele mesmo."

//"os números primos são: 2, 3, 7, 11, 13, 17, 19, 23, 29, 31"

for(let i = 1; i <= 100; i++) {
	if(i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
		console.log(i + ' não é um número primo.')
	} else {
		console.log(i + ' é um número primo.')
	}
}