var pacientes = document.querySelectorAll('.paciente');

function imc(paciente){
    var peso = paciente.querySelector('.info-peso').textContent;
    var altura = paciente.querySelector('.info-altura').textContent;

    var isValid = false;

    if ((peso <= 0 || peso >= 500) || (altura <= 0 || altura >= 3.00)) {
        paciente.querySelector('.info-imc').textContent = "Inválido";
        paciente.classList.add("paciente-invalido");
    }else{
        isValid = true;
    };

    if (isValid) {
        var imc = calculaIMC(peso, altura);
        paciente.querySelector('.info-imc').textContent = imc;
    }
};

function calculaIMC (peso, altura){
    return (peso / (altura * altura)).toFixed(2);
};


/*Código que roda ao carregar a tela para calcular o imc dos pacientes que estão no html */
for (let paciente = 0; paciente < pacientes.length; paciente++) {
    imc(pacientes[paciente]);    
};