// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

function StrToArray (str) { // recebe a string
    let strArray = str.trim().split(/\s+/) // Remove os espacos iniciais e finais + split pega palavras entre multiplos espacos, tabulacoes e quebra de linhas + coloca tudo em um novo array
    let NewStrArray = [] // Novo array vazio

    for(let i = 0; i < strArray.length; i++) { // loop para percorrer todo array novo cheio
        if(!NewStrArray.includes(strArray[i])) { // adiciona a palavra ao array vazio se ela ja nao existir nele
            NewStrArray.push(strArray[i])
        }
    }

    return NewStrArray
}

console.log(StrToArray("olá olá mundo mundo"))