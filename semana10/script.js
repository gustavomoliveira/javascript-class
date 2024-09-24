//23/09 - Aula 17 - Recursividade, Ex. 14 TP3

const estudantes = [
    { nome: 'Huguinho', notas: [2, 4, 6], situacao: '' },
    { nome: 'Zezinho', notas: [3, 5, 7], situacao: '' },
    { nome: 'Luizinho', notas: [4, 6, 8], situacao: '' }
];

function calcularMedia(asNotas) {
    const soma = asNotas.reduce((total, nota) => total + nota, 0);
    return soma / asNotas.length;
}

function atualizarSituacao(oEstudante) {
    //chamando a função calcularMedia. escopo de bloco com 'media'.
    let media = calcularMedia(oEstudante.notas);
    oEstudante.situacao = media < 4.5 ? 'Recuperação' : 'Aprovação';
}

function gerarRelatorio() {
    console.log('Relatório');
    estudantes.forEach(estudante => {
        //escopo de bloco com 'média'.
        let media = calcularMedia(estudante.notas);
        console.log(
            `[${media.toFixed(2)}] Nome: ${estudante.nome} - (${estudante.situacao})`
        );
    });
}

//função recursiva para pegar cada estudante em recuperação.
function verificarRecuperacao(osEstudantes, index = 0, listaRecuperacao = []) {
    if(index >= osEstudantes.length) {
        return listaRecuperacao;
    }

    if(osEstudantes[index].situacao == 'Recuperação') {
        listaRecuperacao.push(osEstudantes[index]);
    }
    return verificarRecuperacao(osEstudantes, index + 1, listaRecuperacao);
}

//o forEach entende que o que é pretendido é passar a função atualizarSituação para cada estudante.
estudantes.forEach(atualizarSituacao); //forEach feito fora da função.

gerarRelatorio();

//novamente usando forEach para aplicar a recursividade da função verificarRecuperacao a cada estudante. forEach fora da função. 
const emRecuperacao = verificarRecuperacao(estudantes);
emRecuperacao.forEach(estudante => console.log(estudante.nome));

verificarRecuperacao(estudantes);