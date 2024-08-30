/* 
Exercício 5 Contando propriedades de um objeto
Objetivo: Contar quantas propriedades um objeto possui utilizando um loop for..in.
Requisitos:
    Crie uma função chamada contarPropriedades que recebe um objeto como parâmetro.
    Inicialize uma variável acumuladora para contar as propriedades.
    Utilize um loop for..in para iterar sobre as propriedades do objeto.
    Para cada propriedade, incremente a variável acumuladora.
    No final do loop, exiba o número total de propriedades do objeto.
*/

function contarPropriedades(obj) {
    let acumulador = 0;
    for(let propriedade in obj) {
        acumulador++;
    }
    console.log('O número de propriedades contidas no objeto é de ' + acumulador);
}

const pessoa = {
    nome: 'Gustavo',
    profissão: 'Dev',
    cidade: 'Genebra',
    filhos: false,
    cachorro: true
};

contarPropriedades(pessoa);