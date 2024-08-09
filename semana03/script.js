let planetas = [];
planetas.push('Mercurio', 'Venus', 'Terra', 'Marte', 'Jupiter');

console.log('Tamanho do array: ' + planetas.length);

planetas[5] = 'Zebes';

console.log('Tamanho do array: ' + planetas.length);

planetas.push('Urano');

planetas.splice(2, 1);

planetas.push('Netuno');

planetas.push('Plutão');

console.log('Planetas: ' + planetas + '!');

planetas.pop();

console.log('Planetas: ' + planetas + '!');