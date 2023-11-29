let n1 = Number(prompt('Escolha o seu primeiro numero'))
let n2 = Number(prompt('Escolha o seu segundo numero' ))
let operacao = prompt('Escolha entre adição, subtração, multiplicação ou divisão')

switch (operacao) {
    case 'adição': console.log(n1 + n2)
        break;
    
    case 'subtração': console.log(n1 - n2)
        break;

    case 'multiplicação': console.log(n1 * n2)
        break;

    case 'divisão' : console.log(n1 / n2)
        break;
        
    default:
        break;
}