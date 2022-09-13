var tabelaPaciente = document.querySelector("table");

tabelaPaciente.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 450);
});