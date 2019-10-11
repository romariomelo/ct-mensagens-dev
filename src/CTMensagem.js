var caixaDeEntrada = require('./html/CaixaDeEntrada');
var ultimasMensagens = require('./html/UltimasMensagens');
var ultimosInformativos = require('./html/UltimosInformativos');
var responder = require('./html/Responder');
var ConversaHTML = require('./html/ConversaHTML');
var mensagensEnviadasHTML = require('./html/MensagensEnviadasHTML');

class CTMensagem {

    constructor(config = null) {

        this.config = {};
        this.mensagens = [];
        this.informativos = [];

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

        $( elemento ).html( ultimasMensagens(  this.mensagens, this.config ) );
    }

    renderUltimosInformativos( elemento ) {
        $( elemento ).addClass('ct-ultimas-mensagens');

        if ( ! Array.isArray(this.mensagens) ) {
            $( elemento ).html('<p>Mensagens não encontradas, favor recarregue a página!</p>');
        }

        let listElements = ultimosInformativos( this.informativos, this.config );

        $( elemento ).html('');

        listElements.forEach(function(e){

            $( elemento ).append( e );

        })


    }

    renderResponder( mensagem, elemento ) {

        $( elemento ).addClass('ct-mensagem-reply');

        $( elemento ).html( responder(mensagem), this.config );

        //this.destroyEditor('#ctM_texto');

        //tinymce.baseURL = this.config.base_url + '/js/tinymce';

        this.createEditor( '#ctM_texto' );

        $( '#ctM_divResponderRenderized' ).attr('data-codigo', mensagem.alerta.codigo);

    }

    renderConversa( conversa, elemento ) {
        $( elemento ).html( ConversaHTML( conversa, this.config ) );
    }

    renderMensagensEnviadas(elemento, mensagens) {
        console.log( this.config );
        $( elemento ).html( mensagensEnviadasHTML( mensagens, this.config ) );
    }

    setMensagens(mensagens) {

        if ( ! Array.isArray(mensagens) ) {
            console.warn('Mensagens deve ser um Array.');
            return;
        }

        this.informativos = this.somenteInformativos( mensagens );
        this.mensagens = this.somenteMensagens( mensagens );
    }

    getMensagens() {
        return this.mensagens;
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

                var id = $(this).closest('.ct-info-mensagem').attr('data-codigo');

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

                var id = $(this).closest('.ct-info-mensagem').attr('data-codigo');

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

            $('#ctM_btnEnviarResposta').click(function() {

                //tinymce.triggerSave();

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

    btnNovaMensagemClick(fn) {

        if (typeof fn === 'function') {

            $('#bt-nova-mensagem').click(function() {

                $('.nav-msg').removeAttr('disabled');

                $(this).attr('disabled', 'disabled');

                fn();

            });

        }

    }

    btnCaixaDeEntradaClick(fn) {

        if (typeof fn === 'function') {

            $('#bt-caixa-de-entrada').click(function() {

                fn();

            });

        } else {

            console.error('Parâmetro deve ser função.');

        }

    }

    btnMensagensEnviadasClick(fn) {

        if (typeof fn === 'function') {

            $('#bt-minhas-mensagens').click(function() {

                $('.nav-msg').removeAttr('disabled');

                $(this).attr('disabled', 'disabled');

                fn();

            })

        } else {

            console.error('Parâmetro deve ser função.');

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

    setTitulo(titulo) {
        $('#iboxCaixaDeEntrada h5').text(titulo);
    }

    getQtdInformativosNaoLidos() {
        let qtd = 0;
        this.informativos.forEach(function(e) {
            if (e.read_at === null) {
                qtd++;
            }
        });
        return qtd;
    }
    getQtdMensagensNaoLidas() {
        let qtd = 0;
        this.mensagens.forEach(function(e) {
            if (e.read_at === null) {
                qtd++;
            }
        });
        return qtd;
    }

    /* BUTTONS */

    getCaixaDeEntradaButton() {
        return $('#bt-caixa-de-entrada');
    }

    getNovaMensagemButton() {
        return $('#bt-nova-mensagem');
    }

    createEditor( ele ) {

        $(ele).summernote({
            toolbar: [
                //[groupName, [list of button]]
                ['style', ['undo','redo','bold', 'italic', 'underline', 'clear', 'forecolor']],
                ['para', ['ul', 'paragraph', 'style']]
            ],
            popover: {},
            lang: 'pt-BR',
            height: '500px'
        });

    }

    destroyEditor( ele ) {
        $( ele ).summernote('destroy');
    };

    somenteInformativos(avisos) {
        return this.filtrarMenssagensInformativos( avisos, 'INFORMATIVOS');
    }

    somenteMensagens(avisos) {
        return this.filtrarMenssagensInformativos( avisos,'MENSAGEM');
    }

    filtrarMenssagensInformativos(avisos, tipo) {
        var retorno = [];
        avisos.forEach(function(e) {
            if (e.alerta.tipo === tipo) {
                retorno[retorno.length] = e;
            }
        });
        return retorno;
    }

}

module.exports = CTMensagem;
