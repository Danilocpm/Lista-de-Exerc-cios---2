// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.

function Fatorial(n) {
    if(n === 0)  { // se o n for 0 ele tem que retornar 1
        return 1
    } 
    else {
        // recursividade vai tornar a primeira execucao a ultima portanto
        // 5 * Fatorial(4) --- vai buscar o resultado de Fatorial de 4
        // 4 * Fatorial(3) --- vai buscar o resultado do fatorial de 3...
        // 1 * Fatorial(0) --- Quando chegar aqui e chamar a funcao fatorial de 0 vai retornar 1 por conta do if e ai teremos a escada inversa
        // 2 * 1 = 2
        // 3 * 2 = 6
        // 4 * 6 = 24
        // 5 * 24 = 120
        return n * Fatorial(n - 1)

    }

}

console.log(Fatorial(5))