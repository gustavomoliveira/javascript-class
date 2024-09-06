//fácil - map();

const valores = [1, 2, 3, 4, 5, 6];

const dobro = valores.map((valor) => valor * 2);
console.log(dobro);

//intermediário - map();

const produtos = [
    {nome: 'Camisa', preco: 100},
    {nome: 'Tênis', preco: 150},
    {nome: 'Bermuda', preco: 200}
];

const aplicacaoDezPorcento = produtos.map((p) => {
    return {
        nome: p.nome,
        preco: p.preco * 0.9
    }
});
console.log(aplicacaoDezPorcento);

//avançado - map();

const alunos = ['Gustavo Oliveira', 'Mari Goulart', 'Barto Basset'];

const iniciais = alunos.map((nome) => 
    nome.split(' ').map((palavra) => palavra.charAt(0).toUpperCase()).join('') //divide em 2 arrays, seleciona a primeira letra, joga pra maiúscula e junta e uma palavra;
);
console.log(iniciais);