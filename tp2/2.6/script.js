/* 
Exercício 6 Iterando sobre índices de um array
Objetivo: Utilizar for..in para iterar sobre os índices de um array e exibir os elementos.
Requisitos:
    Crie uma função chamada exibirElementosArray que recebe um array de números como parâmetro.
    Dentro da função, utilize um loop for..in para iterar sobre os índices do array.
    Durante a iteração, exiba o índice atual e o elemento correspondente do array no formato: Índice X: valor.
*/

function exibirElementosArray(array) {
    for(let indice in array) {
        console.log(`Índice ${indice}: ${array[indice]}`);
    }
}

const numeros = [10, 15, 20, 25, 30, 35];
exibirElementosArray(numeros);