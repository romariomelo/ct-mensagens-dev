//import {setHtml} from "./html/html";
var caixaDeEntrada = require('./html/CaixaDeEntrada');

class CTMensagem {

    constructor(elemento, config = null) {

        this.config = {};
        this.mensagens = [];
        this.elemento = elemento;

        $( this.elemento ).addClass('ct-mensagem');

        console.log( typeof config )
        if ( config !== null ) {
            this.config = Object.assign(this.config, config);

        }

    }

    renderCaixaDeEntrada() {
        $( this.elemento ).html( caixaDeEntrada( this.mensagens, this.config ) );
    }

    setMensagens(mensagens) {

        this.mensagens = mensagens;

    }

}

module.exports = CTMensagem;
