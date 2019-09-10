ultimosInformativos = function(mensagens, config) {
    // var html = '';
    // mensagens.forEach((mensagem, index) => {
    //     if ( index > 4 ) {
    //         return;
    //     }
    //     html += itemUltimosInformativos(mensagem, config);
    // })
    // html += `
    //         <li>
    //             <div class="text-center link-block">
    //                 <a href="${config.base_url}/avisos/informativos" class="dropdown-item">
    //                     <strong>Ver todas</strong>
    //                     <i class="fa fa-angle-right"></i>
    //                 </a>
    //             </div>
    //         </li>
    //         `
    // return html;

    let items = itemUltimosInformativos(mensagem, config);

    let li = document.createElement('li');
    let div = document.createElement('div');
    div.setAttribute('class', 'text-center link-block');
    let a = document.createElement('a');
    a.setAttribute('href', config.base_url +'/avisos/informativos');
    a.setAttribute('class', 'dropdown-item');
    a.innerHTML = '<strong>Ver todas</strong> <i class="fa fa-angle-right"></i>';

    div.appendChild(a);

    li.appendChild(div);

    return li;
}

itemUltimosInformativos = function(mensagem, config) {
    var classNoRead = (mensagem.read_at === null) ? 'no-read' : ''
    var foto = (mensagem.alerta.user.foto === null) ? config.base_url + '/images/sem_foto.jpg' : config.webservice_url + '/Usuario/' + mensagem.alerta.user.foto
    // var html = `
    //                 <li class="${classNoRead} notification-item" data-codigo="${mensagem.alerta.codigo}">
    //                     <div class="dropdown-messages-box">
    //                         <a class="dropdown-item pull-left" style="padding: 5px">
    //                             <img alt="" class="img-circle" src="${foto}">
    //                         </a>
    //                         <div class="pull-right" style="width:80%">
    //                             Mensagem de <strong>${mensagem.alerta.user.name}</strong>: ${mensagem.alerta.titulo}.<br>
    //                             <small class="text-muted">Em ` + moment(mensagem.alerta.created_at).format('DD/MM/YYYY') + `</small>
    //                         </div>
    //                     </div>
    //                 </li>
    //                 <li role="separator" class="dropdown-divider divider"></li>`;
    // return html;

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

    let liSeparador = document.createElement('li');
    liSeparador.setAttribute('role', 'separator')
    liSeparador.setAttribute('class','dropdown-divider divider');

    a.appendChild(img);
    divDropDown.appendChild(a);
    divDropDown.appendChild(divTexto);
    li.appendChild(divDropDown);
    li.appendChild(liSeparador);
    return li;

}

module.exports = ultimosInformativos;
