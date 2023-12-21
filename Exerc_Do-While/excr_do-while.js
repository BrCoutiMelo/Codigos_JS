let opcao = ""

do{
    opcao = prompt(
        "\n Escolha um número: \n" +
        "\n 1) Numero 1 "+
        "\n 2) Numero 2 " +
        "\n 3) Numero 3 "
        )

    switch (opcao) {
        case "1":
            alert("Vc escolheu a opção 1")
            break;
        case "2":
            alert("Vc escolheu a opcao 2")
            break;
        case "3":
            alert("Vc escolheu a opção 3")
        default:
            break;
        case "5":
            alert("Encerrando")
    }


}while(opcao !== "5")