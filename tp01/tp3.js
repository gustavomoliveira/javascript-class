let paises = [];
paises.push('Brasil', 'Japão', 'Suíça', 'Marrocos', 'Chile');

console.log(paises.length);

paises.splice(2, 1, 'Grécia');
console.log(paises);

/*
3. Alterando o array de países
Continuando o que foi feito, no arquivo script.js siga as etapas abaixo:
Adicione um país novo.
Apague a 3ª posição.
Imprima o resultado no console.
Obs:
Continue o que foi feito nos exercícios 1 e 2.
Utilize console.log para imprimir o resultado.
Siga o exemplo (contagem do computador) do exercício 2, para adicionar a posição 5 e apagar a posição 3.
*/

paises.push('México');
console.log(paises);

paises.splice(3, 1);
console.log(paises);
