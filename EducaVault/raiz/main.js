import { pessoas } from './pessoas.js'
//POP UP
function Validaract() {
    if(VerificarLogin(emailInserido, senhaInserida)) {
        document.getElementById("submit").addEventListener("click", function(event) {
            event.preventDefault();
            window.l
            Submit();
        });
    }
    document.querySelector("#show-login").addEventListener("click", function (){
        document.querySelector(".popup").classList.add("active");
    });
    document.querySelector(".popup .close-btn").addEventListener("click", function (){
        document.querySelector(".popup").classList.remove("active");
    });

}
Validaract()
//POP UP OUTRO BOTÃO
document.querySelector("#acessar-at").addEventListener("click", function (){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click", function (){
    document.querySelector(".popup").classList.remove("active");
});
// VARIAVEIS GLOBAIS
var emailInserido = '';
var senhaInserida = '';

//FUNCTION DE ENVIO
function Submit() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    emailInserido = email.toLowerCase();
    senhaInserida = senha;
    if(VerificarLogin(emailInserido, senhaInserida)) {
        alert("Login válido!");
        salvarCredenciais();
        localStorage.setItem('isLoggedIn', 'true');
        redirecionarParaAtividades();
    } else {
        mostrarErroLogin();
    }
    console.log(emailInserido, senhaInserida);
}

function VerificarLogin(email, senha) {

    let emails = localStorage.Arr1 ? JSON.parse(localStorage.getItem('Arr1')) : [];
    let senhas = localStorage.Arr2 ? JSON.parse(localStorage.getItem('Arr2')) : [];

    let isStored = emails.includes(email) && senhas[emails.indexOf(email)] === senha;

    if (!isStored) {
        return pessoas.some(pessoa => pessoa.email === email && pessoa.senha === senha);
    }
    return true;
}
function verificarCredenciaisNoLocalStorage(email, senha) {
    let emails = localStorage.Arr1 ? JSON.parse(localStorage.getItem('Arr1')) : [];
    let senhas = localStorage.Arr2 ? JSON.parse(localStorage.getItem('Arr2')) : [];

    return emails.includes(email) && senhas[emails.indexOf(email)] === senha;
}
function mostrarErroLogin() {
    alert('Login inválido!');
}

function salvarCredenciais() {
    let emails = [];
    let senhas = [];
    
    if (localStorage.Arr1) {
        emails = JSON.parse(localStorage.getItem('Arr1'));
        
    }

    if (localStorage.Arr2) {
        senhas = JSON.parse(localStorage.getItem('Arr2'))
    }

    emails.push(emailInserido);
    senhas.push(senhaInserida);

    localStorage.Arr1 = JSON.stringify(emails);
    localStorage.Arr2 = JSON.stringify(senhas);
}

function redirecionarParaAtividades() {
    window.location.href = '/materias/atividades.html'
}
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    Submit();
});

//Verificação ao carregar a página 