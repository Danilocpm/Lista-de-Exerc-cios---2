// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.


// Para a funcao fatorial por ser apenas um arg nao precisava por exemplo da key e seria possivel pesquisar o args direto no if(in) mas como e para ser uma funcao reaproveitavel, decidi usar o ...args e a key extra
function memoize(fn) {
    const cache = {} // cria um objeto const cache

    return function(...args) { // recebe um array de argumentos apesar de que aqui apenas args serve

    const key = JSON.stringify(args) 
    // const key com o valor do primeiro argumento de args ja que usamos ...args
    // JSON.stringfy ira tornar os args recebidos em uma string JSON o que permite sua armazenacao em cache por conta dos motivos abaixo:
    // 1- Arrays/objetos não são chaves válidas diretamente
    // 2- Garante que chamadas iguais gerem a mesma chave no cache, evitando duplicatas infinitas

    if(key in cache) { // if valida se o valor de key esta em algum lugar do cache, iterando pelo objeto de cache
        return cache[key] // se sim retorna o valor anteriormente computado e encerra a funcao
    }

    // se nao houver ja registrado
    const result = fn.apply(this,args) // const com a funcao e o argumento que acabou de rodar | apply e this sendo usado por boa pratica e permitir o reaproveitamente futuro
    cache[key] = result // armazena no objeto de cache o resultado que acabou de ser capturado
    return result // retorna o resultado
    }

}

function Fatorial(n) {
    if(n === 0)  { 
        return 1
    } 
    else {
        return n * Fatorial(n - 1)

    }

}

const fastFatorial = memoize(function fatorial(n) { // const com a versao utilizando memoize
    if(n === 0)  { 
        return 1
    } 
    else {
        return n * fastFatorial(n - 1) // recursividade na funcao com memoize

    }  
})

// Eu tentei ao maximo achar um jeito de validar a diferenca do tempo entre eles...
// entre usar console.time e console.timeend acaba que pesquisando o performance.now() parece melhor
// mas ainda assim a primeira chamada tende a ter uma desvantagem de ms entao ficou legal so para comparar realmente a 1 chamada x 2 chamada


// Medindo Fatorial sem memoize
const start1 = performance.now();
console.log(Fatorial(40));
const end1 = performance.now();
console.log(`Fatorial sem memoize: ${(end1 - start1).toFixed(3)} ms`);

// Medindo Fatorial com memoize - primeira chamada
const start2 = performance.now();
console.log(fastFatorial(40));
const end2 = performance.now();
console.log(`Fatorial com memoize (1ª chamada): ${(end2 - start2).toFixed(3)} ms`);

// Medindo Fatorial com memoize - segunda chamada (cache)
const start3 = performance.now();
console.log(fastFatorial(40));
const end3 = performance.now();
console.log(`Fatorial com memoize (2ª chamada): ${(end3 - start3).toFixed(3)} ms`);



