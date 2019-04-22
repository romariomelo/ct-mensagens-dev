ToastHTML = function() {
    return getHTMLToast();
}

var getHTMLToast = function() {
    return `
<div class="ct-toast fadeInUp animated">
<a href="#">
        <div>
        <div class="toast-close">
        <i class="fa fa-times fa-2x"></i>
        </div>
        <div class="img">
        <img src="http://webservice.colegiotimbaubense.dev.br/Usuario/images/7izECSOy8yVxsWgO0bVhzEBKqNJAB5ImG9udMMH3.png"
    alt="" class="img-circle img-responsive">
        </div>

        <p class="lbl">Nova mensagem de <strong>ROMARIO MARQUES MELO DA SILVA</strong></p>
    </div>
    </a>
</div>`;
}

module.exports = ToastHTML;