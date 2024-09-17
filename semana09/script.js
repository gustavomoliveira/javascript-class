//Filter

//Fácil
const valoresA = [10, 15, 20, 25, 30];
const valoresB = [1, 5, 2, 7, 8];
const valoresC = [100, 150, 200, 250, 300];

const filtrarValoresPares = (valores) => valores.filter(valor => valor % 2 === 0);

console.log(`Filter - Fácil: ${filtrarValoresPares(valoresA)}`);
console.log(`Filter - Fácil: ${filtrarValoresPares(valoresB)}`);
console.log(`Filter - Fácil: ${filtrarValoresPares(valoresC)}`);

//Intermediário
const programadores = [
    { nome: 'arthur', idade: 30 },
    { nome: 'danilo', idade: 50 },
    { nome: 'larissa', idade: 20 },
    { nome: 'matheus', idade: 40 },
];

const filtrarProgramadoresVelhos = (devs) => devs.filter(dev => dev.idade >= 25);

console.log(filtrarProgramadoresVelhos(programadores));
/* outra maneira de demonstrar o console sem exibir [Object object] */
console.table(filtrarProgramadoresVelhos(programadores));
/* outra maneira de demonstrar o console sem exibir [Object object] */
console.log(JSON.stringify(filtrarProgramadoresVelhos(programadores)));

//Avançado
const disciplinas = [
    'JavaScript básico',
    'O intermediário do JavaScript',
    'Python para doidos',
    'Java para Mateus',
    'Outras disciplinas'
];

const filtrarJavascript = (textos) => 
    textos.filter(texto => texto.includes('JavaScript'));
/* inludes() retorna um boolean. ele considera maiúsculas e minúsculas, deve se realizar um tratamento */

console.log(filtrarJavascript(disciplinas));

//Includes

//Fácil

const posicoes = ['goleiro', 'lateral', 'zagueiro', 'atacante'];

const existePosicao = (posicoes, posicao) => 
    posicoes.includes(posicao);

console.log(existePosicao(posicoes, 'goleiro'));
console.log(existePosicao(posicoes, 'reserva'));
console.log(existePosicao(posicoes, 'gandula'));
console.log(existePosicao(posicoes, 'atacante'));

//Intermediário
//usando o const posicoes acima;
/* filter pega cada elemento do array. includes verifica se, dentro de cada elemento selecionado pelo filter, existe a letra passada no argumento */

const filtrarPorLetra = (posicoes, letra) => 
    posicoes.filter(posicao => posicao.includes(letra));

console.log(filtrarPorLetra(posicoes, 'g'));
console.log(filtrarPorLetra(posicoes, 't'));

//Avançado
//usando a const disciplina do exercício acima;
/* o primeiro elemento que o some encontra que contenha o argumento ele retorna true e para e procurar */

const verificarExistencia = (disciplinas, textoDisc) => 
    disciplinas.some(disciplina => disciplina.includes(textoDisc));

console.log(verificarExistencia(disciplinas, 'JavaScript'));
console.log(verificarExistencia(disciplinas, 'Mateus'));