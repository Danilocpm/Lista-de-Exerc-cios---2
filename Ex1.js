// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano) {
    // a regra de ano bissexto e primeiramente se ele e um ano de seculo ou nao (1900,2000,2100...)
    // se for ele apenas e bissexto se for divisivel por 400 (2400 por exemplo)
    // se nao for ano de seculo, se encaixa qualquer um divisivel por 4
    function bissexto(ano) {
        return (ano % 100 !== 0 && ano % 4 === 0) || (ano % 400 === 0)
    }

    if(mes < 1 || mes > 12) return false // mes tem q estar entre 1 e 12
    if(dia < 1) return false // dia negativo e dia zero nao existe

    // array com os n de dias de cada mes
    // em fevereiro usamos a funcao anterior (bissexto) com um if a depender de seu resultado
    const diasPorMes = [31, bissexto(ano) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] 

    // valida se o dia passado bate com um mes compativel com o do mes respectivo
    return dia <= diasPorMes[mes - 1] // usamos mes - 1 pq o array inicia em zero

}

console.log(ehDataValida(29, 2, 2024))
console.log(ehDataValida(29, 2, 2023))
console.log(ehDataValida(31, 4, 2023))
console.log(ehDataValida(30, 4, 2023))


