//Escreva duas funções:

//1- ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente.
//2- ○ objetoParaPares(obj) faz o inverso, retornando um array de pares.

const pares = [["nome", "Danilo"], ["idade", 22], ["dob", "21/01/2003"], ["sex", "masc"]]

const obj = {nome: 'Danilo', idade: 22, dob: '21/01/2003', sex: 'masc'}

function paresParaObjeto(pares) {
    const obj = {} // cria objeto vazio

    for(let i = 0; i < pares.length; i++) { // loop que percorre todo array
        const par = pares[i] // por ser array dentro de array aq criamos um array que no endereco de i vai receber o array por exemplo i = 0 retorna o array [nome, Danilo]
        const chave = par[0] // aq colocamos os ids do nosso novo array par que sempre sera 0 a chave e 1 o valor
        const valor = par[1]

        obj[chave] = valor // cria no objeto a chave e o valor dela
    }

    return obj
}

function objetoParaPares(obj) {
    const pares = [] // criamos um array vazio

    for(let chave in obj) { // loop in de objeto
        const valor = obj[chave] // const valor com o valor equivalente a localizacao da chave no objeto
        pares.push([chave, valor]) // usar push para adicionar a chave e o valor | importante as "[]" que sao necessarias para adicionar um array e nao os elementos separados
    }

    return pares
}

console.table(paresParaObjeto(pares))
console.table(objetoParaPares(obj))