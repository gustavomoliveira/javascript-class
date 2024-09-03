/* 
Exercício 1 Definição e chamada de funções
Criação de funções de operações básicas:
    Crie três funções em JavaScript que realizem as seguintes operações matemáticas:
        soma(a, b): que retorna a soma de a e b.
        subtracao(a, b): que retorna a subtração de a por b.
        multiplicacao(a, b): que retorna a multiplicação de a por b.
    Certifique-se de que cada função seja definida corretamente e possa ser chamada com dois parâmetros numéricos.
Chamada e exibição dos resultados:
    No arquivo JavaScript, crie três chamadas de funções, uma para cada operação matemática criada acima, e passe os valores 5 e 3 como parâmetros.
    Exiba os resultados dessas operações.
*/

function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return (a * b);
}

let aSoma = soma(5, 3);
console.log(`O resultado da soma entre os números é ${aSoma}.`);

let aSubtracao = subtracao(5, 3);
console.log(`O resultado da subtração entre os números é ${aSubtracao}.`);

let aMultiplicacao = multiplicacao(5, 3);
console.log(`O resultado da multiplicação entre os números é ${aMultiplicacao}.`);

/* 
Exercício 2 Funções que retornam valores
Criação de uma função de divisão:
    Crie uma função chamada divisao(a, b) que retorna o resultado da divisão de a por b.
    Se b for igual a 0, a função deve retornar a string "Divisão por zero não é permitida".
Integração das funções:
    Crie uma função chamada calcularTudo(a, b) que chama todas as funções de operações
    matemáticas criadas (soma, subtração, multiplicação, divisão) e retorna um objeto com os resultados dessas operações.
    Exiba o resultado dessa função.
*/

function divisao(a, b) {
    if(b === 0) {
        return 'Divisão por zero não é permitida';
    } else {
        return parseFloat(a / b);
    }
}

let aDivisao = divisao(5, 3);
console.log(aDivisao);

function calcularTudo(a, b) {
    let calculoGeral = {
        soma: soma(a, b),
        subtracao: subtracao(a, b),
        multiplicacao: multiplicacao(a, b),
        divisao: divisao(a, b)
    };
    console.log(calculoGeral)
    return calculoGeral;
}

let oCalculoGeral = calcularTudo(15, 3);
console.log(JSON.stringify(oCalculoGeral));

// ou é possível fazer uma solução direta como a abaixo:
/* console.log(`{ soma: ${oCalculoGeral.soma},
\n subtração: ${oCalculoGeral.subtracao},
\n multiplicação: ${oCalculoGeral.multiplicacao},
\n divisão: ${oCalculoGeral.divisao}}`); */