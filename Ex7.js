// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

const produtos = [
    {nome: 'maca', preco: 3}, 
    {nome: 'banana', preco: 2},
    {nome: 'pera', preco: 2},
    {nome: 'melancia', preco: 10}
]

function OrdenarProduto(produtos) {
    return produtos.slice().sort((a,b) => a.preco - b.preco).map(p => p.nome)
    // Function Slice para criar um novo array e nao afetar o original
    // Function sort ordenando pelo preco de maneira crescente
    // Function map vai gerar um novo array a partir da funcao passada nele que seria retornar apenas os nomes 
    // * Importante salientar que e a funcao de array e nao a estrutura de dados *

}

const resultado = console.log(OrdenarProduto(produtos))