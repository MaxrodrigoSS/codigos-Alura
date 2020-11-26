console.log("Trabalhando Com Condicionais");

const listaDeDestinos = new Array('Salvador', 'São Paulo', "Rio De Janeiro");

const idadeComprador = 18;
const estaAcompnhada = false;
let temPassagemComprada = false;
const destino = "Rio De Janeiro"

console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompnhada == true

let contador = 0
let destinoExiste = false
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe")
        destinoExiste = true
        break
    }
    contador += 1;
}

if (podeComprar && destinoExiste) {
    console.log("Boa Viagem");
} else {
    console.log("Desculpe tivemos um erro!");
}