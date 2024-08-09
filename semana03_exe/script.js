/* 
Exercício 1: Criação de Arrays
Crie um array chamado frutas que contenha as seguintes frutas: “Maçã”, “Banana”, “Laranja”, “Manga”, “Abacaxi”.
Em seguida, exiba o conteúdo desse array no console.
*/

let frutas = ['Maçã', 'Banana', 'Laranja', 'Manga', 'Abacaxi'];
console.log(frutas);

/* 
Exercício 2: Acesso aos Elementos do Array
Usando o array frutas do exercício anterior, exiba no console o segundo e o quarto elementos do array.
*/

console.log(frutas[1]);
console.log(frutas[3]);

/* 
Exercício 3: Adicionando e Removendo Elementos
	1.	Adicione a fruta “Morango” no final do array frutas.
	2.	Adicione a fruta “Uva” no início do array.
	3.	Remova o último elemento do array.
	4.	Remova o primeiro elemento do array.
	5.	Exiba o array final no console.
*/

frutas.push('Morango');
frutas.unshift('Uva');
console.log(frutas);
frutas.pop();
frutas.shift();
console.log(frutas);

/* 
Exercício 4: Tamanho do Array
Crie um array chamado numeros com os números de 1 a 10. Exiba no console o tamanho desse array.
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros.length);

/* 
Exercício 5: Looping sobre Arrays
Usando o array numeros do exercício anterior, utilize um loop for para exibir cada número no console.
*/

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

/* 
Exercício 6: Métodos de Arrays
	1.	Crie um array chamado cidades com as cidades “São Paulo”, “Rio de Janeiro”, “Curitiba”, “Belo Horizonte”, “Porto Alegre”.
	2.	Ordene o array cidades em ordem alfabética e exiba o resultado no console.
	3.	Inverta a ordem dos elementos do array cidades e exiba o resultado no console.
	4.	Use o método slice para criar um novo array com as três primeiras cidades e exiba-o no console.
*/

let cidades = ['São Paulo', 'Rio de Janeiro', 'Curitiba', 'Belo Horizonte', 'Porto Alegre'];
console.log(cidades.sort());
console.log(cidades.reverse());
console.log(cidades.slice(0, 3));

/* 
Exercício 7: Encontrando Elementos
	1.	Crie um array chamado numeros com os números [10, 20, 30, 40, 50, 60, 70, 80, 90, 100].
	2.	Use o método indexOf para encontrar a posição do número 60 no array.
	3.	Verifique se o número 25 está presente no array usando o método includes.
*/

let outrosNumeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(outrosNumeros.indexOf(60));
console.log(outrosNumeros.includes(25));

/* 
Exercício 8: Filtrando Elementos
	1.	Usando o array numeros do exercício anterior, crie um novo array chamado numerosPares que contenha apenas os números pares.
	2.	Exiba o array numerosPares no console.
*/

let numerosPares = outrosNumeros.filter(isPar);
function isPar(elemento) {
    return elemento % 2 === 0;
}
console.log(numerosPares);

/* 
Exercício 9: Map e Reduce
	1.	Usando o array numeros, crie um novo array chamado dobro que contenha todos os números multiplicados por 2.
	2.	Calcule a soma de todos os números no array numeros usando o método reduce.
*/

let dobro = outrosNumeros.map(dobrando)
function dobrando(elemento) {
    return elemento * 2;
}
console.log(dobro);

function somaArray(num1, num2) {
    return num1 + num2;
}
console.log(outrosNumeros.reduce(somaArray));

/* 
Exercício 10: Removendo Duplicatas
Crie um array chamado valores com os valores [1, 2, 2, 3, 4, 4, 5, 6, 6, 7].
Escreva um código que remova os valores duplicados do array e exiba o array resultante no console.
*/

let valores = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

let valoresUnicos = [...new Set(valores)]; //Set() constructor que remove duplicatas;
console.log(valoresUnicos);
