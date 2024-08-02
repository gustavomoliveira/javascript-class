/* 
Desafio 1: Animais
Crie dois arrays chamados animaisDomesticos e animaisSelvagens, já populados com pelo menos três nomes de animais cada um.
Em seguida, execute as seguintes operações:
Combine as duas listas em uma só e armazene o resultado em todosAnimais.
Converta a lista de todos os animais em uma string separada por vírgulas e armazene o resultado em stringAnimais.
Encontre o índice do "Elefante" na lista e armazene o resultado em indiceElefante.
Adicione "Papagaio" na lista após o segundo elemento utilizando splice e exiba a lista resultante.
Remova "Gato" e "Coelho" da lista utilizando splice e adicione "Hamster" no lugar deles. Exiba a lista resultante.
*/

let animaisDomesticos =["Cachorro", "Gato", "Peixe"];
let animaisSelvagens = ["Leão", "Elefante", "Gorila"];
let todosAnimais = animaisDomesticos.concat(animaisSelvagens);
console.log(todosAnimais);

let stringAnimais = todosAnimais.join(" , ");
console.log(stringAnimais);

let indiceElefante = todosAnimais.indexOf("Elefante");
console.log(indiceElefante);

todosAnimais.splice(2, 0, "Papagaio");//splice adiciona "Papagaio" ao índice 2 sem remover nenhum outro elemento
console.log(todosAnimais);

todosAnimais.splice(1, 2, "Hamster");
console.log(todosAnimais);

/* 
Desafio 2: Comidas
Crie dois arrays chamados comidasSalgadas e comidasDoces, já populados com pelo menos três nomes de comidas cada um.
Em seguida, execute as seguintes operações:
Combine as duas listas em uma só e armazene o resultado em todasComidas.
Ordene a lista de todas as comidas em ordem alfabética e armazene o resultado em comidasOrdenadas.
Encontre o último índice de "Chocolate" na lista e armazene o resultado em ultimoIndiceChocolate.
Converta a lista ordenada em uma string separada por ponto e vírgula e armazene o resultado em stringComidasOrdenadas.
Crie uma nova lista com apenas as três primeiras comidas da lista ordenada e armazene o resultado em primeirasComidas.
*/

let comidasSalgadas = ["Pizza", "Hamburguer", "Calzone"];
let comidasDoces = ["Sorvete", "Chocolate", "Pudim"];
let todasComidas = comidasSalgadas.concat(comidasDoces);
console.log(todasComidas);

let comidasOrdenadas = todasComidas.sort();
console.log(comidasOrdenadas);

let ultimoIndiceChocolate = comidasOrdenadas.lastIndexOf("Chocolate");
console.log(ultimoIndiceChocolate);

let stringComidasOrdenadas = comidasOrdenadas.join(" ; ");
console.log(stringComidasOrdenadas);

let primeirasComidas = comidasOrdenadas.slice(0, 3);
console.log(primeirasComidas);

/* 
Desafio 3: Esportes
Crie dois arrays chamados esportesIndividuais e esportesColetivos, já populados com pelo menos três nomes de esportes cada um.
Em seguida, execute as seguintes operações:
Combine as duas listas em uma só e armazene o resultado em todosEsportes.
Converta a lista de todos os esportes em uma string separada por hífen e armazene o resultado em stringEsportes.
Encontre o índice de "Basquete" na lista e armazene o resultado em indiceBasquete.
Remova "Atletismo" da lista e adicione "Ciclismo" no mesmo lugar utilizando splice. Exiba a lista resultante.
Ordene a lista de todos os esportes em ordem alfabética e armazene o resultado em esportesOrdenados.
*/

let esportesIndividuais = ["Tênis de Mesa", "Boxe", "Tiro ao Alvo"];
let esportesColetivos = ["Basquete", "Ginástica", "Futebol"];
let todosEsportes = esportesIndividuais.concat(esportesColetivos);
console.log(todosEsportes);

let stringEsportes = todosEsportes.join(" - ");
console.log(stringEsportes);

let indiceBasquete = todosEsportes.indexOf("Basquete");
console.log(indiceBasquete);

todosEsportes.splice(5, 1, "Ciclismo");
console.log(todosEsportes);

let esportesOrdenados = todosEsportes.sort();
console.log(esportesOrdenados);

/* 
Desafio 4: Filmes
Crie dois arrays chamados filmesAcao e filmesComedia, já populados com pelo menos três nomes de filmes cada um. Em seguida, execute as seguintes operações:
Combine as duas listas em uma só e armazene o resultado em todosFilmes.
Converta a lista de todos os filmes em uma string separada por barras e armazene o resultado em stringFilmes.
Encontre o índice de "Batman" na lista e armazene o resultado em indiceBatman.
Remova "Homem de Ferro" da lista e adicione "Capitão América" no mesmo lugar utilizando splice. Exiba a lista resultante.
Crie uma nova lista com os três últimos filmes da lista e armazene o resultado em ultimosFilmes.
*/

let filmesAcao = ["John Wick", "Bourne", "Reacher"];
let filmesComedia = ["Superbad", "The Office", "The Anchor"];
let todosFilmes = filmesAcao.concat(filmesComedia);
console.log(todosFilmes);

let stringFilmes = todosFilmes.join(" / ");
console.log(stringFilmes);

let indiceReacher = todosFilmes.indexOf("Reacher");
console.log(indiceReacher);

todosFilmes.splice(1, 1, "Oldboy");
console.log(todosFilmes);

let ultimosFilmes = todosFilmes.splice(3, 6);
console.log(ultimosFilmes);
