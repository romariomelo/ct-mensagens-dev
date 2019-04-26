var fn = require("../funcoes/fn");

mensagensEnviadas = function(mensagem, config) {
    return mensagensEvniadasHTML(mensagem, config);
}

var mensagensEvniadasHTML = function(mensagem, config) {
    var retorno = `<div>`;

    mensagem.forEach(function(msg){
        retorno += mensagemItemHtml(msg, config);
    });

    retorno += `</div>`;

    return retorno;
}

var mensagemItemHtml = function(mensagem, config) {
    return `
        <div class="row enviada-box" data-codigo="${mensagem.codigo}">
            <a href="${config.base_url + '/avisos/mensagens/' + mensagem.codigo}">
                <div class="col-xs-12 col-sm-8 col-lg-10">
                    <h4 style="color: green;">${mensagem.titulo}</h4>            
                    <p style="color: #333">${mensagem.texto}</p>            
                </div>   
            </a>                 
            <div class="col-xs-12 col-sm-4 col-lg-2">
                <button class="btn btn-default"><i class="fa fa-trash"></i></button>
                <small>${fn.getDataRelativa( mensagem.created_at )}</small>
            </div>                    
        </div>    
    `
}

module.exports = mensagensEnviadas;