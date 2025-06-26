// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

const vendas = [
    {cliente: 'Marcos', total: 10},
    {cliente: 'Antonio', total: 30},
    {cliente: 'Fabio', total: 90},
    {cliente: 'Bruno', total: 20},
    {cliente: 'Bruno', total: 50},
]


function Formatacao (vendas) {

    return vendas.slice().reduce((acc, vendas) => { // chamo a function reduce com o acumulador e valor inicial sendo um objeto vazio
        const cliente = vendas.cliente // const cliente com o valor dos clientes do array
        const total = vendas.total // const total com os total do array

        if(!acc[cliente]) { // verifica se ja existe o cliente no objeto acc
            acc[cliente] = 0 // se nao existir cria com o valor 0 para que possa somar depois
        }

        acc[cliente] += total // soma ao cliente ja existente o total

        return acc // devolve o acc para cada passo do reduce
    }, {}) 

}

const resultado = console.table(Formatacao(vendas))