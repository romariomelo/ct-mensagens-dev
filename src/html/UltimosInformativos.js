ultimosInformativos = function(mensagens, config) {
    let listElement = [];

    mensagens.forEach((mensagem, index) => {
        if ( index > 4 ) {
            return;
        }
        listElement[listElement.length] = itemUltimosInformativos(mensagem, config);
        let liSeparador = document.createElement('li');
        liSeparador.setAttribute('role', 'separator')
        liSeparador.setAttribute('class','dropdown-divider divider');
        listElement[listElement.length] = liSeparador;
    });

    let liVerMais = document.createElement('li');
    liVerMais.setAttribute('class', 'text-center link-block');
    let a = document.createElement('a');
    a.setAttribute('href', config.base_url +'/avisos/informativos');
    a.setAttribute('class', 'dropdown-item');
    a.setAttribute('style', 'text-align: center');
    a.innerHTML = '<strong>Ver todas</strong> <i class="fa fa-angle-right"></i>';

    liVerMais.appendChild(a);

    listElement[listElement.length] = liVerMais;

    return listElement;
}

itemUltimosInformativos = function(mensagem, config) {
    var classNoRead = (mensagem.read_at === null) ? 'no-read' : ''
    var foto = (mensagem.alerta.user.foto === null) ? config.base_url + '/images/sem_foto.jpg' : config.webservice_url + '/Usuario/' + mensagem.alerta.user.foto

    let li = document.createElement('li');
    li.setAttribute('class', `${classNoRead} notification-item`);
    li.setAttribute('data-codigo', `${mensagem.alerta.codigo}`);

    let divDropDown = document.createElement('div');
    divDropDown.setAttribute('class', 'dropdown-messages-box');

    let a = document.createElement('a');
    a.setAttribute('class', 'dropdown-item pull-left');
    a.setAttribute('style', 'padding: 5px');

    let img = document.createElement('img');
    img.setAttribute('class', 'img-circle');
    img.setAttribute('src', foto);

    let divTexto = document.createElement('div');
    divTexto.setAttribute('class', 'pull-right');
    divTexto.setAttribute('style', 'width:80%');
    divTexto.innerHTML = `Mensagem de <strong>${mensagem.alerta.user.name}</strong>: ${mensagem.alerta.titulo}.<br><small class="text-muted">Em ` + moment(mensagem.alerta.created_at).format('DD/MM/YYYY') + `</small>`;



    a.appendChild(img);
    divDropDown.appendChild(a);
    divDropDown.appendChild(divTexto);
    li.appendChild(divDropDown);
    return li;

}

module.exports = ultimosInformativos;
