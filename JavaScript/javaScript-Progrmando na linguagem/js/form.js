var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault(); // faz o evento de clice em um eletemento determinados
    console.log("Oi eu sou o botao e fui clicado");

    var form = document.querySelector("#form-adiciona"); // faz os eletemntos da form serem acessados
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montarTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erros;
        return;
    }

    //coloca a tr na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

})

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome = form.nome.value,
        peso = form.peso.value,
        altura = form.altura.value,
        gordura = form.gordura.value,
        imc = calculaImc(form.peso.value, form.altura.value),
    }
    return paciente
}

function montarTr(paciente) {
    // cria um tr e td no html 
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")

    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-peso");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    //adiciona o td na tr 
    pacienteTr.appendChild(nome);
    pacienteTr.appendChild(peso);
    pacienteTr.appendChild(altura);
    pacienteTr.appendChild(gordura);
    pacienteTr.appendChild(imcTd);
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add("info-nome");
    td.textContent = paciente.nome;

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}