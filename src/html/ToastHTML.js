ToastHTML = function(msg, config, idToast) {
    return getHTMLToast(msg, config, idToast);
}

var getHTMLToast = function(msg, config, idToCloseNotification) {
    let foto = (msg.autor.foto === null) ? config.base_url + '/images/sem_foto.jpg' : config.webservice_url + '/Usuario/' + msg.autor.foto;
    return `
<div class="ct-toast fadeInUp animated" id="t_${idToCloseNotification}" data-id="${msg.broadcast_messagem.id}">
    <a href="#${msg.broadcast_messagem.id}">
        <div>
            <div class="toast-close" id="toastClose">
                <i class="fa fa-times fa-2x"></i>
            </div>
            <div class="img">
                <img src="${foto}" alt="" class="img-circle img-responsive">
            </div>
            <p class="lbl">Nova mensagem de <strong>${msg.autor.name}</strong></p>
        </div>
    </a>
</div>`;
}

module.exports = ToastHTML;