
document.querySelector("#btn-inicio").addEventListener("click", function (){
    window.open('https://www.youtube.com');
});

window.addEventListener('load', function() {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        this.alert('Você não pode acessar esta página! Faça o Login e tente novamente.');
        window.location.href = '/inicial/site.html';
    }
});