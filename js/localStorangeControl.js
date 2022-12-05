import { Contato } from '/js/dominio/contato.js';

var cardTemplate = '<div class="card"><div class="card-body"><h5 class="card-title">NOME</h5><p class="card-text">MENSAGEM</p>    <p class="card-text"><small class="text-muted">EMAIL</small></p> </div> </div>';

var CONTATOS = [];


function init() {
    if (JSON.parse(localStorage.getItem('CONTATOS'))) {
        CONTATOS = JSON.parse(localStorage.getItem('CONTATOS'));
    }
}

// if (JSON.parse(localStorage.getItem('pessoas')) === null) {
//     var pessoas = [];
// } else {
//     var pessoas = JSON.parse(localStorage.getItem('pessoas'));
// }

function limpar() {
    pessoas = [];
    localStorage.clear();
}

function listar() {
    let contatos = JSON.parse(localStorage.getItem('CONTATOS'));
    contatos.array.forEach(element => {
        console.log(element.nome);
    });
}