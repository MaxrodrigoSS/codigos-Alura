console.log("Trabalhando Com Condicionais");

const listaDeLugares = new Array('Salvador', 'São Paulo', "Rio De Janeiro");
const estaAcompanhado = true
const idadeDoComprador = 15;

console.log("Destinos diponiveis.");
console.log(listaDeLugares);

if (idadeDoComprador >= 18 || estaAcompanhado) {
    console.log("Boa Viagem.");
} else {
    console.log("Comprador menor de idade, não podemos vender.");
}