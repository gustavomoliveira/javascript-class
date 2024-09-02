/* 
Exercício 11 Criando um padrão de asteriscos
Objetivo: Usar loops aninhados para gerar um padrão de asteriscos (*) em forma de triângulo.
Requisitos:
    Crie uma função chamada gerarPadraoAsteriscos que não recebe nenhum parâmetro.
    Utilize dois loops for aninhados:
        O primeiro loop deve iterar de 1 a 5 (representando o número de linhas).
        O segundo loop, aninhado dentro do primeiro, deve iterar de 1 até o número atual da iteração do primeiro loop.
    Durante a iteração, concatene asteriscos (*) em uma string para criar cada linha do triângulo.
    Após o segundo loop, exiba a linha de asteriscos.
    A saída no console deve formar um triângulo de asteriscos.
*/

function gerarPadraoAsteriscos() {
    for(let i = 1; i <= 5; i++) {
        let asterisco = ' \n';
        for(let j = 1; j <= i; j++) {
            asterisco += '*';
        }
        console.log(asterisco);
    }
}

gerarPadraoAsteriscos();