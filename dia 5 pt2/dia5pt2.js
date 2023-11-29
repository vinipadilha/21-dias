let escolha = prompt("Voçê deseja abastecer com gasolina(digite 1), com álcool(digite 2) ou calibrar os pneus(digite 3)")
let quantidade 
let valor 

switch (escolha) {
    case '1': 
    valor = Number(prompt("Digite o valor desejado"))
    quantidade = valor / 5
    console.log("Seu automovel será abastecido com " + quantidade + "L de gasolina")
        break;

    case '2' :
    valor = Number(prompt("Digite o valor desejado"))
    quantidade = valor / 3
    console.log("Seu automovel será abastecido com " + quantidade + "L de álcool")
        break;
    case '3':
        console.log("pneus calibrados com sucessos")
        break;
    default:
        break;
}