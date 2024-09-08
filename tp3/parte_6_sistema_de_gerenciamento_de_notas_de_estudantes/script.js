/* 
Exercício 14 Grupo: Funções para cálculo de médias, situação do
estudante e função recorrente para identificação de recuperação
Requisito:
    Crie um array chamado estudantes para armazenar os dados dos alunos.
    Cada estudante deve ser representado como um objeto com as propriedades:
    nome, notas (um array de números), e situacao (inicialmente vazio).
    Crie uma função calcularMedia que receba um array de notas e retorne a média.
    Crie uma função atualizarSituacao que, utilizando a média, atualize a situação
    do estudante para "Aprovado" ou "Recuperação".
    Implemente uma função recorrente verificarRecuperacao que receba a lista de estudantes e,
    de forma recorrente, encontre todos que estão em recuperação, devolvendo uma lista separada.
    Crie uma função gerarRelatorio que exiba um relatório final com o nome, notas, média e situação de cada estudante.
    Refatore o código para garantir que todas as funções estão bem organizadas e o código está limpo e legível.
Uso de funções de alta ordem:
    Utilize métodos como map para aplicar as funções de cálculo e atualização a todos os estudantes.
*/

let estudantes = [{nome: 'João', notas: [6, 7, 5, 8, 10], situacao: ''},
{nome: 'Marcela', notas: [8, 7, 9, 6, 4], situacao: ''},
{nome: 'Carlos', notas: [9, 9, 7, 9, 6], situacao: ''}];

function calcularMedia(estudante) {
    return estudante.notas.reduce((total, nota) => total + (nota / estudante.notas.length), 0);
}

let medias = [];

estudantes.forEach(estudantes => {
    let media = calcularMedia(estudantes);
    medias.push(media);
    console.log(`A média de ${estudantes.nome} é ${media}.`);
});


function atualizarSituacao(media) {
    if(media >= 7) return 'Aprovado';
    if(media >= 5 && media < 7) return 'Recuperação'
}

let situacao = atualizarSituacao(medias);
console.log(situacao);

function verificarRecuperacao(estudantes) {
    estudantes.map((nome) => estudantes.nome );
}