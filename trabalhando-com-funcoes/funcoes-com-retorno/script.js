
let resultado = soma(5, 5)

console.log("O resultado desta funcão é: " + resultado);
function soma(numA, numB) {
    let somatorio = numA + numB 
    return somatorio
}

// tambem posso eliminar a variavel somatorio, e nunca ter dois valores no mesmo return

let userName = getFirstName("Jaélson José de Freitas")
console.log("Welcome ," + userName);
function getFirstName(name){
    let firstName = name.split(" ")[3]    
    return firstName
}