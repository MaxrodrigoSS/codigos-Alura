var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    console.log("buscando ...")
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http: //127.0.0.1:5500/index.html");

    xhr.addEventListener("load", function() {
        console.log(xhr.responseText);
    });


    xhr.send();
})