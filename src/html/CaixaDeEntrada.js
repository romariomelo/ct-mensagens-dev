//import {lerMais} from "../funcoes/fn";
var fn = require("../funcoes/fn");

caixaDeEntrada = function(mensagens, config) {
    if (mensagens.length === 0) {
        return caixaDeEntradaVaziaHtml();
    }

    var html = cabecalhoCaixaDeEntrada(config);
    mensagens.forEach((mensagem) => {
        html += itemCaixaDeEntrada(mensagem, config)
    })
    return html;
}

cabecalhoCaixaDeEntrada = function(config) {
    return `
    <div class="row">
    ${btnRetornar(config)}
    ${btnCaixaDeEntrada(config)}
    ${btnMensagensEnviadas(config)}
    ${btnNovaMensagem(config)}    
    </div>
    `;
}

itemCaixaDeEntrada = function(mensagem, config) {
    let classNoRead = (mensagem.read_at === null) ? 'no-read' : '';

    let foto = ( mensagem.alerta.user.foto === null ) ? config.base_url + '/images/sem_foto.jpg' : config.webservice_url + '/Usuario/' + mensagem.alerta.user.foto;

    let titulo = fn.lerMais(mensagem.alerta.titulo);

    return `
    <div class="row inbox-row ${classNoRead}" data-codigo="${mensagem.alerta.codigo}">
        <div class="col col-xs-12 col-sm-3 col-sm-push-9 text-right">
            ${btnExcluir(mensagem)}
            ${btnResponser(mensagem)}
            ${btnLidaNaoLida(mensagem)}
        </div>
        <div class="col col-xs-12 col-sm-1 col-sm-pull-3 inbox-avatar">
            <a href="${config.base_url}/avisos/mensagens/${mensagem.alerta.codigo}">
                <img src="${foto}" class="img-responsive img-circle">
            </a>
        </div>
        <div class="col col-xs-12 col-sm-8 col-sm-pull-3">
            <a href="${config.base_url}/avisos/mensagens/${mensagem.alerta.codigo}">
                <h4 class="inbox-nome">${mensagem.alerta.user.name}</h4>
                <h5 class="inbox-assunto">${titulo}</h5>
                <small>${moment(mensagem.alerta.created_at).format('DD/MM/YYYY')}</small>
            </a>
        </div>
    </div>
    `;
}

var btnExcluir = function(mensagem) {
    return `
            <button class="btn btn-default btn-excluir" title="Excluir Mensagem">
                <i class="fa fa-trash"></i>
            </button>
    `;
}

var btnLidaNaoLida = function(mensagem) {
    let fa = (mensagem.read_at === null) ? 'fa-envelope-open' : 'fa-envelope';
    let title = (mensagem.read_at === null) ? 'Marcar mensagem como lida.' : 'Marcar mensagem como não lida' ;
    return `
        <button class="btn btn-default btn-marcar-como-nao-lida" title="${title}">
            <i class="fa ${fa}"></i>
        </button>
    `;
}

var btnResponser = function(mensagem) {
    return `
            <button class="btn btn-default btn-responder" title="Responder">
                <i class="fa fa-reply"></i>
            </button>
    `;
}

var caixaDeEntradaVaziaHtml = function() {
    return `
    <h2>Você não possui mensagens!</h2>
    `;
}

var btnRetornar = function(config) {
    return `
<div class="form-group  col-lg-2 col-md-3 col-sm-6">
	<a href="${config.base_url}">
		<button class="btn btn-danger btn-block" type="button"><i class="fa fa-arrow-left"></i> Retornar
		</button>
	</a>
</div>`;
}

btnCaixaDeEntrada = function(config) {
    return `<div class="form-group  col-lg-2 col-md-3 col-sm-6">
                    <button class="btn btn-white btn-block" disabled="" type="button" id="bt-caixa-de-entrada"><i class="fas fa-envelope"></i> Caixa de
                        entrada
                    </button>

                </div>`;
}

btnMensagensEnviadas = function(config) {
    return `<div class="form-group  col-lg-2 col-md-3 col-sm-6">
                    <button class="btn btn-white btn-block" type="button" id="bt-minhas-mensagens"><i class="fas fa-share-square"></i> Mensagens enviadas
                    </button>
                </div>`;
}

btnNovaMensagem = function(config) {
    return `<div class="form-group  col-lg-2 col-md-3 col-sm-6">
                    <button class="btn btn-white btn-block" type="button" id="bt-nova-mensagem"><i class="fa fa-plus"></i> Nova mensagem
                    </button>
                </div>`;
}

module.exports = caixaDeEntrada;