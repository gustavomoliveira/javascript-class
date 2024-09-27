/* Sistema de Gestão de Oficina

Classes:
Serviço: cliente, carros.
Carro: marca, modelo, ano.
Cliente: nome, email.
*/

let garagemOficina = [];

class Cliente {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    toString() {
        return `${this.nome.charAt(0).toUpperCase() + this.nome.slice(1)} - ${this.email}`;
    }
}

class Carro {
    constructor(marca, modelo, ano, preco) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.preco = preco;
    }
    toString() {
        return `${this.marca.toUpperCase()} - ${this.modelo.toUpperCase()} - ${this.ano} - Valor do serviço: R$${Math.round(this.preco).toFixed(2)}`
    }
}

class Servico {
    constructor(cliente, id) {
        this.cliente = cliente;
        this.id = id;
        this.carros = [];
    }
    toString() {
        let todosOsCarros = this.carros.map(carro => carro.toString()).join('\n');
        return `Serviço[${this.id}] - Cliente: ${this.cliente.toString()}\nCarros:\n${todosOsCarros}`;
    }
    adicionarServico() {
        garagemOficina.push(this);
    }
    adicionarCarro(carro) {
        this.carros.push(carro);
    }
    removerModeloCarro(modelo) {
        this.carros = this.carros.filter(carro => carro.modelo.toLowerCase() !== modelo.toLowerCase());
    }
    modificarAtributo(atributo, valor) {
        if(this.hasOwnProperty(atributo)) {
            this[atributo] = valor;
            console.log(`O atributo ${atributo} foi atualizado para ${valor}.`);
        } else {
            console.log(`O atributo "${atributo}" não existe.`);
        }
    }
}

//criando carros
const carro1 = new Carro('Mercedes Benz', 'GLC', 2023, 5200);
const carro2 = new Carro('BMW', 'X5', 2020, 5100);
const carro3 = new Carro('VW', 'Fusca', 1968, 2400);
const carro4 = new Carro('Fiat', 'Uno', 2014, 1200);
const carro5 = new Carro('Ferrari', 'Enzo', 2016, 14000);

//criando cliente
const cliente1 = new Cliente('gustavo', 'gustavo@email.com');
const cliente2 = new Cliente('bartô', 'barto@email.com');
const cliente3 = new Cliente('joão', 'joao@email.com');

//criando serviço
let servico = new Servico(cliente1, 123);
servico.adicionarCarro(carro2);
servico.adicionarCarro(carro3);
servico.adicionarServico();
servico.removerModeloCarro('x5'); //recebe o modelo do carro para remoção.
servico.modificarAtributo('id', 125);

let servico2 = new Servico(cliente2, 654);
servico2.adicionarCarro(carro5);
servico2.adicionarCarro(carro1);
servico2.adicionarServico();

let servico3 = new Servico(cliente3, 342);
servico3.adicionarCarro(carro1);
servico3.adicionarCarro(carro4);
servico3.adicionarCarro(carro3);
servico3.adicionarServico();

console.log(garagemOficina);
console.log(servico.carros);

function exibirServicos() {
    let imprime = '';
    garagemOficina.forEach(servico => {
        imprime += servico.toString() + '\n\n';
    });
    console.log(imprime);
}

/*function cadastroServico() {
    let novoServico = true;
    while(novoServico) {
        //coleta dados do cliente
        const nomeCliente = prompt('Insira o nome do cliente:');
        const emailCliente = prompt('Insira o e-mail de contato do cliente:');
        const cliente = new Cliente(nomeCliente, emailCliente);

        //coleta dados do serviço
        const idServico = parseInt(prompt('Insira o ID do serviço a ser realizado:'));
        const precoServico = parseFloat(prompt('Insira o preço do serviço a ser realizado:'));
        const servico = new Servico(cliente, idServico, precoServico);

        let novoCarro = true;
        while(novoCarro) {
            //coleta dados do carro
            const marcaCarro = prompt('Insira a marca do carro:');
            const modeloCarro = prompt('Insira o modelo do carro:');
            const anoCarro = parseInt(prompt('Insira o ano de fabricação do carro:'));
            const carro = new Carro(marcaCarro, modeloCarro, anoCarro);

            //adiciona carro ao serviço
            servico.adicionarCarro(carro);
            //pergunta ao usuário se ele deseja adicionar mais carros ao serviço
            novoCarro = confirm('Deseja adicionar mais carros ao serviço? "Ok" para "Sim" / "Cancelar" para "não".');
        }
        //adiciona o serviço criado à garagem
        servico.adicionarServico();
        //pergunta ao usuário se ele deseja adicionar um novo serviço
        novoServico = confirm('Deseja adicionar um novo serviço? "Ok" para "Sim" / "Cancelar" para "não".');
    }
    console.log(garagemOficina);
}

cadastroServico(); */

//exibe a garagem apenas após o cadastro.
exibirServicos();

const totalizadores = (garagem) => {
    const osTotalizadores = garagem.map(servico => {
        const valorTotalServico = servico.carros.reduce((total, carro) => total + carro.preco, 0);
        const totalCarros = servico.carros.length;
        return {
            valorTotalServico: `R$${Math.round(valorTotalServico).toFixed(2)}`,
            totalCarros: totalCarros
        };
    });
   console.log(`Valores totais de preço por serviço e número de carros: ${JSON.stringify(osTotalizadores, null, 2)}`);
}
totalizadores(garagemOficina);

//map em todo o array da garagem, acessa os serviços, dentro dos serviços a coleção de carros que é aberta em um único array e filtrada por ano acima de 2010
const anoFabricacao = (garagem, ano) => {
   const oAnoDeFabricacao = garagem.map(servico => servico.carros).flat().filter(carro => carro.ano >= ano);
   console.log(`Carros selecionados a partir do ano de ${ano}: ${JSON.stringify(oAnoDeFabricacao, null, 2)}`);
}
anoFabricacao(garagemOficina, 2010);

//usando some() para verificar a ocorrência de preço
const ocorrenciaPreco = (garagem, preco) => {
    const ocorrencia = garagem.some(servico => {
        return servico.carros.some(carro => carro.preco > preco);
    });
    
    console.log(ocorrencia ? `Existe serviço a partir de R$${Math.round(preco).toFixed(2)}` : `Não existe serviço a partir de ${Math.round(preco).toFixed(2)}`);
}
ocorrenciaPreco(garagemOficina, 5000);

//etapa 4 - ex. 1, 2 e 3 - função de manipulação de string
/* function relatorioDetalhado(servicos) {
   let imprime = '';

    servicos.forEach((servico, i) => {
        imprime += `\nRelatório completo de todos os dados do Serviço ${i + 1}, de ID ${servico.id} e valor total a ser pago de R$${Math.round(servico.preco).toFixed(2)}:\n
Cliente ${servico.cliente.nome.charAt(0).toUpperCase() + servico.cliente.nome.slice(1)}, de e-mail de contato: ${servico.cliente.email.trim()},\n
Possui ${servico.carros.length} carro(s) em nossa garagem para realização de manutenção ou reparos. As especificações do(s) veículo(s):\n`;
        servico.carros.forEach((carro, j) => {
            imprime += `\nCarro ${j + 1} de fabricante: ${carro.marca.toUpperCase()}, modelo: ${carro.modelo.toUpperCase()} e ano de fabricação ${carro.ano}.\n`;
        });
    });
    console.log(imprime);
}

relatorioDetalhado(garagemOficina); */

