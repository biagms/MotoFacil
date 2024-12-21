document.getElementById("botaoEntrar").addEventListener("click", function(event) {
    alert("Logado com sucesso!")
});

document.getElementById("nome-telefone").addEventListener("keypress", function(event) {
    console.log(`Tecla pressionada ${event.key}`);
});

document.getElementById("senha").addEventListener("keypress", function(event) {
    console.log(`Tecla pressionada ${event.key}`);
});