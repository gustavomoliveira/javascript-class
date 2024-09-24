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
}

class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

class Servico {
    constructor(cliente, id, preco) {
        this.cliente = cliente;
        this.id = id;
        this.preco = preco;
        this.carros = [];
    }
    adicionarServico() {
        garagemOficina.push(this); //o this é o obj que está sendo manipulado nesse momento!
    }
    adicionarCarro(carro) {
        this.carros.push(carro);
    }
    removerCarroModelo(modelo) {
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

/* //criando carros
const carro1 = new Carro('Mercedes Benz', 'GLC', 2023);
const carro2 = new Carro('BMW', 'X5', 2020);
const carro3 = new Carro('VW', 'Fusca', 1968);
const carro4 = new Carro('Fiat', 'Uno', 2014);
const carro5 = new Carro('Ferrari', 'Enzo', 2016);

//criando cliente
const cliente1 = new Cliente('gustavo', 'gustavo@email.com');
const cliente2 = new Cliente('bartô', 'barto@email.com');
const cliente3 = new Cliente('joão', 'joao@email.com');

//criando serviço
let servico = new Servico(cliente1, 123, 5000);
servico.adicionarCarro(carro2);
servico.adicionarCarro(carro3);
servico.adicionarServico();
servico.removerCarroModelo('x5'); //recebe o modelo do carro para remoção.
servico.modificarAtributo('id', 125);

let servico2 = new Servico(cliente2, 654, 8200);
servico2.adicionarCarro(carro5);
servico2.adicionarCarro(carro1);
servico2.adicionarServico();

let servico3 = new Servico(cliente3, 342, 7250);
servico3.adicionarCarro(carro1);
servico3.adicionarCarro(carro4);
servico3.adicionarCarro(carro3);
servico3.adicionarServico();

console.log(garagemOficina);
console.log(servico.carros); */

function exibirServicos(servicos) {
    let imprime = '';
    servicos.forEach((servico, i) => {
    imprime += `Serviço ${i + 1} - ID: ${servico.id} - Cliente: ${servico.cliente.nome} - Valor R$${servico.preco}\n`;
        servico.carros.forEach((carro, j) => {
            imprime += `Carro ${j + 1} - Marca: ${carro.marca} - Modelo: ${carro.modelo}\n`
        });
    });
    console.log(imprime);
}

function cadastroServico() {
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

cadastroServico();

//exibe a garagem apenas após o cadastro.
exibirServicos(garagemOficina);

const totalizadores = () => {
   return garagemOficina.map(servico => ({
    totalValorServico: servico.preco,
    totalCarros: servico.carros.length
   }));
}
console.log(totalizadores());

//map em todo o array da garagem, acessa os serviços, dentro dos serviços a coleção de carros que é aberta em um único array e filtrada por ano acima de 2010
const anoFabricacao = (garagem) => {
   return garagem.map(servico => servico.carros).flat().filter(carro => carro.ano >= 2010);
}
console.log(anoFabricacao(garagemOficina));

//usando some() para verificar a ocorrência de preço
const ocorrenciaGaragem = (garagem, preco) => {
    return garagem.some(servico => servico.preco > preco);
}
console.log(ocorrenciaGaragem(garagemOficina, 5000));

//etapa 4 - ex. 1, 2 e 3 - função de manipulação de string
function relatorioDetalhado(servicos) {
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

relatorioDetalhado(garagemOficina);



