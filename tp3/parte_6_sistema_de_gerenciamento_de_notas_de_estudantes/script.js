/* 
Exercício 14 Grupo: Funções para cálculo de médias, situação do
estudante e função recorrente para identificação de recuperação
Requisito:
    Refatore o código para garantir que todas as funções estão bem organizadas e o código está limpo e legível.
Uso de funções de alta ordem:
    Utilize métodos como map para aplicar as funções de cálculo e atualização a todos os estudantes.
*/

/* Crie um array chamado estudantes para armazenar os dados dos alunos.
Cada estudante deve ser representado como um objeto com as propriedades:
nome, notas (um array de números), e situacao (inicialmente vazio). */
let estudantes = [
    { nome: 'João', notas: [6, 7, 5, 8, 10], situacao: '' },
    { nome: 'Marcela', notas: [6, 7, 0, 6, 4], situacao: '' },
    { nome: 'Carlos', notas: [9, 9, 7, 9, 6], situacao: '' },
    { nome: 'Marcos', notas: [4, 2, 5, 0, 6], situacao: '' }
];

/* Crie uma função calcularMedia que receba um array de notas e retorne a média. */
function calcularMedia(estudante) {
    return parseFloat(estudante.notas.reduce((total, nota) => total + (nota / estudante.notas.length), 0).toFixed(2));
}
let medias = estudantes.map(estudante => calcularMedia(estudante));
console.log(medias);

/* Crie uma função atualizarSituacao que, utilizando a média, atualize a situação
do estudante para "Aprovado" ou "Recuperação". */
function atualizarSituacao(estudante) {
    let media = calcularMedia(estudante);
    if(media >= 7) {
        estudante.situacao = 'Aprovado';
    } else {
        estudante.situacao = 'Recuperação';
    }
    return estudante;
}

estudantes = estudantes.map(estudante => atualizarSituacao(estudante));
console.log(estudantes);
  
/* Implemente uma função recorrente verificarRecuperacao que receba a lista de estudantes e,
de forma recorrente, encontre todos que estão em recuperação, devolvendo uma lista separada. */

//ELBERTH COMENTOU EM SALA QUE IRIA REVISAR ESSA QUESTÃO JÁ QUE A RECURSIVIDADE FICOU BASTANTE CONFUSA.
function verificarRecuperacao(estudantes) {
    return estudantes.filter(estudante => estudante.situacao === 'Recuperação');
}

let estudantesRecuperacao = verificarRecuperacao(estudantes);
console.log(estudantesRecuperacao);

/* 
Crie uma função gerarRelatorio que exiba um relatório final com o nome, notas, média e situação de cada estudante.
*/
function gerarRelatorio(estudantes, medias) {
    let imprime = '';
    estudantes.forEach((estudante, i) => {
    imprime += `Estudante: ${estudante.nome}\n`;
        estudante.notas.forEach((nota, i) => {
            imprime += `Nota ${i + 1}: ${nota}\n`
        });
    imprime += `Média Final: ${medias[i]}\n`;
    imprime += `Situação: ${estudante.situacao}\n`;
    });
    console.log(imprime);
}

gerarRelatorio(estudantes, medias);