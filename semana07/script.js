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
const frases = [
    'meu nome é gustavo',
    'gustavo é um cara estranho',
    'ele não é estranho, estranho é o nome',
    'meu melhor amigo é o barto'
];

const contadorDePalavras = (vetorFrases) => /* vetor como parâmetro da arrow function */
    vetorFrases.reduce((contador, frase) => { /* reduce aplicado ao vetor pegando cada elemento do array frases */
        const palavras = frase.split(' '); /* split aplicado a cada elemento de frases e passado para uma const palavras */
        palavras.forEach(palavra => { /* loop dentro do novo array de palavras geradas do array frases */
            contador[palavra] = contador[palavra] ? contador[palavra] + 1 : 1; /* ternário que verifica se cada uma das palavras ja existe. se sim, +1 */
        });
        return contador;
    }, {});

console.log(contadorDePalavras(frases));

/* 
Somar valores de um array.
Dado um array de números, utilize o reduce para calcular a soma de todos os elementos.
*/

const numerosExemplo = [1, 2, 3, 4, 5];

const somaNumerosExemplo = numerosExemplo.reduce((contador, numero) => contador + numero, 0);
console.log(somaNumerosExemplo);

/* 
Concatenar Strings.
Dado um array de strings, use o reduce para concatenar todas as palavras em uma única string.
*/

const palavras = ['Hello', 'world', '!'];

const frase = palavras.reduce((contador, palavra) => contador + ' ' + palavra);
console.log(frase);

/* 
Calcular a Média dos Valores.
Dado um array de números, utilize o reduce para calcular a média dos valores.
*/

const arrayDeNumeros = [10, 20, 30, 40, 50];
/* lembrar que a => sem chaves ja presume o return, ja que a função não possui corpo */
const mediaDeNumeros = (array) => /* passa o array como argumento */
    array.reduce((contador, numero) => contador + numero, 0) / array.length; /* realiza a soma e, em seguida, a divisão pelo length do array */
console.log(mediaDeNumeros(arrayDeNumeros));

/* 
Encontrar o Maior Número.
Dado um array de números, utilize o reduce para encontrar o maior número do array.
*/

const variosNumeros = [10, 20, 5, 40];

const maiorNumero = variosNumeros.reduce((contador, numero) => {
    if(numero > contador) {
        contador = numero;
    }
    return contador;
}, 0);
console.log(maiorNumero);

/* usando Math.max() */
const meuMaior = variosNumeros.reduce((contador, numero) => Math.max(contador, numero));
console.log(meuMaior);

/* 
Contar Ocorrências de Valores.
Dado um array de letras, use o reduce para contar quantas vezes cada letra aparece no array.
*/

const letras = ['a', 'b', 'a', 'c', 'b', 'a'];

const ocorrenciaLetras = (array) => 
    array.reduce((contador, letra) => {
      contador[letra] = contador[letra] ? contador[letra] + 1 : 1;
      return contador;
    }, {a: 0, b: 0, c: 0});

console.log(ocorrenciaLetras(letras));

/* 
Calcular o Fatorial de um Número.
Utilize o reduce para calcular o fatorial de um número, dado um array de números consecutivos.
*/

const numerosConsecutivos = [1, 2, 3, 4, 5];
/* inicializa o contador no 1 para calculo do fatorial */
const fatorial = numerosConsecutivos.reduce((contador, numero) => contador * numero, 1);
console.log(fatorial);

/* 
Somar valores de um Array de Objetos.
Dado um array de objetos com propriedades valor, use o reduce para calcular a soma de todos os valores.
*/

const objValores = [{ valor: 10 }, { valor: 20 }, { valor: 30 }];

const objSoma = objValores.reduce((contador, valor) => contador + valor.valor, 0);
console.log(objSoma);

/* 
Achatar um Array de Arrays.
Dado um array de arrays, utilize o reduce para achatar todos os elementos em um único array.
*/

const arrayDeArrays = [[1, 2], [3, 4], [5]];
/* concat para combinar os arrays */
const arraysAchatados = arrayDeArrays.reduce((contador, array) => contador.concat(array), []);
console.log(arraysAchatados);

/* 
Produtos de um Array.
Dado um array de números, use o reduce para calcular o produto de todos os elementos.
*/
const elementos = [2, 3, 4];

const produto = elementos.reduce((contador, elemento) => contador * elemento, 1);
console.log(produto);

/* 
Contar Palavras em uma Frase.
Dado uma string, use o reduce para contar quantas palavras ela possui.
*/
const umaFrase = 'Olá, bem-vindo ao mundo do JavaScript';
/* split retorn um array. uso apenas do contador */
const contPalavras = umaFrase.split(' ').reduce(contador => contador + 1, 0);
console.log(contPalavras);

/* resolução simples sem o uso de reduce */
console.log(umaFrase.split(' ').length);