/* Etapa 1 Trabalhando com Arrays
Na primeira etapa do projeto, vamos focar em escrever programas em JavaScript com arrays,
aplicando os conceitos de criação, manipulação e utilização de arrays para armazenar e
gerenciar dados de forma eficiente. Essa etapa serve como a base do sistema, onde os alunos
vão construir a estrutura de dados principal do projeto, representada por classes,
e usar arrays para armazenar os objetos criados. 

1 - Criação de um array externo à classe principal (Pedido):
O array externo será usado para armazenar todos os objetos criados a partir da classe principal
do projeto (como "Pedido" no exemplo do professor). Este array será a coleção externa onde todos
os pedidos criados serão armazenados e gerenciados.

2 - Função de inclusão de pedidos na coleção externa:
Dentro da classe Pedido, crie uma função que permita adicionar novos pedidos à coleção externa.
Essa função receberá as informações do pedido, do solicitante e dos produtos associados a cada
pedido e deverá inserir o pedido devidamente preenchido no array externo.

3 - Relacionamentos entre classes:
Para que um pedido seja incluído na coleção externa, é necessário que ele esteja relacionado
com duas outras classes associadas: Produtos (vários produtos por pedido), Solicitante (um solicitante por pedido).
A função de inclusão de pedidos também será responsável por associar o objeto Solicitante a cada pedido.

4 - Função para adicionar produtos ao pedido:
Dentro da classe Pedido, crie uma função para adicionar um produto por vez na coleção de produtos já existentes no pedido.
O array de produtos ficará dentro de cada pedido e será alimentado conforme novos produtos forem incluídos.

5 - Criação do Solicitante:
Quando um pedido for criado e inserido na coleção externa, as informações do solicitante (nome, e-mail etc) deverão
ser passadas como parâmetros, e um novo objeto solicitante será instanciado e associado ao pedido automaticamente
dentro da função de inclusão do pedido.
*/

let pedidosArmazenados = [];

class Solicitante {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }
}

class Produtos {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}

class Pedido {
    constructor() {
        this.id = Math.floor(Math.random() * 1000 + 1); //usar metodo de geração de id igual o usado no tp3 de interatividade.
        this.solicitante = null;
        this.produtos = [];
    }
    adicionarPedidos(nomeSolicitante, emailSolicitante) {
        let solicitante = new Solicitante(nomeSolicitante, emailSolicitante);
        this.solicitante = solicitante;
        pedidosArmazenados.push(this); //o this é o obj que está sendo manipulado nesse momento!
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
}

//criando dois produtos
const produto1 = new Produtos('Celular', 2000, 2);
const produto2 = new Produtos('Carregador', 120, 4);

//criando um pedido
let pedido = new Pedido();
pedido.adicionarProduto(produto1);
pedido.adicionarProduto(produto2);
pedido.adicionarPedidos('Gustavo', 'gustavo@email.com');

console.log(pedidosArmazenados);

/* 
Etapa 2 Trabalhando com Repetições/Interações
Na segunda etapa do projeto, o foco será programar repetições/interações em JavaScript,
aplicando o uso de loops para percorrer, inserir e manipular dados, além de estruturar a
interação entre o usuário e o sistema para realizar a entrada de dados e a navegação por meio de loops aninhados.

1 - Função externa para exibir todos os pedidos cadastrados:
Crie uma função fora da classe que exiba todos os pedidos armazenados na coleção externa (array de pedidos).
Essa função deve percorrer a coleção de pedidos usando uma estrutura de repetição e exibir pelo menos um atributo
de cada classe relacionada (Pedido, Solicitante e Produto).
*/

function exibirPedidos(pedidos) {
    let imprime = '';
    pedidos.forEach((pedido, i) => {
    imprime += `Pedido: ${i} - Id: ${pedido.id} - Solicitante: ${pedido.solicitante.nome}\n`;
        pedido.produtos.forEach((produto, j) => {
            imprime += `Produto: ${produto.nome} - Preço: ${produto.preco}\n`
        });
    });
    console.log(imprime);
}

exibirPedidos(pedidosArmazenados);





