// == igual 
// != diferente 
// > maior que  
// < menor que 
// >= <= maior e menor ou igual 
// === é igual valor e tipo   
// !== é diferente o valor e o tipo 
// && significa 'e'
// || significa 'ou' 

let fome = prompt("você está com fome, sim ou não")
let dinheiro = prompt("você tem dinheiro, sim ou não")
let restaurante = prompt("o restaurante está aberto, sim ou não")

if(fome === "não" || dinheiro === "não"){
    console.log("hoje a janta será em casa")
}

if(fome === "sim" && dinheiro === "sim" && restaurante === "não" ){
    console.log("peça um delivery")
}

if(fome === "sim" && dinheiro === "sim" && restaurante === "sim" ){
     console.log("hoje o jantar será no seu restaurante favorito")
}