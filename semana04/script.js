//transformando sistema Java AppAlunos em JavaScript
let opcao;
let alunos = [];
let notas = [];
let quantidadeAlunos = 2;

do {
    opcao = parseInt(prompt('Menu:\n'+
    '1. Cadastrar nome do aluno:\n'+
    '2. Cadastrar nota do aluno:\n'+
    '3. Exibir lista de alunos e suas notas:\n'+
    '4. Sair\n'+
    'Escolha uma opção: '));

    switch(opcao) {
        case 1:
            for(let i = 0; i < quantidadeAlunos; i++) {
                let nome = prompt('Digite o nome do aluno: ');
                alunos.push(nome);
            }
            break;
        case 2:
            for(let i = 0; i < quantidadeAlunos; i++) {
                let nota = parseInt(prompt(`Digite a nota do ${alunos[i]}:`));
                notas.push(nota);
            }
            break;
        case 3:
            let resultado = 'Lista de alunos e suas notas:\n';
            for(let i = 0; i < quantidadeAlunos; i++) {
                resultado += `${alunos} - ${notas[i]}\n`;
            }
            alert(resultado);
            break;
        case 4:
            alert('4. Sair');
            break;
        default:
            alert(`Opção inválida: ${opcao}`);
    }
} while(opcao !== 4);


