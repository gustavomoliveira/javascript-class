/* 
Exercício 1 Contando números pares
Objetivo: Implementar um loop for para contar e exibir os números pares de 1 a 20.
Requisitos:
    Crie uma função chamada contarPares que não recebe nenhum parâmetro.
    Dentro da função, utilize um loop for para iterar de 1 até 20.
    Verifique se o número atual é par (divisível por 2).
    Se for par, exiba o número.
Dica: Utilize o operador de módulo % para verificar se um número é par.
*/

function contarPares() {
    for(let i = 1; i <= 20; i++) {
        if(i % 2 === 0) {
            console.log('O número ' + i + ' é par.');
        }
    }
}
contarPares();