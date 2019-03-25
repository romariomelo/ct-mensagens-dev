ultimasMensagens = function(mensagens, config) {
    var html = '';
    mensagens.forEach((mensagem, index) => {
        if ( index > 4 ) {
            return;
        }
        html += itemUltimasMensagens(mensagem, config);
    })
    html += `
            <li>
                <div class="text-center link-block">
                    <a href="${config.base_url}/avisos/mensagens" class="dropdown-item">
                        <strong>Ver todas</strong>
                        <i class="fa fa-angle-right"></i>
                    </a>
                </div>
            </li>
            `
    return html;
}

itemUltimasMensagens = function(mensagem, config) {
    var classNoRead = (mensagem.read_at === null) ? 'no-read' : ''
    var foto = (mensagem.alerta.user.foto === null) ? config.base_url + '/images/sem_foto.jpg' : config.webservice_url + '/Usuario/' + mensagem.alerta.user.foto
    var html = `
                    <li class="${classNoRead} notification-item" data-codigo="${mensagem.alerta.codigo}">
                        <div class="dropdown-messages-box">
                            <a class="dropdown-item pull-left" style="padding: 5px">
                                <img alt="" class="img-circle" src="${foto}">
                            </a>
                            <div class="pull-right" style="width:80%">
                                Mensagem de <strong>${mensagem.alerta.user.name}</strong>: ${mensagem.alerta.titulo}.<br>
                                <small class="text-muted">Em ` + moment(mensagem.alerta.created_at).format('DD/MM/YYYY') + `</small>
                            </div>
                        </div>
                    </li>
                    <li role="separator" class="dropdown-divider divider"></li>`;
    return html;
}

module.exports = ultimasMensagens;