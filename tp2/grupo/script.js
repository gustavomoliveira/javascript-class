/* 
Exercício 12 Grupo: Analisando e manipulando dados de vendas com loops e arrays
Tema: Análise de dados de vendas
Objetivo: Criar um sistema simples para analisar e manipular dados de vendas,
utilizando estruturas de repetição (for, for..in, for..of), loops aninhados e arrays.
Descrição do problema:
Você e seu grupo foram contratados para desenvolver uma aplicação que auxilie na análise
de dados de vendas de uma loja. O sistema deve processar uma lista de vendas diárias e fornecer
informações úteis, como o total vendido, a média de vendas por dia, e os dias em que as vendas
foram mais altas e mais baixas.
Instruções:
    Crie um array chamado vendas que contém sub-arrays representando os valores de vendas de cada dia da semana.
    Cada sub-array deve conter os valores das vendas realizadas em diferentes turnos (manhã, tarde, noite) ao longo do dia.
*/

let vendas = [
    [2, 3, 5],
    [4, 6, 5],
    [3, 4, 5],
    [6, 7, 8],
    [4, 5, 6],
    [3, 5, 7],
    [6, 7, 4]];

/* function vendaDiaria() {
    for(let dia = 1; dia <= 7; dia++) {
        let diaSemana = [];
        for(let turnoDia = 1; turnoDia <= 3; turnoDia++) {
            let valor = parseFloat(prompt(`Qual valor do registro ${turnoDia} do dia ${dia}?`));
            diaSemana.push(valor);
        }
        vendas.push(diaSemana);
        if (dia < 7) {
            let continuar = prompt('Deseja registrar mais um dia? Sim ou Não?').toLowerCase();
            if (continuar === 'não') {
                break;
            }
        } else {
            alert('Você registrou toda a semana! Até a próxima semana.');
        }
    }
}

vendaDiaria();
console.log(vendas); */

/* 
Exercício 13 Grupo: Cálculo do total de vendas por dia
    Crie uma função chamada calcularTotalDiario que recebe o array vendas como parâmetro.
    Utilize um loop for para iterar sobre cada sub-array (representando um dia da semana) no array vendas.
    Dentro do loop, utilize outro loop for para somar os valores de vendas de cada turno
    (manhã, tarde, noite) em um único valor total para o dia.
    Armazene o total de vendas de cada dia em um novo array chamado totaisDiarios.
    Exiba o array totaisDiarios, mostrando o total de vendas para cada dia da semana.
*/

function calcularTotalDiario(vendas) {
    const totaisDiarios = [];
    
    for(let i = 0; i < vendas.length; i++) {
      let subArray = vendas[i];
      let soma = 0; //zera a variável para um novo loop;
        for(let j = 0; j < subArray.length; j++) {
           soma += subArray[j];
        }
        totaisDiarios.push(soma);
    }
    return totaisDiarios;
}

let total = calcularTotalDiario(vendas);
console.log(total);

/* 
Exercício 14 Grupo: Cálculo da média de vendas por dia
    Crie uma função chamada calcularMediaVendas que recebe o array totaisDiarios como parâmetro.
    Utilize um loop for..of para iterar sobre os valores no array totaisDiarios.
    Some todos os valores para calcular o total geral de vendas da semana.
    Divida o total geral pelo número de dias (7) para obter a média diária de vendas.
    Exiba a média.
*/

function calcularMediaVendas(totaisDiarios) {
    let totalGeral = 0;
    for(let total of totaisDiarios) {
        totalGeral += total;
    }
    let media = parseFloat(totalGeral / totaisDiarios.length).toFixed(2);
    return media;
}

let totalMedia = calcularMediaVendas(total);
console.log(totalMedia);

/* 
Exercício 15 Grupo: Identificação do dia com maior e menor venda
    Crie uma função chamada encontrarMelhorPiorDia que recebe o array totaisDiarios como parâmetro.
    Utilize um loop for para encontrar o dia com o maior e o menor valor de vendas.
    Exiba os dias da semana (ex.: "Segunda-feira", "Terça-feira") correspondentes ao maior e ao menor total de vendas.
*/

function encontrarMelhorPiorDia(totaisDiarios) {
  let diasSemana = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado', 'Domingo'];
  let maiorVenda = 0;
  let menorVenda = 0;

    for(let i = 1; i <totaisDiarios.length; i++) { //começa do 1 já que o 0 já foi assumido;
        if(totaisDiarios[i] > totaisDiarios[maiorVenda]) {
            maiorVenda = i; //relaciona os índices para determinar o elemento;
        }
        if(totaisDiarios[i] < totaisDiarios[menorVenda]) {
            menorVenda = i;
        }
    }
    console.log(`O melhor dia da semana foi ${diasSemana[maiorVenda]} com um total de ${totaisDiarios[maiorVenda]} \n
O pior dia da semana foi ${diasSemana[menorVenda]} com um total de ${totaisDiarios[menorVenda]}.`);
}

encontrarMelhorPiorDia(total);

/* 
Exercício 16 Grupo: Filtrando vendas acima de um valor específico
    Crie uma função chamada filtrarVendasAcimaDe que recebe o array totaisDiarios e um valor mínimo como parâmetros.
    Utilize o loop for..in para iterar sobre o array totaisDiarios e filtrar os dias onde o total de vendas foi superior ao valor mínimo.
    Retorne um novo array contendo os dias em que as vendas superaram o valor especificado.
    Exiba o array filtrado.
*/

function filtrarVendasAcimaDe(totaisDiarios, valorMinimo) {
    let diasSemana = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado', 'Domingo'];
    let vendasSuperiores = []
    
    for(let total in totaisDiarios) {
        if(totaisDiarios[total] > valorMinimo) {
            vendasSuperiores.push(diasSemana[total]);
        }
    }
    return vendasSuperiores;
}

let filtrados = filtrarVendasAcimaDe(total, 10);
console.log(`Os dias da semana em que as vendas superaram foram ${filtrados}.`);