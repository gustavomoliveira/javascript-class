let codigoPedido = 0;
let indexProduto = 0;

let solicitantes = [
  "Steve Jobs",
  "Bill Gates",
  "Elon Musk",
  "Mark Zuckerberg",
  "Tim Berners-Lee",
  "Ada Lovelace",
  "Linus Torvalds",
  "Jeff Bezos",
  "Sheryl Sandberg",
  "Sundar Pichai",
];

function gerarEmail(nome) {
  let palavras = nome.split(" ");
  let primeiraPalavra = palavras[0].toLowerCase();
  let ultimaPalavra = palavras[palavras.length - 1].toLowerCase();
  return `${primeiraPalavra}@${ultimaPalavra}.com`;
}

let produtos = [
  { codigo: 912, nome: "Arroz", preco: 5 },
  { codigo: 905, nome: "Feijão", preco: 7 },
  { codigo: 917, nome: "Açúcar", preco: 3.5 },
  { codigo: 924, nome: "Café", preco: 15 },
  { codigo: 900, nome: "Leite", preco: 4.5 },
  { codigo: 931, nome: "Óleo de soja", preco: 6 },
  { codigo: 940, nome: "Pão", preco: 8 },
  { codigo: 926, nome: "Macarrão", preco: 6 },
  { codigo: 933, nome: "Carne bovina", preco: 35 },
  { codigo: 911, nome: "Frango", preco: 12 },
];

//^^^^^^^^^^^^^^^^^^^^^^^^^^^//
//////// MASSA DE DADOS////////
///////////////////////////////

const pedidos = [];

class Produto {
  constructor(codigo, nome, preco) {
    this.codigo = codigo;
    this.nome = nome;
    this.preco = preco;
  }

  toString() {
    return `${this.codigo} - ${this.nome} - R$${this.preco.toFixed(2)}`;
  }
}

class Solicitante {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  toString() {
    return `${this.nome} - ${this.email}`;
  }
}

class Pedido {
  constructor(codigo, solicitante) {
    this.codigo = codigo;
    this.solicitante = solicitante;
    this.produtos = [];
    this.status = "Inicial";
  }

  toString() {
    let listaProdutos = this.produtos
      .map((produto) => produto.toString())
      .join("\n");

    return `[${this.status}] Pedido ${
      this.codigo
    } - Solicitante: ${this.solicitante.toString()}\n Produtos:\n ${listaProdutos}`;
  }

  incluir() {
    pedidos.push(this);
  }

  alterarStatus(novoStatus) {
    this.status = novoStatus;
  }

  addProduto(produto) {
    this.produtos.push(produto);
  }

  removeProduto(codigoProduto) {
    const index = this.produtos.findIndex(
      (produto) => produto.codigo == codigoProduto
    );

    if (index != -1) {
      this.produtos.splice(index, 1);
    } else {
      console.log("Produto não identificado");
    }
  }
}

function exibirPedidos() {
  let txt = "";

  pedidos.forEach((pedido) => {
    txt += pedido.toString() + "\n\n";
  });

  console.log(txt);
}

function coletarDadosPedido() {
  const nome = prompt("Nome do solicitante:", solicitantes[codigoPedido]);
  const email = prompt("E-mail do solicitante:", gerarEmail(nome));
  const codigo = prompt("Código do pedido:", ++codigoPedido);

  const solicitante = new Solicitante(nome, email);

  const pedido = new Pedido(codigo, solicitante);

  coletarDadosProduto(pedido);
}

function coletarDadosProduto(oPedido) {
  do {
    const codigo = prompt("Código do produto:", produtos[indexProduto].codigo);
    const nome = prompt("Nome do produto:", produtos[indexProduto].nome);
    const preco = parseFloat(
      prompt("Preço do produto:", produtos[indexProduto].preco)
    );

    indexProduto++;

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

function buscarPedidoPorCodigo(codigoPedido) {
  return pedidos.find((pedido) => pedido.codigo === codigoPedido);
}

function excluirProduto() {
  const pedidoParaExcluirProduto = buscarPedidoPorCodigo(
    prompt("Código do pedido para exclusão do produto:")
  );

  console.log(pedidoParaExcluirProduto);

  pedidoParaExcluirProduto.removeProduto(
    prompt("Código do produto para exclusão:")
  );

  exibirPedidos();
}

function alterarStatusPedido() {
  const pedidoParaAlterarStatus = buscarPedidoPorCodigo(
    prompt("Código do pedido para alteração do status:")
  );

  console.log(pedidoParaAlterarStatus);

  pedidoParaAlterarStatus.alterarStatus("Em Andamento");

  exibirPedidos();
}

const calcularTotalizadores = (osPedidos) => {
  return osPedidos.map((pedido) => {
    const qtdeProdutos = pedido.produtos.length;
    const valorTotal = pedido.produtos.reduce(
      (total, produto) => total + produto.preco,
      0
    );

    return {
      codigoPedido: pedido.codigo,
      qtdeProdutos,
      valorTotal: valorTotal.toFixed(2),
    };
  });
};

function exibirTotalizadores() {
  const colecaoTotais = calcularTotalizadores(pedidos);

  console.log("Totalizadores: " + JSON.stringify(colecaoTotais, null, 2));
}

const obterPedidosComProdutos = (osPedidos, qtde) => {
  return osPedidos.filter((pedido) => pedido.produtos.length >= qtde);
};

function exibirFiltro() {
  const pedidosComProdutos = obterPedidosComProdutos(pedidos, 3);

  console.log(
    "Filtro - Pedido com Produtos: " +
      JSON.stringify(pedidosComProdutos, null, 2)
  );
}

const existePedidoSemProduto = (osPedidos) => {
  return osPedidos.some((pedido) => pedido.produtos.length == 0);
};

function exibirInconsistencias() {
  const temInconsistencia = existePedidoSemProduto(pedidos); //true

  console.log(
    temInconsistencia
      ? "Tem inconsistêcia"
      : "Não há inconsistência nos pedidos"
  );
}

coletarDadosPedido();

alterarStatusPedido();

excluirProduto();

exibirTotalizadores();

exibirFiltro();

exibirInconsistencias();
