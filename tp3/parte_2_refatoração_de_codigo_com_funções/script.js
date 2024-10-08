/* 
Exercício 3 Refatoração de código

Código original:
 O código fornecido faz várias operações matemáticas em dois arrays: numeros1 e numeros2.
 Ele calcula a soma, a diferença e o produto de cada par de números, e então exibe os resultados.
O código contém partes repetitivas que devem ser refatoradas.

const numeros1 = [1, 2, 3, 4];
const numeros2 = [5, 6, 7, 8];

for (let i = 0; i < numeros1.length; i++) {
    let soma = numeros1[i] + numeros2[i];
    console.log("Soma: " + soma);
}

for (let i = 0; i < numeros1.length; i++) {
    let diferenca = numeros1[i] - numeros2[i];
    console.log("Diferença: " + diferenca);
}

for (let i = 0; i < numeros1.length; i++) {
    let produto = numeros1[i] * numeros2[i];
    console.log("Produto: " + produto);
}

Tarefa:
    Refatore o código acima, criando funções para calcular a soma, a diferença e
    o produto de dois números. Use essas funções dentro de um loop para aplicar as
    operações a todos os pares de números dos arrays numeros1 e numeros2.
    Organize o código de forma que as funções sejam reutilizáveis e que
    o código principal (loop) seja limpo e fácil de ler.
 */

const numeros1 = [1, 2, 3, 4];
const numeros2 = [5, 6, 7, 8]; 

//Aproveitando as funções de soma, subtração e multiplicação dos exercícios anteriores:
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return (a * b);
}

function refatora(a, b) {
    for (let i = 0; i < numeros1.length; i++) { //mantive o 'numeros1' já que ele é isométrico ao numeros2, mas poderia ter usado o forEach, por exemplo.
        console.log(`\n
Valores: ${numeros1[i]} e ${numeros2[i]} \n
Soma: ${soma(numeros1[i], numeros2[i])} \n
Diferença: ${subtracao(numeros1[i], numeros2[i])} \n
Produto: ${multiplicacao(numeros1[i], numeros2[i])}`);
    }
}

refatora(numeros1, numeros2);

/* 
Exercício 4 Melhoria da legibilidade e manutenção
Código original:
    O código fornecido manipula uma lista de números, aplicando diferentes operações (soma e multiplicação)
    e exibindo os resultados. O código está misturado e não é claro.
Tarefa:
    Refatore o código acima, criando funções para calcular a soma e o produto de todos os elementos de um array.
    Use essas funções para processar o array lista e exibir os resultados.
    Garanta que o código seja modular e fácil de manter. As funções devem ser
    reutilizáveis para diferentes arrays se necessário.
*/

const lista = [10, 20, 30, 40];

function somar(array) {
    return array.reduce((total, valorAtual) => total + valorAtual, 0); //o 0 garante a soma acumulada, como na declaração de uma variável para acumular valores.
}

console.log(somar(lista));

function multiplicar(array) {
    return array.reduce((total, valorAtual) => total * valorAtual); //se não há a palavra return, podemos elimina-la e também as chaves para um código mais limpo
}

console.log(multiplicar(lista));