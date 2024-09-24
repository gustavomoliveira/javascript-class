const pedidos = [];

class Produto {
  constructor(codigo, nome, preco) {
    this.codigo = codigo;
    this.nome = nome;
    this.preco = preco;
  }
}

class Solicitante {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }
}

class Pedido {
  constructor(codigo, solicitante) {
    this.codigo = codigo;
    this.solicitante = solicitante;
    this.produtos = [];
  }

  incluir() {
    pedidos.push(this);
  }

  addProduto(produto) {
    this.produtos.push(produto);
  }

  removeProduto(codigoProduto) {
    const index = this.produtos.findIndex(
      (produto) => produto.codigo == codigoProduto
    );
    //se o index exister
    if (index != -1) {
      this.produtos.splice(index, 1);
    } else {
      console.log("Produto não identificado");
    }
  }
}

function exibirPedidos() {
  let txt = "";

  pedidos.forEach((pedido, i) => {
    txt += `Pedido ${i + 1} - ${pedido.codigo} - ${pedido.solicitante.nome}\n`;
    pedido.produtos.forEach((prod, j) => {
      txt += `  Produto ${j + 1} - ${prod.codigo} - ${
        prod.nome
      } - R$${prod.preco.toFixed(2)}\n`;
    });
  });

  console.log(txt);
}

function coletarDadosPedido() {
  const codigo = prompt("Código do pedido:");
  const nome = prompt("Nome do solicitante:");
  const email = prompt("E-mail do solicitante:");

  const solicitante = new Solicitante(nome, email);

  const pedido = new Pedido(codigo, solicitante);

  coletarDadosProduto(pedido);
}

function coletarDadosProduto(oPedido) {
  do {
    const codigo = prompt("Código do produto:");
    const nome = prompt("Nome do produto:");
    const preco = parseFloat(prompt("Preço do produto:"));

    const produto = new Produto(codigo, nome, preco);

    oPedido.addProduto(produto);
  } while (confirm("Deseja incluir um novo produto?"));

  oPedido.incluir();

  if (confirm("Deseja incluir um novo pedido?")) {
    coletarDadosPedido();
  } else {
    exibirPedidos();
  }
}

//coletarDadosPedido();

const solicitante = new Solicitante("elberth", "elberth@elberth.com");

const pedido = new Pedido(1, solicitante);

do {
  const cod = prompt("Código do produto:");
  const nm = "produto " + cod;
  const preco = 100;

  const produto = new Produto(cod, nm, preco);

  pedido.addProduto(produto);
} while (confirm("Deseja incluir um novo produto?"));

pedido.incluir();

exibirPedidos();

pedido.removeProduto(2);

exibirPedidos();
