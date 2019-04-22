var fn = require("../funcoes/fn");

ConversaHTML = function( conversa, config ) {
    return conversaRend(conversa, config );
}

var conversaRend = function( conversa, config ) {

    var html = `
    <div class="ibox ct-info-mensagem"  data-codigo="${conversa[0].alerta.codigo}">
            <div class="ibox-title">
                <h2 style="font-weight: bold;">${conversa[0].alerta.titulo}</h2>
            </div>

            <div class="ibox-content ibox-mensagem">

                <div class="row">
                    <div class="text-left col-md-6">
                        ${btnResponder()}
                        ${btnExcluir()}
                    </div>
                </div>`;
                //

    conversa.forEach(function(mensagem){
        html += mensagemConversa( mensagem, config );
    })


    html += `</div>
        </div>
    `;

    return html;

}

var mensagemConversa = function(mensagem, config) {
    let foto = ( mensagem.alerta.user.foto === null ) ? config.base_url + '/images/sem_foto.jpg' : config.webservice_url + '/Usuario/' + mensagem.alerta.user.foto;
    return `
    <div class="row mensagem-cabecalho">
                        <div class="col-xs-4 col-xs-offset-4 col-sm-2 col-sm-offset-0 col-md-1">
                            <img class="img-responsive img-circle" src="${foto}" alt="Foto de ${mensagem.alerta.user.name}">
                        </div>
                        <div class="col-xs-12 col-sm-10 col-md-11">
                            <h3>${mensagem.alerta.user.name}</h3>
                            <small>${moment(mensagem.alerta.created_at).format('DD/MM/YYYY')} as ${moment(mensagem.alerta.created_at).format('HH:mm:ss')}</small>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 mensagem-texto">
                            ${mensagem.alerta.texto.replace(/\r?\n/g, '<br />')}
                        </div>
                    </div>
    `;
}

var btnResponder = function() {
    return `<button class="btn btn-success btn-sm btn-responder" id="bt-responder" title="Responder"><i class="fas fa-reply" style="width: 20px"></i>
                            Responder</button>`;
}

var btnExcluir = function() {
    return `<button class="btn btn-danger btn-sm btn-excluir" id="bt-excluir" title="Excluir"><i class="fas fa-trash-alt" style="width: 20px"></i>
                            Excluir</button>`;
}

module.exports = ConversaHTML;