/* 
Exercício 8 Contando caracteres em uma String
Objetivo: Utilizar for..of para contar o número total de caracteres em uma string.
Requisitos:
    Crie uma função chamada contarCaracteres que recebe uma string como parâmetro.
    Inicialize uma variável acumuladora para contar os caracteres.
    Utilize um loop for..of para iterar sobre cada caractere da string.
    Para cada caractere, incremente a variável acumuladora.
    No final do loop, exiba o número total de caracteres da string.
*/

function contarCaracteres(string) {
    let acumulador = 0;
    for(let caractere of string) {
        acumulador++;
    }
    console.log('O número total de caracteres é ' + acumulador);
}

const mensagem = 'Testando a contagem de caracteres.'
contarCaracteres(mensagem);


