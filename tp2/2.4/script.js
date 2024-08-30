/* 
Exercício 4 Percorrendo propriedades de um objeto
Objetivo: Implementar um loop for..in para percorrer e exibir as propriedades e valores de um objeto que representa um carro.
Requisitos:
    Crie uma função chamada exibirCarro que não recebe nenhum parâmetro.
    Dentro da função, crie um objeto chamado carro com as seguintes propriedades:
        marca: "Toyota"
        modelo: "Corolla"
        ano: 2020
    Utilize um loop for..in para iterar sobre as propriedades do objeto carro.
    Durante a iteração, exiba cada propriedade e seu respectivo valor no formato: propriedade: valor.
*/

function exibirCarro() {
    const carro = {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2020
    };

    for(let propriedade in carro) {
        alert(`${propriedade}: ${carro[propriedade]}`);
    }
}

exibirCarro();