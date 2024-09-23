/* Etapa 1 Trabalhando com Arrays
Na primeira etapa do projeto, vamos focar em escrever programas em JavaScript com arrays,
aplicando os conceitos de criação, manipulação e utilização de arrays para armazenar e
gerenciar dados de forma eficiente. Essa etapa serve como a base do sistema, onde os alunos
vão construir a estrutura de dados principal do projeto, representada por classes,
e usar arrays para armazenar os objetos criados. 

1 - Criação de um array externo à classe principal (Pedido):
O array externo será usado para armazenar todos os objetos criados a partir da classe principal
do projeto (como "Pedido" no exemplo do professor). Este array será a coleção externa onde todos
os pedidos criados serão armazenados e gerenciados. IMPLEMENTADO

2 - Função de inclusão de pedidos na coleção externa:
Dentro da classe Pedido, crie uma função que permita adicionar novos pedidos à coleção externa.
Essa função receberá as informações do pedido, do solicitante e dos produtos associados a cada
pedido e deverá inserir o pedido devidamente preenchido no array externo. IMPLEMENTADO

3 - Relacionamentos entre classes:
Para que um pedido seja incluído na coleção externa, é necessário que ele esteja relacionado
com duas outras classes associadas: Produtos (vários produtos por pedido), Solicitante (um solicitante por pedido).
A função de inclusão de pedidos também será responsável por associar o objeto Solicitante a cada pedido. IMPLEMENTADO

4 - Função para adicionar produtos ao pedido:
Dentro da classe Pedido, crie uma função para adicionar um produto por vez na coleção de produtos já existentes no pedido.
O array de produtos ficará dentro de cada pedido e será alimentado conforme novos produtos forem incluídos. IMPLEMENTADO

5 - Criação do Solicitante:
Quando um pedido for criado e inserido na coleção externa, as informações do solicitante (nome, e-mail etc) deverão
ser passadas como parâmetros, e um novo objeto solicitante será instanciado e associado ao pedido automaticamente
dentro da função de inclusão do pedido. IMPLEMENTADO
*/

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
        this.carros = this.carros.filter(carro => carro.modelo.toLowerCase() !== modelo.toLowerCase())
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
const carro1 = new Carro('Mercedes Benz', 'GLC', 2023);
const carro2 = new Carro('BMW', 'X5', 2020);
const carro3 = new Carro('VW', 'Fusca', 1968);
const carro4 = new Carro('Fiat', 'Uno', 2014);
const carro5 = new Carro('Ferrari', 'Enzo', 2016);

//criando cliente
const cliente1 = new Cliente('Gustavo', 'gustavo@email.com');
const cliente2 = new Cliente('Bartô', 'barto@email.com');
const cliente3 = new Cliente('João', 'joao@email.com');

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
console.log(servico.carros);

/* 
Etapa 2 Trabalhando com Repetições/Interações
Na segunda etapa do projeto, o foco será programar repetições/interações em JavaScript,
aplicando o uso de loops para percorrer, inserir e manipular dados, além de estruturar a
interação entre o usuário e o sistema para realizar a entrada de dados e a navegação por meio de loops aninhados.

1 - Função externa para exibir todos os pedidos cadastrados:
Crie uma função fora da classe que exiba todos os pedidos armazenados na coleção externa (array de pedidos).
Essa função deve percorrer a coleção de pedidos usando uma estrutura de repetição e exibir pelo menos um atributo
de cada classe relacionada (Pedido, Solicitante e Produto). IMPLEMENTADO
*/

function exibirPedidos(servicos) {
    let imprime = '';
    servicos.forEach((servico, i) => {
    imprime += `Serviço ${i + 1} - ID: ${servico.id} - Cliente: ${servico.cliente.nome} - Valor R$${servico.preco}\n`;
        servico.carros.forEach((carro, j) => {
            imprime += `Carro ${j + 1} - Marca: ${carro.marca} - Modelo: ${carro.modelo}\n`
        });
    });
    console.log(imprime);
}

exibirPedidos(garagemOficina);

/* 
2 - Aninhamento de loops para entrada de dados:
Desenvolva a entrada de dados para a inclusão de novos serviço, cliente e carro através de loops.
O processo começa com um loop inicial para coletar as informações da classe principal (Serviço) e da
classe associativa (Cliente). Em seguida, crie um segundo loop aninhado dentro do primeiro para
receber os dados dos carros que serão associados ao serviço. O objetivo é permitir que o usuário
adicione vários carros a um serviço até que ele decida parar. IMPLEMENTADO

3 - Continuação ou encerramento do cadastramento:
Ao final de cada ciclo de cadastramento de pedido ou produto, ofereça ao usuário a opção de continuar ou encerrar o processo.
Use uma condição dentro do loop para perguntar ao usuário se ele deseja adicionar mais pedidos ou produtos. IMPLEMENTADO
Caso não queira, o loop deve ser encerrado.
*/

/* function cadastroServico() {
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

/* 
Etapa 3 Programando Funções

Na terceira etapa do projeto, o foco será trabalhar o conceito de funções em JavaScript, com ênfase na criação
de funções tradicionais e arrow functions. O objetivo é permitir que o aluno implemente funcionalidades como exclusão,
alteração e manipulação de dados através de funções mais avançadas.

1 - Função para exclusão de um carro específico de um serviço:
Crie uma função na classe Serviço que permita remover um carro específico da listagem de carros existentes em um serviço.
A função deve receber como parâmetro o nome do carro (ou outro identificador) e remover o carro correspondente do array do serviço. IMPLEMENTADO

2 - Função para alterar algum campo da classe principal (Serviço):
Implemente uma função que permita modificar algum atributo da classe principal,
Serviço (por exemplo, alterar o nome ou outro dado relevante).
A função deve receber o novo valor do campo e atualizar o atributo correspondente do objeto serviço.
IMPLEMENTADO

3 - Arrow function para retornar uma nova coleção do mesmo tamanho dos pedidos, contendo totalizadores:
Crie uma arrow function que percorra o array garagemOficina e retorne uma nova coleção do mesmo tamanho,
onde cada item será um objeto contendo totalizadores, como o número total de carros e o valor total do
servico (somando o preço de todos os servicos).
*/

const totalizadores = () => {
   return garagemOficina.map(servico => ({
    totalValorServico: servico.preco,
    totalCarros: servico.carros.length
   }));
}
console.log(totalizadores());

/* 
4 - Arrow function para retornar uma nova coleção com a aplicação de algum filtro:
Desenvolva uma arrow function que aplique um filtro sobre a coleção garagem,
retornando uma nova coleção que atenda a um critério específico (por exemplo,
serviços com mais de 2 carros ou serviços com carros acima de determinado ano de fabricação).
*/

//map em todo o array da garagem, acessa os serviços, dentro dos serviços a coleção de carros que é aberta em um único array e filtrada por ano acima de 2010
const anoFabricação = (garagem) => {
   return garagem.map(servico => servico.carros).flat().filter(carro => carro.ano >= 2010);
}
console.log(anoFabricação(garagemOficina));

/* 
5 - Arrow function para indicar se existe alguma ocorrência dentro da coleção:
Crie uma arrow function que verifique se existe uma determinada condição na coleção
de garagem (por exemplo, verificar se existe algum serviço acima de determinado valor
ou com um número específico de carros). A função deve retornar um boolean dependendo da condição aplicada.
*/

const ocorrenciaGaragem = (garagem, preco) => {
    return garagem.some(servico => servico.preco > preco);
}
console.log(ocorrenciaGaragem(garagemOficina, 5000));





