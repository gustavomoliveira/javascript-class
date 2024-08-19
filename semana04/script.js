//transformando sistema Java AppAlunos em JavaScript
let opcao;
let alunos = ['Gustavo', 'Mari'];
let notas = [8, 9];
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
            alert('1. Cadastrar nome do aluno');
            break;
        case 2:
            alert('2. Cadastrar nota do aluno');
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


