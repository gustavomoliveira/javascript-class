//alguns métodos de array

let timesPaulista = ["Corinthians", "Palmeiras", "Santos", "São Paulo"];
let timesCariocas = ["Flamengo", "Fluminense", "Botafogo", "Vasco"];

console.log(timesPaulista);
console.log(timesCariocas);

//concat: soma dois ou mais arrays sem modifica-los
let timesSudeste = timesPaulista.concat(timesCariocas);
console.log(timesSudeste);
console.log(timesSudeste[7]);//trás o ultimo elemento do array

//join: transforma os elementos de um array em uma string adicionando o separador escolhido. você influencia no texto.
let joinTimes = timesSudeste.join(" - ");
console.log(joinTimes);

//toString: transforma os elementos de um array em uma string, sem influência no texto.
//é como se fosse uma grande frase, sem separação de elementos. um grande texto.
let toStringTimes = timesSudeste.toString();
console.log(toStringTimes);
console.log(toStringTimes[1]);

//indexOf: pega o primeiro valor passado
console.log(timesCariocas.indexOf("Vasco"));//3
console.log(timesPaulista.indexOf("Vasco"));//-1 (não existe para um array)
console.log(timesSudeste.indexOf("Vasco"));//7

//lastIndexOf: mesmo que o indexOf, mas pega o último valor passado

//slice: os primeiro parâmetro é inclusive e o segundo é exclusive. se utilizar valores negativos a direção do array é invertido
console.log(timesPaulista.slice(1, 3)); // "Palmeiras", "Santos"

//sort: rearranja o array para a ordem alfabética ou numérica, em ascendência
console.log(timesPaulista.sort());//imprime o array ascendente
console.log(timesPaulista.sort().reverse());//imprime o array descendente
console.log(timesSudeste.sort());
console.log(timesSudeste.sort().reverse());
console.log(timesSudeste.slice(0, 4).sort().reverse());//acumular métodos


