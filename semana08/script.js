class Cliente {
    constructor(nome, email) {
      this.nome = nome;
      this.email = email;
    }
  }
  
  class Produto {
    constructor(nome, preco, quantidade) {
      this.nome = nome;
      this.preco = preco;
      this.quantidade = quantidade;
    }
  }
  
  class Pedido {
    constructor(cliente) {
      this.cliente = cliente;
      this.produtos = [];
      this.status = "Em aberto";
    }
    adicionarProdutos(produto) {
      this.produtos.push(produto);
    }
    calcularTotal() {
      const novoVetor = this.produtos.map(produto => produto.preco * produto.quantidade);
      
      return novoVetor.reduce((total, valor) => total + valor, 0);
    }
    imprimir() {
      console.log(`Total do pedido do ${this.cliente.nome}: R$${this.calcularTotal().toFixed(2)}`);
    }
  }
  
  const clienteJoao = new Cliente("joao", "joao@.com");
  const clienteMaria = new Cliente("maria", "maria@.com");
  const clientePaulo = new Cliente("Paulo Queiroz", "paulo@queiroz.com");
  
  const p1 = new Produto("camiseta branca", 10, 2); //10 * 2 = 20
  const p2 = new Produto("camiseta vermelha", 15, 1); //15 * 1 = 15
  const p3 = new Produto("camiseta preta", 20, 3); //20 * 3 = 60 
  const p4 = new Produto("camiseta amarela", 25, 4); //25 * 4 = 100
  
  const pedidoJoao = new Pedido(clienteJoao);
  pedidoJoao.adicionarProdutos(p1);
  pedidoJoao.adicionarProdutos(p2);
  pedidoJoao.imprimir();
  
  const pedidoMaria = new Pedido(clienteMaria);
  pedidoMaria.adicionarProdutos(p1);
  pedidoMaria.adicionarProdutos(p3);
  pedidoMaria.imprimir();
  
  const pedidoPaulo = new Pedido(clientePaulo);
  pedidoPaulo.adicionarProdutos(p1);
  pedidoPaulo.adicionarProdutos(p2);
  pedidoPaulo.adicionarProdutos(p3);
  pedidoPaulo.adicionarProdutos(p4);
  pedidoPaulo.imprimir();