/* 
Exercício 10 Gerando uma tabela de multiplicação
Objetivo: Implementar loops aninhados para gerar e exibir uma tabela de multiplicação.
Requisitos:
    Crie uma função chamada gerarTabelaMultiplicacao que não recebe nenhum parâmetro.
    Dentro da função, utilize dois loops for aninhados:
        O primeiro loop deve iterar de 1 a 10 (representando as linhas da tabela).
        O segundo loop, aninhado dentro do primeiro, deve iterar de 1 a 10 (representando as colunas da tabela).
    Durante a iteração, exiba o resultado da multiplicação de cada par de números no formato: linha x coluna = resultado.
    Separe cada linha de multiplicação por uma quebra de linha para uma melhor visualização.
*/

function gerarTabelaMultiplicacao() {
    for(let i = 1; i <= 10; i++) {
        for(let j = 1; j <= 10; j++) {
            let resultado = i * j;
            console.log(`${i} X ${j} = ${resultado} \n`);
        }
    }
}

gerarTabelaMultiplicacao();
