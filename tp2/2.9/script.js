/* 
Exercício 9 Somando valores de um array
Objetivo: Implementar um loop for..of para somar os valores de um array de números.
Requisitos:
    Crie uma função chamada somarArray que recebe um array de números como parâmetro.
    Inicialize uma variável acumuladora para armazenar a soma dos valores.
    Utilize um loop for..of para iterar sobre os elementos do array.
    Durante a iteração, some cada elemento à variável acumuladora.
    No final do loop, exiba a soma total.
*/

function somarArray(arrayNums) {
    let acumulador = 0;
    
    for(let elemento of arrayNums) {
        acumulador += elemento;
    }
    console.log('A soma total dos números do array é ' + acumulador);
}

const numeros = [2, 4, 6, 8, 10, 12];
somarArray(numeros);