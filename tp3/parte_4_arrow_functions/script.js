/* 
Exercício 8 Criando arrow functions básicas
Requisito:
    Implemente uma arrow function chamada saudacao que receba um nome como parâmetro e retorne uma mensagem de saudação.
*/

const saudacao = (name) => `Olá, ${name}! Bem-vindo ao curso de JavaScript.`;

console.log(saudacao('Gustavo'));

/* 
Exercício 9 Uso de arrow functions com arrays
Requisito:
    Crie um array de números e use uma arrow function com o método map para calcular o quadrado de cada número do array.
*/

const numeros = [2, 4, 6, 8];

const quadrado = (array) => array.map(num => num ** 2);

console.log(`O quadrado dos elementos do array é ${quadrado(numeros)}`);

/* 
Exercício 10 Arrow functions com parâmetros múltiplos
Requisito:
    Desenvolva uma arrow function chamada soma que receba dois números como parâmetros e retorne a soma deles.
*/

const soma = (a, b) => a + b;

console.log(`A soma entre 5 e 10 é ${soma(5, 10)}`);

/* 
Exercício 11 Comparando arrow functions com funções tradicionais
Requisito:
    Escreva uma função tradicional e uma arrow function para calcular
    a área de um retângulo, comparando a legibilidade e concisão de ambas.
*/

function areaRetanguloTradicional(b, a) {
    return b * a;
}

console.log(`Área usando função tradicional ${areaRetanguloTradicional(5, 8)}`);

const areaRetanguloArrow = (b, a) => b * a;

console.log(`Área usando função arrow ${areaRetanguloArrow(5, 8)}`);