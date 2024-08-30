/* 
Exercício 3 Multiplicando elementos de um array
Objetivo: Multiplicar cada elemento de um array por 3 e armazenar os resultados em um novo array.
Requisitos:
    Crie uma função chamada multiplicarArray que recebe um array de números como parâmetro.
    Dentro da função, inicialize um novo array vazio para armazenar os resultados.
    Utilize um loop for para iterar sobre cada elemento do array passado como parâmetro.
    Multiplique cada elemento por 3 e adicione o resultado ao novo array.
    Retorne o novo array contendo os resultados.
Dica: Utilize o método push para adicionar elementos ao novo array.
*/

function multiplicarArray(array) {
    let resultado = [];

    for(let ele = 0; ele < array.length; ele++) {
        resultado.push(array[ele] * 3);
    }
    return resultado;
}

resultado = multiplicarArray([1, 2, 3, 4, 5, 6, 7]);
console.log(resultado);

