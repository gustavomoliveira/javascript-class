/* 
Exercício 12 Grupo: Funções de adição e atualização de produtos
Requisito:
    Crie um array chamado estoque que armazenará os produtos da loja.
    Cada produto deve ser representado como um objeto com as propriedades: nome, quantidade, precoUnitario.
    Implemente uma função adicionarProduto que permita adicionar um novo produto ao estoque.
    A função deve receber os parâmetros nome, quantidade e precoUnitario.
    Implemente uma função atualizarProduto que atualize a quantidade de um produto existente no estoque com base no nome.
*/

let estoque = [];

function adicionarProduto(nome, quantidade, precoUnitario) {
    let produto = {
    nome: nome,
    quantidade: quantidade,
    precoUnitario: precoUnitario 
    };
    estoque.push(produto)
}

adicionarProduto('Celular', 1, 2000);
adicionarProduto('Garrafa', 1, 5.50);
adicionarProduto('Camisa', 1, 120);
console.log(estoque)


function atualizarProduto(oNome, aQuantidade) {
    for(let i = 0; i < estoque.length; i++) {
        if(estoque[i].nome === oNome) //acessa o nome através do loop e atribui a nova quantidade.
            estoque[i].quantidade = aQuantidade;
            return;
    }
    alert('Produto não encontrado. Tente novamente.');
}

atualizarProduto('Celular', 4);
console.log(estoque);

/* 
Exercício 13 Grupo: Removendo produtos, calculando o valor total do estoque e relatório de estoque
Requisito:
    Crie uma função removerProduto que remova um produto do estoque com base no nome.
    Implemente uma função calcularValorTotal que retorne o valor total de todos os produtos no estoque.
    Desenvolva uma função relatorioEstoque que exiba um relatório com todos os produtos, suas quantidades
    e valores totais individuais (quantidade * preço unitário).
*/

function removerProduto(nome) {
    return estoque.filter(item => item.nome !== nome);
}

let estoqueFiltrado = removerProduto('Garrafa');
console.log(estoqueFiltrado);

function calcularValorTotal() {
    return estoque.reduce((total, item) => total + (item.quantidade * item.precoUnitario), 0); //o acumulador é somado ao produto de cada qtd * preco.
}

let valorTotal = calcularValorTotal();
console.log(`Valor total do estoque: R$ ${calcularValorTotal()}`);

function relatorioEstoque() {
    for(let i = 0; i < estoque.length; i++) {
        console.log(`Produtos em estoque: ${estoque[i].nome}\n
Com estoque de ${estoque[i].quantidade} unidades\n
Valor total individual de R$${estoque[i].quantidade * estoque[i].precoUnitario}`)
    }
}

relatorioEstoque();