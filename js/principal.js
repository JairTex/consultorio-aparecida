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

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = (peso / (altura * altura)).toFixed(2);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);

});
