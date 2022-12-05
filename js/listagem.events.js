var cardTemplate = '<div class="card"><div class="card-body"><h5 class="card-title">{NOME}</h5><p class="card-text">{MENSAGEM}</p><p class="card-text"><small class="text-muted">{EMAIL}</small></p> </div> </div>';

var CONTATOS = [];

window.addEventListener('load', function (event) {

    if (JSON.parse(localStorage.getItem('CONTATOS'))) {
        CONTATOS = JSON.parse(localStorage.getItem('CONTATOS'));
    }
    console.log(CONTATOS);

    CONTATOS.forEach(element => {
        let divMensagens = document.getElementById('divMensagens');
        let mensagemHTML = cardTemplate
            .replace('{NOME}', element.nome)
            .replace('{MENSAGEM}', element.mensagem)
            .replace('{EMAIL}', element.email);

        divMensagens.innerHTML += mensagemHTML;
    });
});

document.querySelector('#btnLimpar').addEventListener('click', function (event) {
    CONTATOS = [];
    localStorage.clear();
});