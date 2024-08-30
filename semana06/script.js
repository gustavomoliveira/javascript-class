//for..in #4

function exibirCarro() {
    const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020
};
    console.log(carro.marca);
    
    for(let propriedade in carro) {
        console.log(carro[propriedade]); //pega todas as propriedades tratando o objeto carro como um vetor;
    }                                    //nome da variável não importa;
}

exibirCarro();

//for..in #5

//for..in retorna o índice;

function contarPropriedade(obj) {
    let contador = 0;
    //for in percorrendo o obj
        //incrementar a variável contador
    
    // depois do loop, imprimir o contador
}

const pessoa = {
    nome: 'Ana',
    idade: 28,
    profissao: 'Engenheira'
};

contarPropriedade();

//for..in #6

function exibirElementosArray(numeros) {
    // Implemente o loop for..in aqui
}
const arrayNumeros = [10, 20, 30, 40, 50];

exibirElementosArray(arrayNumeros); 
// Chame a função para exibir os índices e valores do array

//for..of #7

//for..of retorna os valores;

function exibirElementosArray() {
    const frutas = ["Maçã", "Banana", "Laranja", "Manga"];
   
    for(let fruta of frutas) {
        alert(fruta);
    }
}
exibirElementosArray(); 

//loops aninhados #10

function gerarTabelaMultiplicacao() {
    for(let i = 1; i <= 3; i++) {
        alert(i);
        for(let j = 1; j <= 3; i++) {
            alert(j); //pega o valor de i e de j;
        }
    }
}

gerarTabelaMultiplicacao(); 








