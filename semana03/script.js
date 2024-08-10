let planetas = [];
planetas.push('Mercurio', 'Venus', 'Terra', 'Marte', 'Jupiter');

//console.log('Tamanho do array: ' + planetas.length);

planetas[5] = 'Zebes';

//console.log('Tamanho do array: ' + planetas.length);

planetas.push('Urano');

planetas.splice(2, 1);

planetas.push('Netuno');

planetas.push('Plutão');

//console.log('Planetas: ' + planetas + '!');

planetas.pop();

//console.log('Planetas: ' + planetas + '!');

//loops for
for(let i = 0; i < 5; i++) {
    console.log(i + 1);
}

//while com o mesmo código de for
let i = 0;
while(i < 5) {
    console.log(i + 1);
    i++;
}

//do while
i = 0; //zerando a variável
do {
    console.log(i + 1);
    i++;
} while(i < 5);

//recebendo 10 salários e somando os valores com loop for
let soma = 0;
let salario = 0;

for(let i = 0; i < 10; i++) {
   /*  salario = Number(prompt('Informe o salário: ')); */
    soma = soma + salario;
}
console.log(soma);

//let 5 salários de um vetor e exibir o maior salário
//sem o uso do Math.max()
let salarios = [150, 170, 200, 100, 50, 180, 500, 510];
let maiorSalario = 0;// inicializa a variavel que irá receber o maior valor
let somaSalarios = 0;

for(let i = 0; i < salarios.length; i++) {
    if(salarios[i] > maiorSalario) { //algoritmo padrão de verificação que atribui o maior elemento a variável inicializada em 0
        maiorSalario = salarios[i];
    }
    somaSalarios += salarios[i]; //exibe a soma de todos os salários aproveitando o loop for
}
console.log('O maior salário é o: ' + maiorSalario);
console.log('A soma de todos os salários é de: ' + somaSalarios);