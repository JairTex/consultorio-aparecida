var documentvar = document.querySelector(".titulo");
documentvar.textContent = "Aparecida Nutricionista";
var pacientes = document.querySelectorAll('.paciente');

function imc(paciente){
    var peso = paciente.querySelector('.info-peso').textContent;
    var altura = paciente.querySelector('.info-altura').textContent;

    if ((peso < 0 || peso >= 1000) || (altura < 0 || altura >= 3.00)) {
        paciente.querySelector('.info-imc').textContent = "Inválido";
        paciente.classList.add("paciente-invalido");
        /*
        paciente.style.background = "#FF0000";
        paciente.style.color = "#FFFFFF";*/
    }else{
        var imc = (peso / (altura * altura)).toFixed(2);
        paciente.querySelector('.info-imc').textContent = imc;
    };
};

for (let paciente = 0; paciente < pacientes.length; paciente++) {
    imc(pacientes[paciente])    
};


