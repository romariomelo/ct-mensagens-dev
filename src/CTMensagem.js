//import {setHtml} from "./html/html";
var caixaDeEntrada = require('./html/CaixaDeEntrada');
var ultimasMensagens = require('./html/UltimasMensagens');

class CTMensagem {

    constructor(config = null) {

        this.config = {};
        this.mensagens = [];

        if ( config !== null ) {
            this.config = Object.assign(this.config, config);

        }

    }

    renderCaixaDeEntrada( elemento ) {
        console.log('Renderizando caixa de entrada em: ' + elemento);
        $( elemento ).addClass('ct-mensagem');
        $( elemento ).html( caixaDeEntrada( this.mensagens, this.config ) );
    }

    renderUltimasMensagens( elemento ) {
        console.log('Renderizando ultimas mensagens em: ' + elemento);
        $( elemento ).addClass('ct-ultimas-mensagens');
        $( elemento ).html( ultimasMensagens( this.mensagens, this.config ) );
    }

    setMensagens(mensagens) {

        this.mensagens = mensagens;

    }

    btnNaoLidaClick(fn) {

        if ( typeof fn === 'function') {

            $('.btn-marcar-como-nao-lida').click(function(){

                var mensagem = $(this).closest('.inbox-row').attr('data-codigo');

                fn(mensagem);
            });
        } else {
            console.error('Você deve passar uma função como parâmetro.');
        }


    }

    btnResponderClick(fn) {

        if ( typeof fn === 'function') {

            $('.btn-responder').click(function(){

                var mensagem = $(this).closest('.inbox-row').attr('data-codigo');

                fn(mensagem);
            });
        } else {
            console.error('Você deve passar uma função como parâmetro.');
        }


    }


    btnExcluirClick(fn) {

        if ( typeof fn === 'function') {

            $('.btn-excluir').click(function(){

                var mensagem = $(this).closest('.inbox-row').attr('data-codigo');

                fn(mensagem);
            });
        } else {
            console.error('Você deve passar uma função como parâmetro.');
        }


    }

}

module.exports = CTMensagem;
