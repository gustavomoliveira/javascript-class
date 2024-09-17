/* 
1.	Fatorial de um número:
Escreva uma função recursiva que calcule o fatorial de um número.
O fatorial de n (denotado n!) é o produto de todos os números inteiros de 1 até n.
*/

function fatorial(n) {
    if(n === 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}

console.log(fatorial(5));

/* 
2.	Soma dos números naturais:
Crie uma função recursiva que receba um número n e retorne a soma de todos os números de 1 até n.
*/

function somaNaturais(n) {
    if(n === 1) {
        return 1;
    }
    return n + somaNaturais(n - 1);
}

console.log(somaNaturais(5)); // 15 (1 + 2 + 3 + 4 + 5)

/* 
3.	Sequência de Fibonacci:
Escreva uma função recursiva que retorne o n-ésimo número da sequência de Fibonacci.
A sequência começa com 0, 1 e os próximos números são a soma dos dois anteriores.
*/

function fibonacci(n) {
    if(n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8 (Sequência: 0, 1, 1, 2, 3, 5, 8)
