/* 
Exercício 2 Somando os números ímpares
Objetivo: Calcular a soma dos números ímpares de 1 a 15 utilizando um loop for.
Requisitos:
    Crie uma função chamada somarImpares que não recebe nenhum parâmetro.
    Dentro da função, utilize um loop for para iterar de 1 até 15.
    Verifique se o número atual é ímpar.
    Se for ímpar, adicione-o a uma variável acumuladora.
    No final do loop, exiba a soma dos números ímpares.
*/
let soma = 0;

function somarImpares() {
    for(let num = 1; num <=15; num++) {
        if(num % 2 !== 0) {
            soma += num;
        }
    }
    console.log('A soma dos números ímpares é ' + soma);
}

somarImpares();