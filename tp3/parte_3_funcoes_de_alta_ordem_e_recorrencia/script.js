/* 
Exercício 5 Utilizando funções de alta ordem (map)
Requisito:
    Crie um array de números chamado numeros contendo alguns valores inteiros.
    Em seguida, crie uma função de alta ordem que utiliza o método map
    para dobrar o valor de cada número do array.
*/

let numeros = [4, 5, 6, 7, 8, 10];

function dobrarValores(array) {
    return array.map(num => num * 2);
}

console.log(dobrarValores(numeros));

/* 
Exercício 6 Recorrência de funções
Requisito:
    Desenvolva uma função recorrente chamada fatorial que calcula o fatorial de um número.
    Lembre-se que o fatorial de um número n é o produto de todos os números inteiros positivos até n.
*/

function fatorial(num) {
    if(num === 0 || num === 1) {
        return 1;
    }
    return num * fatorial(num - 1);
}

let numero = 5;
console.log(`O fatorial de ${numero} é ${fatorial(numero)}`);

/* 
Exercício 7 Combinação de funções de alta ordem com recorrência
Requisito:
    Crie um array de números e utilize uma função de alta ordem (como map) para aplicar a
    função recorrente fatorial a cada elemento do array.
*/

const valores = [2, 3, 4, 5, 6];

let fatorialArray = valores.map(num => fatorial(num)); //utilizando a função fatorial do exercício anterior.

console.log(`Os fatoriais dos elementos no array são: ${fatorialArray}.`);