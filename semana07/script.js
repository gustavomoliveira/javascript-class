//MAP()

//fácil - map();

const valores = [1, 2, 3, 4, 5, 6];

const dobro = valores.map(valor => valor * 2);
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
    nome.split(' ').map(palavra => palavra.charAt(0).toUpperCase()).join('') //divide em 2 arrays, seleciona a primeira letra, joga pra maiúscula e junta e uma palavra;
);
console.log(iniciais);

/* Converter Strings para Maiúsculas
Dado um array de strings, use o map pata converter todas as palavras para letras maiúsculas.
Array de exemplo: ['apple', 'banana', 'cherry']; */

const frutas = ['apple', 'banana', 'cherry'];
const stringCaps = frutas.map(fruta => fruta.toUpperCase());
console.log(stringCaps);

/* 
Extrair Nomes de Objetos
Dado um array de objetos com propriedades nome e idade, utilize o map para criar um array
*/

const pessoas = [{ nome: 'João', idade: 25 }, { nome: 'Maria', idade: 30 }];
const nomePessoas = pessoas.map(pessoa => pessoa.nome);
console.log(nomePessoas);

/* 
Adicionar Impostos aos Preços
Dado um array de preços, use o map para adicinar 10% de imposto a cada preço.
*/

const precos = [100, 200, 300];
const impostos = precos.map(preco => (preco * 1.1).toFixed(2));
console.log(impostos);

/* 
Converter para Fahrenheit
Dado um array de temperaturas em Celsius, use o map para realizar a conversão.
*/

const cTemperatures = [0, 20, 30];
const fTemperatures = cTemperatures.map(celsius => (celsius * 9) / 5 + 32);
console.log(fTemperatures);

/* 
Formatar Datas
Dado um array no formato 'yyyy-mm-dd', use o map para formatar as datas no formato brasileiro.
*/

const datasIso = ['2024-09-06', '2023-05-12'];
const datasBr = datasIso.map(data => data.split('-').reverse().join('/'));
console.log(datasBr);

//outra maneira

const datasIso2 = ['2024-09-06', '2023-05-12'];
const datasBr2 = datasIso2.map(data => {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
});
console.log(datasBr);

/* 
Calcular Raiz Quadrada
Dado um array de números, use o map para crir um novo array com a raiz quadrada de cada número.
*/

const numeros = [4, 9, 16, 25];
const raiz = numeros.map(numero => Math.sqrt(numero));
console.log(raiz);

/*
Adicionar Prefixo a Nomes
Dado um array de nomes, use o map para adicionar o prefixo 'Sr(a).' a cada nome.
*/

const nomes = ['Carlos', 'Ana', 'Pedro'];
const nomesComPrefixo = nomes.map(nome => `Sr(a). ${nome}`);
console.log(nomesComPrefixo);

/* 
Obter a Primeira Letra de Cada Palavra
Dado um array de palavras, utilize o map para criar um array com a primeira letra de cada palavra.
*/

const animais = ['cachorro', 'gato', 'elefante'];
const primeiraLetra = animais.map(nome => nome.charAt(0).toUpperCase());
console.log(primeiraLetra);

/* 
Converter Valores Booleanos para String
Dado um array de valores booleanos, use o map para converter esses valores para as strings
*/

const booleano = [true, false, true];
const string = booleano.map(valor => valor ? 'Sim' : 'Não');
console.log(string);

//REDUCE()

//FÁCIL
const numerosVariados = [1, 2, 3, 4, 5];
const somaNumeros = numerosVariados.reduce((acumulador, numero) => acumulador + numero, 0);
console.log('O total da soma é ' + somaNumeros);

//INTERMEDIÁRIO
const itensVendidos = [
    { nome: 'Camisa', preco: 100 },
    { nome: 'Tenis', preco: 150 },
    { nome: 'Bermuda', preco: 200 }
];

const itensComprados = [
    { nome: 'Bola', preco: 50 },
    { nome: 'Meia', preco: 100 },
    { nome: 'Chuteira', preco: 150 }
];

const somaFinal = (vetorItens) => vetorItens.reduce((acumulador, item) => acumulador + item.preco, 0); //o vetor é passado como parâmetro para facilitar a inserção de dados e reduzir o código;
console.log('A soma final de itens vendidos é ' + somaFinal(itensVendidos));
console.log('A soma final de itens comprados é ' + somaFinal(itensComprados));

//AVANÇADO
