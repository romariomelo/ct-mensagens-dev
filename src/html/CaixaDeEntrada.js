
caixaDeEntrada = function(mensagens, config) {
    var html = '';
    mensagens.forEach((mensagem) => {
        html += itemMensagem(mensagem, config)
    })
    return html;
}

itemMensagem = function(mensagem, config) {
    var classNoRead = (mensagem.read_at === null) ? 'no-read' : '';
    let foto = ( mensagem.alerta.user.foto === null ) ? config.base_url + '/images/sem_foto.jpg' : config.webservice_url + '/Usuario/' + mensagem.alerta.user.foto;
    return `
    <div class="row inbox-row ${classNoRead}">
        <div class="col col-xs-12 col-sm-3 col-sm-push-9 text-right">
            <button class="btn btn-default" title="Excluir Mensagem">
                <i class="fa fa-trash"></i>
            </button>
            <button class="btn btn-default" title="Responder">
                <i class="fa fa-reply"></i>
            </button>
            <button class="btn btn-default" title="Marcar mensagem como não lida">
                <i class="fa fa-envelope"></i>
            </button>
        </div>
        <div class="col col-xs-12 col-sm-1 col-sm-pull-3 inbox-avatar">
            <a href="${config.base_url}/avisos/mensagens/${mensagem.alerta.codigo}">
                <img src="${foto}" class="img-responsive img-circle">
            </a>
        </div>
        <div class="col col-xs-12 col-sm-8 col-sm-pull-3">
            <a href="${config.base_url}/avisos/mensagens/${mensagem.alerta.codigo}">
                <h4 class="inbox-nome">${mensagem.alerta.user.name}</h4>
                <h4 class="inbox-assunto">${mensagem.alerta.titulo}</h4>
            </a>
        </div>
    </div>
    `
}

module.exports = caixaDeEntrada;