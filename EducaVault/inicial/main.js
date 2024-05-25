import { pessoas } from './pessoas.js'
//POP UP
document.querySelector("#show-login").addEventListener("click", function (){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click", function (){
    document.querySelector(".popup").classList.remove("active");
});
//POP UP
function copyNumber(element) {
    var tempInput = document.createElement("input");

    tempInput.value = element.textContent.trim();

    document.body.appendChild(tempInput);

    tempInput.select();

    document.execCommand("copy");

    document.body.removeChild(tempInput);

    alert("Número de telefone copiado!")
}
function copyEmail(element) {
    var tempInput = document.createElement("input");

    tempInput.value = element.textContent.trim();

    document.body.appendChild(tempInput);

    tempInput.select();

    document.execCommand("copy");

    document.body.removeChild(tempInput);

    alert("E-mail copiado!")
}
//FADE INICIAL
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(function(element) {
            element.classList.add('active');
        });
    }, 500);
});
//Banco de dados teste
//LOGIN

var emailInserido = '';
var senhaInserida = '';
function Submit() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    emailInserido = email.toLowerCase();
    senhaInserida = senha;
    if(VerificarLogin(emailInserido, senhaInserida)) {
        alert("tacerto");
        window.location.href = 'atividades.html';
    } else {
        alert("taerrado")
    }
    console.log(emailInserido, senhaInserida);
}

function VerificarLogin(email, senha) {
    return pessoas.some(pessoa =>pessoa.email === email && pessoa.senha === senha);
}
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    Submit();
});
