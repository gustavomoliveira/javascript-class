let paises = [];
paises.push('Brasil', 'Japão', 'Suíça', 'Marrocos', 'Chile');

console.log(paises.length);

paises[2] = 'Grécia';
console.log(paises);

paises.push('México');
console.log(paises);

paises.splice(3, 1);
console.log(paises);

console.log(paises.pop());

/*
5.Adicionando elemento ao array
Continuando o que foi feito, no arquivo script.js siga as etapas abaixo:
Adicione dois novos valores ao final do array de países
Imprima o resultado no console
Obs:
Continue o que foi feito nos exercícios 1, 2 e 3.
Utilize console.log para imprimir o resultado.
Utilize um método para adicionar um novo elemento do array.
*/

console.log(paises.push('Itália', 'França'));