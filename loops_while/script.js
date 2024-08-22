/* 
Exercícios com Loop while
	1.	Contagem de 1 a 10:
	•	Escreva um programa que usa um loop while para imprimir os números de 1 a 10.
*/

let i = 1;
while(i <= 10) {
    console.log(i);
    i++;
}


/* 	2.	Soma de Números:
	•	Escreva um programa que peça ao usuário para inserir números até que a soma
    desses números seja maior que 100. Use um loop while para somar os números. */


let soma = 0;
while(soma <= 100) {
    let num1 = parseInt(prompt('Digite um número:'));
    let num2 = parseInt(prompt('Digite um outro número para realizar uma soma:'));
    soma = num1 + num2;
}
console.log(soma);

/* 
3.	Adivinhação de Número:
	•	Escreva um programa que escolhe um número aleatório entre 1 e 10.
    Peça ao usuário para adivinhar o número e continue pedindo até que ele adivinhe corretamente.
    Use break para sair do loop quando o número for adivinhado corretamente.
*/

let palpite = Number(prompt('Adivinhe um número entre 1 e 10.'));
let randomNum = Math.floor(Math.random() * 10 + 1);

while(randomNum !== palpite) {
    palpite = Number(prompt('Errou! Adivinhe um número entre 1 e 10.'));
    if(randomNum == palpite) {
        alert('Você acertou!');
        break;
    }
}

/* 
	4.	Contagem Regressiva:
	•	Escreva um loop while que faça uma contagem regressiva de 10 até 1 e, ao atingir 1, imprima “Feliz Ano Novo!”.
*/

let cont = 10;

while(cont >= 1) {
    console.log(cont);
    cont--;
}
console.log('Feliz Ano Novo!');

/* 
	5.	Número Ímpar:
	•	Escreva um programa que peça ao usuário para inserir números.
    Se o número inserido for ímpar, o programa deve continuar solicitando novos números.
    Quando um número par for inserido, o loop deve ser interrompido com break.
*/

let insiraNum = parseInt(prompt('Insira um número:'));

while(insiraNum % 2 !== 0) {
    insiraNum = parseInt(prompt('Insira um número:'));
    if(insiraNum % 2 == 0) break;
}