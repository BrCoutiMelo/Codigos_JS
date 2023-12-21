let saldo = parseFloat(prompt("Qual o seu Saldo? "))
let opcao = ""

do {
    opcao = prompt("Seu saldo é: " + saldo +
    "\n Escolha uma opção: " + 
    "\n 1) Adcionar Mais " +
    "\n 2) Remover " +
    "\n 3) Encerrar ")

    switch (opcao) {
        case "1":
            saldo += parseFloat((prompt("Quanto vai adicionar?")))
            alert(parseFloat(saldo))
            break;
        case "2":
            saldo -= parseFloat((prompt("Quanto vai remover? ")))
            alert(parseFloat(saldo))
            break;
        default:
            alert("Opção Inválida");
    }

} while (opcao !== 3);
