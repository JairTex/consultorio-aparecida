var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = capturarDadosPaciente(form);

    var pacienteTr = gerarPacienteTr(paciente);

    adicionarNaTabelaPacientes(pacienteTr);

    limparForm();
});