var caixaDeEntrada = require('./html/CaixaDeEntrada');
var ultimasMensagens = require('./html/UltimasMensagens');
var responder = require('./html/Responder');

class CTMensagem {

    constructor(config = null) {

        this.config = {};
        this.mensagens = [];

        if ( config !== null ) {
            this.config = Object.assign(this.config, config);

        }

    }

    renderCaixaDeEntrada( elemento ) {
        $( elemento ).addClass('ct-mensagem');

        if ( ! Array.isArray(this.mensagens) ) {
            $( elemento ).html('<p>Mensagens não encontradas, favor recarregue a página!</p>');
        }

        $( elemento ).html( caixaDeEntrada( this.mensagens, this.config ) );
    }

    renderUltimasMensagens( elemento ) {
        $( elemento ).addClass('ct-ultimas-mensagens');

        if ( ! Array.isArray(this.mensagens) ) {
            $( elemento ).html('<p>Mensagens não encontradas, favor recarregue a página!</p>');
        }

        $( elemento ).html( ultimasMensagens( this.mensagens, this.config ) );
    }

    renderResponder( mensagem, elemento ) {

        $( elemento ).addClass('ct-mensagem-reply');

        $( elemento ).html( responder(mensagem), this.config );

        $( '#ctM_divResponderRenderized' ).attr('data-codigo', mensagem.alerta.codigo);

    }

    setMensagens(mensagens) {

        if ( ! Array.isArray(this.mensagens) ) {
            console.warn('Mensagens deve ser um Array.');
            return;
        }

        this.mensagens = mensagens;

    }

    btnLidaNaoLidaClick(fn) {

        if ( typeof fn === 'function') {

            let ctMensagem = this;

            $('.btn-marcar-como-nao-lida').click(function(){


                var id = $(this).closest('.inbox-row').attr('data-codigo');

                var mensagem = ctMensagem.getMsgById( id );

                fn(mensagem);
            });
        } else {
            console.error('Você deve passar uma função como parâmetro.');
        }


    }

    btnResponderClick(fn) {

        if ( typeof fn === 'function') {

            let ctMensagem = this;

            $('.btn-responder').click(function(){

                var id = $(this).closest('.inbox-row').attr('data-codigo');

                var mensagem = ctMensagem.getMsgById( id );

                fn(mensagem);
            });
        } else {
            console.error('Você deve passar uma função como parâmetro.');
        }


    }


    btnExcluirClick(fn) {

        if ( typeof fn === 'function') {

            let ctMensagem = this;

            $('.btn-excluir').click(function(){

                var id = $(this).closest('.inbox-row').attr('data-codigo');

                var mensagem = ctMensagem.getMsgById( id );

                fn(mensagem);
            });
        } else {
            console.error('Você deve passar uma função como parâmetro.');
        }


    }

    btnEnviarRespostaClick(fn) {

        if ( typeof fn === 'function') {

            let ctMensagem = this;

            $('#ctM_btnEnviar').click(function() {

                let divResponder = $(this).closest('#ctM_divResponderRenderized');

                let resposta = {

                    titulo: divResponder.find('input[name=titulo]').val(),

                    texto: divResponder.find('textarea[name=texto]').val()

                };

                let id = $(this).closest('#ctM_divResponderRenderized').attr('data-codigo');

                let mensagem = ctMensagem.getMsgById( id );

                fn(mensagem, resposta);

            });
        }

    }

    getMsgById(id) {
        if ( Array.isArray(this.mensagens) ) {
            let rMsg = null;
            this.mensagens.forEach(function (msg) {
                if (msg.alerta.codigo === parseInt( id )) {
                    rMsg = msg;
                    return;
                }
            });
            return rMsg;
        } else {
            console.error('Mensagens devem ser Array.');
        }
    }

}

module.exports = CTMensagem;
