function criarLinhaPaciente(classname){
    var tr = document.createElement("tr");
    tr.classList.add(classname);
    return tr;
}

function criarLinhaDado(classname, tdTextContent){
    var td = document.createElement("td");
    td.classList.add(classname);
    td.textContent = tdTextContent;
    return td;
}

function gerarPacienteTr(paciente){
    if ((paciente.peso <= 0 || paciente.peso >= 500) || (paciente.altura <= 0 || paciente.altura >= 3.00)) {
        var mensagemErro = document.querySelector('#mensagem-erro');
        mensagemErro.textContent = 'Cadastro Inválido: Verifique os dados!'
        return
    } else {
        var mensagemErro = document.querySelector('#mensagem-erro');
        mensagemErro.textContent = ''
        var pacienteTr = criarLinhaPaciente("paciente");        
    }

    pacienteTr.appendChild(criarLinhaDado("info-nome", paciente.nome));
    pacienteTr.appendChild(criarLinhaDado("info-peso", paciente.peso));
    pacienteTr.appendChild(criarLinhaDado("info-altura", paciente.altura));
    pacienteTr.appendChild(criarLinhaDado("info-gordura", paciente.gordura));
    pacienteTr.appendChild(criarLinhaDado("info-imc", paciente.imc));

    return pacienteTr;
}

function adicionarNaTabelaPacientes(tr){
    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(tr);
}

function limparForm(){
    var form = document.querySelector("#form-adiciona");

    form.nome.value = '';
    form.peso.value = '';
    form.altura.value = '';
    form.gordura.value = '';
}