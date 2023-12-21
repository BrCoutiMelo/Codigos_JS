let cidades = ''
let contagem = 0

prompt("Qual o seu nome? ")
let respo = prompt("Voce ja visitou uma cidade Sim ou Nao?")

while(respo === "Sim"){
    let cidade = prompt("Qual cidade vistiou ?")
    cidades += "- " + cidade + "\n"
    contagem++
    respo = prompt("Voce ja visitou uma outra cidade Sim ou Nao?")
    console.log("PAssou")
}

alert(cidades)