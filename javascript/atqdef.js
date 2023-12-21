const ataque = prompt("Qual o nome do atacante? ")
const poderAtaque = parseFloat(prompt("Qual o poder de Ataque"))

const defensor = prompt("Qual o nome do defensor? ")
const defesa = parseFloat(prompt("Qual a sua defesa? "))
const possuiEscudo = prompt("Possui Escudos? Responda SIM ou NAO")
const qtdVida = parseInt("Quantos pontos de Vida? ")

if (possuiEscudo === "SIM") {
    const qtdEscudo = parseInt("Quanto de Escudo ")
    if (qtdEscudo > poderAtaque) {
        qtdEscudo - poderAtaque
        console.log("Escudo: " + qtdEscudo)
    } else if (qtdEscudo < poderAtaque) {
        qtdEscudo - poderAtaque
        console.log("Escudo Quebrou")
    }
} elseif(possuiEscudo === "NAO")
if (poderAtaque > defesa) {
    console.log("Morreu")
} else if (poderAtaque < defesa) {
    console.log("Ta Vivo")
}


else {
    console.log("Fim")
}


