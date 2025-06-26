// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.


function soma(a, b) {
    console.log(a + b)
}

function debounce(fn, delay) {
    let timeoutid
    return function(...args) { 
        // ...args é usado para capturar um array com todos os argumentos,
        // pois a função original pode receber múltiplos parâmetros (ex: soma(a, b))

        clearTimeout(timeoutid) 
        // Se a função já tiver sido chamada antes, cancelamos a execução anterior

        timeoutid = setTimeout(() => { 
            // A variável timeoutid guarda o ID do setTimeout,
            // que agenda a execução da função após o delay especificado (em ms)

            fn.apply(this, args) 
            // 'apply' chama a função original 'fn' passando:
            // - o contexto 'this' (para preservar o contexto correto)
            // - os argumentos como array 'args'
            // Usar 'this' aqui é uma boa prática para garantir que métodos de objetos funcionem corretamente,
            // mesmo que no caso específico não seja obrigatório
        }, delay)
    }
}


const Teste = debounce(soma, 300)

Teste(5, 6)
Teste(7, 8)
Teste(1, 1)