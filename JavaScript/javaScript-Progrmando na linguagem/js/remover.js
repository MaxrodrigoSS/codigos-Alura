var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut");

    //faz o java script esperar um pouco
    setTimeout(function() {
        event.target.parentNode.remove(); //exclui a td
    }, 500);
});