//Transformando em funções

//Coletando as notas, antes:
/* let nota1 = parseFloat(prompt('Digite a primeira nota: '));
let nota2 = parseFloat(prompt('Digite a segunda nota: '));
let nota3 = parseFloat(prompt('Digite a terceira nota: ')); */

//Depois, como função:
function nota() {
    return parseFloat(prompt('Digite uma nota: '));
}

const notas = [nota(), nota(), nota()];

//Calculando a média, antes:
/* let media = (nota1 + nota2 + nota3) / 3; */

//Antes da função:
/* let totalNotas;

for(let i = 0; i < notas.length; i++) {
    totalNotas += notas[i];
}

let media = totalNotas / nota.length; */

//Depois, como função:
function calcularMedia(notas) {
    let totalNotas = 0;
    for(let i = 0; i < notas.length; i++) {
    totalNotas += notas[i];
    }
    return totalNotas / notas.length;
}

let media = calcularMedia(notas);

//Verificando a situação do aluno
/* if(media >= 7) {
    console.log('Aprovado com média ' + media.toFixed(2));
} else if(media >= 5) {
    console.log('Recuperação com média ' + media.toFixed(2));
} else {
    console.log('Reporvado com média ' + media.toFixed(2));
} */

//Depois, como função:

function obterStatus(media) {
    if(media >= 7) {
      return 'Aprovado com média ' + media.toFixed(2);
    } else if(media >= 5) {
        return 'Recuperação com média ' + media.toFixed(2);
    } else {
        return 'Reprovado com média ' + media.toFixed(2);
    }
}

alert(obterStatus(media));