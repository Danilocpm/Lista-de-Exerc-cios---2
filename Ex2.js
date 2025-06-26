// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')() // biblioteca para chamar o prompt

function Advinhador() {
    let num = Math.floor((Math.random() * 100) + 1) // Math floor faz o random number se tornar inteiro, o *100 e o +1 tornam a sequencia de 1(inclusiva) a 100(inclusiva)
    let guess // var do numero usado para advinhacao
    let sequence = 0 // var do num de sequencias que sera perguntado

    // Do/While vai repetir uma vez ao menos ate ser solucionado
    do {

        if(sequence >= 1) { // Se a sequencia for 0 logo a primeira vez nao tem porque informar se esta perto ou nao
            if(num - guess < 0) { // Se a guess for maior que o num ent vai dar numero negativo logo o num e mais baixo que a guess
                console.log("Mais baixo")
            } else {
                console.log("Mais alto")
            }
        }

        guess = Number(prompt("Insira um numero de 1 a 100: ")) // Pergunta o valor
        sequence++ // Aumenta em 1 a sequencia

    } while(guess != num)

    console.log(`Parabéns!!!! Você acertou em ${sequence} tentativas!`) // Se sair do loop para essa parte e pq guess = num

}

Advinhador()
