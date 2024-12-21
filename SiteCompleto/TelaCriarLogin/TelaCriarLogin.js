function validarCPF(cpf) {

    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    let soma = 0;
    let peso = 10;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf[i]) * peso--;
    }
    let digito1 = (soma * 10) % 11;
    if (digito1 === 10 || digito1 === 11) digito1 = 0;
    if (parseInt(cpf[9]) !== digito1) return false;

    soma = 0;
    peso = 11;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf[i]) * peso--;
    }
    let digito2 = (soma * 10) % 11;
    if (digito2 === 10 || digito2 === 11) digito2 = 0;
    if (parseInt(cpf[10]) !== digito2) return false;

    return true;
}

document.getElementById("criarFormulario").addEventListener("click", function () {
    event.preventDefault();
    
    const nome = document.getElementById("nomeInput").value;
    const cpf = document.getElementById("cpfInput").value;
    const telefone = document.getElementById("telefoneInput").value;
    const email = document.getElementById("emailInput").value;
    const senha = document.getElementById("senhaInput").value;
    const senhaC = document.getElementById("senhaCInput").value;

    const generos = document.getElementsByClassName("genero");
    const tiposUsuarios = document.getElementsByClassName("tipoUsuario");

    if (!validarCPF(cpf)) {
        alert("Numero de CPF inválida");
        return;
    }

    if (senha !== senhaC) {
        alert("As senhas não coincidem.");
        return;
    }

    
    let valorGenero = null;
    let valorUsuario = null;

    for (const radio of generos) {
        if (radio.checked) {
            valorGenero = radio.value;
            break;
        }
    }

    for (const radio of tiposUsuarios) {
        if (radio.checked) {
            valorUsuario = radio.value;
            break;
        }
    }

    const objPessoa = {
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        email: email,
        senha: senha,
        senhaC: senhaC,
        genero: valorGenero,
        tipoUsuario: valorUsuario
    };



    console.log(objPessoa);
    alert("Conta criada com sucesso!!");
});