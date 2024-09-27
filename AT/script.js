/* Sistema de Gestão de Oficina
Classes:
Serviço: cliente, id, carros.
Carro: marca, modelo, ano, preçoServico.
Cliente: nome, e-mail.
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
    constructor(marca, modelo, ano, precoServico) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.precoServico = precoServico;
    }
    toString() {
        return `${this.marca.toUpperCase()} - ${this.modelo.toUpperCase()} - ${this.ano} - Valor do serviço: R$${Math.round(this.precoServico).toFixed(2)}`
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
    //Função de adição de Serviço ao array geral garagemOficina
    adicionarServico() {
        garagemOficina.push(this);
    }
    //Função de adição do objeto Carro ao array carros
    adicionarCarro(carro) {
        this.carros.push(carro);
    }
    //Função de remoção de carro por filtro de modelo
    removerModeloCarro(modelo) {
        this.carros = this.carros.filter(carro => carro.modelo.toLowerCase() !== modelo.toLowerCase());
    }
    //Função de modificação de atributo e valor do mesmo baseado nos parâmetros passados
    modificarAtributo(atributo, valor) {
        if(this.hasOwnProperty(atributo)) {
            this[atributo] = valor;
            console.log(`O atributo ${atributo} foi atualizado para ${valor}.`);
        } else {
            console.log(`O atributo "${atributo}" não existe.`);
        }
    }
}



/* DADOS PARA TESTE: ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
Carros, Clientes, Métodos, Serviços preenchidos e pre-definidos */

/* const carro1 = new Carro('Mercedes Benz', 'GLC', 2023, 5200);
const carro2 = new Carro('BMW', 'X5', 2020, 5100);
const carro3 = new Carro('VW', 'Fusca', 1968, 2400);
const carro4 = new Carro('Fiat', 'Uno', 2014, 1200);
const carro5 = new Carro('Ferrari', 'Enzo', 2016, 24000);
const carro6 = new Carro('Tesla', 'EZD', 2022, 7350);


const cliente1 = new Cliente('joão', 'joao@email.com');
const cliente2 = new Cliente('maria', 'maria@email.com');
const cliente3 = new Cliente('jose', 'jose@email.com');
const cliente4 = new Cliente('fernando', 'fernando@email.com');
const cliente5 = new Cliente('claudio', 'claudio@email.com');


let servico = new Servico(cliente1, 123);
servico.adicionarCarro(carro2);
servico.adicionarCarro(carro3);
servico.adicionarCarro(carro6);
servico.adicionarServico();
servico.removerModeloCarro('x5');
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
console.log(servico.carros); */

//Função para cadastro de Serviço usando loop dentro de loop
function cadastroServico() {
    let novoServico = true;
    while(novoServico) {
        //Coleta dados do cliente
        const nomeCliente = prompt('Insira o nome do cliente:');
        const emailCliente = prompt('Insira o e-mail de contato do cliente:');
        const cliente = new Cliente(nomeCliente, emailCliente);

        //Coleta dados do serviço
        const idServico = parseInt(prompt('Insira o ID do serviço a ser realizado:'));
        const servico = new Servico(cliente, idServico);

        let novoCarro = true;
        while(novoCarro) {
            //Coleta dados do carrogustavo
            const marcaCarro = prompt('Insira a marca do carro:');
            const modeloCarro = prompt('Insira o modelo do carro:');
            const anoCarro = parseInt(prompt('Insira o ano de fabricação do carro:'));
            const precoServico = parseFloat(prompt('Insira o preço do serviço a ser realizado:'));
            const carro = new Carro(marcaCarro, modeloCarro, anoCarro, precoServico);

            //Adiciona carro ao serviço
            servico.adicionarCarro(carro);
            //Pergunta ao usuário se ele deseja adicionar mais carros ao serviço
            novoCarro = confirm('Deseja adicionar mais carros ao serviço? "Ok" para "Sim" / "Cancelar" para "não".');
        }
        //Adiciona o serviço criado à garagem
        servico.adicionarServico();
        //Pergunta ao usuário se ele deseja adicionar um novo serviço
        novoServico = confirm('Deseja adicionar um novo serviço? "Ok" para "Sim" / "Cancelar" para "não".');
    }
    console.log(garagemOficina);
}

cadastroServico();

//Exibe relatório completo contendo toda a Etapa 4 - Ex. 1, 2 e 3 com manipulação de string
function exibirServicos() {
    let imprime = '';
    garagemOficina.forEach(servico => {
        imprime += servico.toString() + '\n\n';
    });
    console.log(imprime);
}

//Função totalizadora para calcular duas propriedades
const totalizadores = (garagem) => {
    const osTotalizadores = garagem.map(servico => {
        const valorTotalServico = servico.carros.reduce((total, carro) => total + carro.precoServico, 0);
        const totalCarros = servico.carros.length;
        return {
            valorTotalServico: `R$${Math.round(valorTotalServico).toFixed(2)}`,
            totalCarros: totalCarros
        };
    });
   console.log(`Valores totais de preço e número de carros: ${JSON.stringify(osTotalizadores, null, 2)}`);
}
totalizadores(garagemOficina); //parâmetro já passado para teste

//Função para filtro de propriedade
const anoFabricacao = (garagem, ano) => {
   const oAnoDeFabricacao = garagem.map(servico => servico.carros).flat().filter(carro => carro.ano >= ano);
   console.log(`Carros selecionados a partir do ano de ${ano}: ${JSON.stringify(oAnoDeFabricacao, null, 2)}`);
}
anoFabricacao(garagemOficina, 2010); //parâmetro já passado para teste

//Função para verificação de ocorrência
const ocorrenciaPreco = (garagem, precoServico) => {
    const ocorrencia = garagem.some(servico => {
        return servico.carros.some(carro => carro.precoServico > precoServico);
    });
    console.log(ocorrencia ? `Existe serviço a partir de R$${Math.round(precoServico).toFixed(2)}` : `Não existe serviço a partir de R$${Math.round(precoServico).toFixed(2)}`);
}
ocorrenciaPreco(garagemOficina, 5000); //parâmetro já passado para teste

//Chama relatório completo ao fim de todos os dados
exibirServicos();


