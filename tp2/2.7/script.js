/* 
Exercício 7 Iterando sobre elementos de um array
Objetivo: Implementar um loop for..of para iterar sobre os elementos de um array e exibi-los.
Requisitos:
    Crie uma função chamada exibirElementosArray que não recebe nenhum parâmetro.
    Dentro da função, crie um array chamado frutas com os seguintes elementos: "Maçã", "Banana", "Laranja", "Manga".
    Utilize um loop for..of para iterar sobre os elementos do array frutas.
    Durante a iteração, exiba cada elemento do array.
*/

function exibirElementosArray() {
    const frutas = ["Maçã", "Banana", "Laranja", "Manga"];
    for(let fruta of frutas) {
        console.log(fruta);
    }
}

exibirElementosArray();
