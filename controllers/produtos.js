let lista_produtos = {
    produtos: [
        { id: 1, descricao: "Arroz parboilizado 5Kg", valor: 25.00, marca: "Tio João"},
        { id: 2, descricao: "Maionese 250gr", valor: 7.20, marca: "Helmans"},
        { id: 3, descricao: "Iogurte Natural 200ml", valor: 2.50, marca: "Itambé"},
        { id: 4, descricao: "Batata Maior Palha 300gr", valor: 15.20, marca: "Chipps"},
        { id: 5, descricao: "Nescau 400gr", valor: 8.00, marca: "Nestlé"},
    ]
}

export const getProducts = (req, res) => {
    res.send(lista_produtos);
}

export const createProduct = (req, res) => {
    const produto = req.body;

    lista_produtos.push(produto);

    res.send(`O produto ${produto.descricao} foi adicionado!`);
}

export const getProduct = (req, res) => {
    const { id } = req.params;

    const foundProduto = lista_produtos.find((produto) => produto.id === id);

    res.send(foundProduto);

}

export const deleteProduct = (req, res) => {
    const { id } = req.params;

    produtos = lista_produtos.filter((produto) => produto.id !== id)

    res.send(`Produto com o ID ${id} foi excluido.`);
}

export const updateProduct = (req, res) => {
    const { id } = req.params;
    const { descricao, valor, marca } = req.body;

    const productToBeUpdated = lista_produtos.find((produto) => produto.id === id);

    if(descricao) {
        lista_produtos.descricao = descricao;
    }
    if(valor) {
        lista_produtos.valor = valor;
    }
    if(marca) {
        lista_produtos.marca = marca;
    }

    res.send('Produto atualizado!');
}