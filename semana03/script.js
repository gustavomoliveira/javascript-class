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
i =0; //zerando a variável
do {
    alert(i + 1);
    i++;
} while(i < 5);