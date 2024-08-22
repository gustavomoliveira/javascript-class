/* 
Exercícios com Loop do...while
	6.	Menu Interativo:
	•	Crie um menu interativo que se repete até que o usuário escolha sair.
    O menu deve apresentar opções como “1. Opção 1”, “2. Opção 2”, e “3. Sair”.
    Use um loop do...while para manter o menu em execução até que a opção “Sair” seja escolhida.
*/

let opcao;

do {
    alert('Bem vindo ao menu de opções:\n'+
        '1. Opção 1\n'+
        '2. Opção 2\n'+
        '3. Sair\n');

    opcao = parseInt(prompt('Escolha uma opção do menu:'));

    switch(opcao) {
        case 1:
            alert('Você escolheu a Opção 1.');
            break;
        case 2:
             alert('Você escolheu a Opção 2.');
            break;
        case 3:
            alert('Saindo...');
            break;
        default:
            alert('Opção inválida.');
    }
} while(opcao !== 3);

/* 
	7.	Validação de Entrada:
	•	Peça ao usuário para inserir um número entre 1 e 5.
    Se o número estiver fora desse intervalo, o loop deve continuar
    pedindo até que o usuário forneça um número válido.
*/

let numUsuario;

do {
    numUsuario = parseInt(prompt('Digite um número entre 1 e 5'));
} while(numUsuario < 1 || numUsuario > 5 );

/* 
	8.	Número Par ou Ímpar:
	•	Escreva um programa que peça ao usuário para inserir um número.
    O loop deve continuar até que o usuário insira um número par,
    e o programa deve exibir uma mensagem apropriada quando isso ocorrer.
*/

let numero;

do {
    numero = parseInt(prompt('Digite um número qualquer: '));
    if(numero % 2 == 0) {
        alert('Você digitou o número ' + numero + '. Obrigado!');
    }
} while(numero % 2 !== 0);

/* 
	9.	Senha Correta:
	•	Crie um programa que peça ao usuário para inserir uma senha.
    Continue pedindo a senha até que o usuário insira a senha correta,
    e então exiba uma mensagem de sucesso.
*/

let senha;
let senhaCorreta = 'barto';

do {
    senha = prompt('Digite a senha para acessar!')
    if(senha !== senhaCorreta) {
        alert('Senha incorreta. Tente novamente.');
    }
} while(senha !== senhaCorreta);

alert('Senha correta! Acesso permitido.');

/* 
	10.	Repetir Frase:
	•	Peça ao usuário para inserir uma frase. Repita a frase para o usuário até que ele digite “sair”.
*/

let frase = prompt('Escreva uma frase: ').toString();
let continua;

do {
    alert(frase);
    continua = prompt('Deseja sair? Se sim, digite "sair". Se não, digite "n".');
} while(continua.toLowerCase() !== 'sair');

alert('Você saiu!');