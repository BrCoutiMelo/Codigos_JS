const numero_escolhido = parseFloat(prompt("Digite um numero "))

let resultado = ""

for (let i = 1; i <= 20; i++) {
    resultado += numero_escolhido + " * " + i + " = " + (numero_escolhido * i) + "\n";
}

//for (let i = 1; i <= 20; i++) {
//    resultado += numero_escolhido + " * " + i + " = " (numero_escolhido * i)
    
//}
alert("resultado: " + resultado)