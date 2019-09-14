var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector('.info-imc')

    var pesoEhValido = true
    var alturaEhValida = true

    if (peso <= 0 || peso >= 1000) {
        console.log("peso invalido");
        pesoEhValido = false
        tdImc.textContent = 'Peso Invalido!'
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("altura invalido");
        alturaEhValida = false
        tdImc.textContent = ' Altura Invalida!'
        paciente.classList.add("paciente-invalido");
    }
    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura)
        tdImc.textContent = Math.round(imc)
    }

}
var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function(event) {
    event.preventDefault();
    var form = document.querySelector('#form-adiciona');
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    console.log(nome);
    console.log(peso);
    console.log(altura);
    console.log(gordura);

})