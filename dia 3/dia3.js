//let e const
let nomeDoUser = prompt("insira seu nome")
let idadeDoUser = prompt("insira sua idade")
let alturaDoUser = prompt("insira sua altura")
let pesoDoUser = prompt("insira seu peso")
let IMC = pesoDoUser / (alturaDoUser * alturaDoUser)
let IDADE = 2023 - idadeDoUser
console.log("Olá, " + nomeDoUser + " , você tem " + idadeDoUser + " anos, nasceu em " + IDADE + " , tem " + alturaDoUser + " de altura, pesa " + pesoDoUser + " kg seu IMC é " + IMC + " Kg/m2")