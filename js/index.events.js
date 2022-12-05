import { Contato } from '/js/dominio/contato.js';

var CONTATOS = [];
// Eventos
window.addEventListener('load', function (event) {
    if (JSON.parse(localStorage.getItem('CONTATOS'))) {
        CONTATOS = JSON.parse(localStorage.getItem('CONTATOS'));
    }
});

document.querySelector('#btnEnviar').addEventListener('click', function (event) {
    event.preventDefault()
    let iptNome = document.getElementById('iptNome');
    let iptEmail = document.getElementById('iptEmail');
    let txtMensagem = document.getElementById('txtMensagem');

    let contato = new Contato(iptNome.value, iptEmail.value, txtMensagem.value);

    CONTATOS.push(contato);

    // Transformar o array de objetos em string e salvar em localStorage
    localStorage.setItem('CONTATOS', JSON.stringify(CONTATOS));
});