let paises = [];
paises.push('Brasil', 'Japão', 'Suíça', 'Marrocos', 'Chile');

console.log(paises.length);

paises.splice(2, 1, 'Grécia');
console.log(paises);

paises.push('México');
console.log(paises);

paises.splice(3, 1);
console.log(paises);

/*
4. Removendo elemento de array
Continuando o que foi feito, no arquivo script.js siga as etapas abaixo:
Remova o último elemento do array de países.
Imprima o resultado no console.
Obs:
Continue o que foi feito nos exercícios 1, 2 e 3.
Utilize console.log para imprimir o resultado.
Utilize um método para remover o último elemento do array.
*/

console.log(paises.pop());