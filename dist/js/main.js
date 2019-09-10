/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/CTMensagem.js":
/*!***************************!*\
  !*** ./src/CTMensagem.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var caixaDeEntrada = __webpack_require__(/*! ./html/CaixaDeEntrada */ "./src/html/CaixaDeEntrada.js");
var ultimasMensagens = __webpack_require__(/*! ./html/UltimasMensagens */ "./src/html/UltimasMensagens.js");
var ultimosInformativos = __webpack_require__(/*! ./html/UltimosInformativos */ "./src/html/UltimosInformativos.js");
var responder = __webpack_require__(/*! ./html/Responder */ "./src/html/Responder.js");
var ConversaHTML = __webpack_require__(/*! ./html/ConversaHTML */ "./src/html/ConversaHTML.js");
var mensagensEnviadasHTML = __webpack_require__(/*! ./html/MensagensEnviadasHTML */ "./src/html/MensagensEnviadasHTML.js");

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
        console.log('renderUltimosInformativos');
        $( elemento ).addClass('ct-ultimas-mensagens');

        if ( ! Array.isArray(this.mensagens) ) {
            $( elemento ).html('<p>Mensagens não encontradas, favor recarregue a página!</p>');
        }

        let listElements = ultimosInformativos( this.informativos, this.config );

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

        if ( ! Array.isArray(this.mensagens) ) {
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


/***/ }),

/***/ "./src/CTToast.js":
/*!************************!*\
  !*** ./src/CTToast.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ToastHTML = __webpack_require__(/*! ./html/ToastHTML */ "./src/html/ToastHTML.js");

class CTToast {

    constructor(config) {

        this.config = {
            duration: 5000
        }

        if (typeof config === 'object' && config !== null ) {

            Object.assign(this.config, config);

        }
    }

    setConfig(config) {
        if (typeof config === 'object' && config !== null ) {
            Object.assign(this.config, config);
        }
    }

    setDuration(milisecond) {
        if (isNaN(milisecond)) {
            this.config.duration = milisecond;
        } else {
            console.error('Parâmetro inválido!');
        }
    }

    showToast(msg) {
        let idToast = Math.ceil( Math.random() * 1000 );
        if ( $('.toast-wrapper').length === 0 ) {
            $('body').append('<div class="toast-wrapper"></div>');
        }
        $('.toast-wrapper').append( ToastHTML(msg, this.config, idToast) );
        $('.ct-toast#t_' + idToast).show();
        let _this = this;
        setTimeout(function() {
            _this.dismissToast(idToast);
        }, this.config.duration);

        $(document).on('click', '#toastClose', function(){
            _this.dismissToast();
        });
    }

    dismissToast(idToast) {
        $('.ct-toast#t_' + idToast).removeClass('animated fadeInUp');
        setTimeout(function() {
            $('.ct-toast#t_' + idToast).addClass('animated fadeOutDown');
        }, 100);

        setTimeout(function() {
            $('.ct-toast#t_' + idToast).remove();
        }, 1000);

    }

}

module.exports = CTToast;

/***/ }),

/***/ "./src/funcoes/fn.js":
/*!***************************!*\
  !*** ./src/funcoes/fn.js ***!
  \***************************/
/*! exports provided: lerMais, getDataRelativa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerMais", function() { return lerMais; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataRelativa", function() { return getDataRelativa; });
const lerMais = function(str, tamanho = 50) {
    if (str.length <= tamanho) {
        return str;
    } else if (str.length > tamanho) {
        while ( str[tamanho] !== ' ' ) {
            tamanho += 1;
        }
        return str.substring(0, tamanho) + '... Ler mais.';
    }
}

const getDataRelativa = function(data) {
    let d = moment(data);
    let hoje = moment(new Date());
    let diferenca = hoje.diff(d, 'days');

    if ( diferenca === 0) {
        return d.format('[Hoje às] HH:mm')
    } else if ( diferenca === 1) {
        return d.format('[Ontem às] HH:mm')
    } else if ( diferenca < 180) {
        return d.format('[Em] DD [de] MMM');
    } else {
        return d.format('[Em] DD/MM/YYYY');
    }
}

/***/ }),

/***/ "./src/html/CaixaDeEntrada.js":
/*!************************************!*\
  !*** ./src/html/CaixaDeEntrada.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//import {lerMais} from "../funcoes/fn";
var fn = __webpack_require__(/*! ../funcoes/fn */ "./src/funcoes/fn.js");

caixaDeEntrada = function(mensagens, config) {
    if (mensagens.length === 0) {
        return caixaDeEntradaVaziaHtml(config);
    }

    var html = cabecalhoCaixaDeEntrada(config);

    html += '<div id="ctM_corpo_caixaDeEntrada">';

    mensagens.forEach((mensagem) => {
        html += itemCaixaDeEntrada(mensagem, config)
    });

    html += '</div>';
    return html;
}

cabecalhoCaixaDeEntrada = function(config) {
    return `
    <div class="row">
    ${btnRetornar(config)}
    ${btnCaixaDeEntrada(config)}
    ${btnMensagensEnviadas(config)}
    ${btnNovaMensagem(config)}    
    </div>
    `;
}

itemCaixaDeEntrada = function(mensagem, config) {
    let classNoRead = (mensagem.read_at === null) ? 'no-read' : '';

    let foto = ( mensagem.alerta.user.foto === null ) ? config.base_url + '/images/sem_foto.jpg' : config.webservice_url + '/Usuario/' + mensagem.alerta.user.foto;

    let titulo = fn.lerMais(mensagem.alerta.titulo);

    return `
    <div class="row inbox-row ct-info-mensagem ${classNoRead}" data-codigo="${mensagem.alerta.codigo}">
        <div class="col col-xs-12 col-sm-3 col-sm-push-9 text-right">
            ${btnExcluir(mensagem)}
            ${btnResponser(mensagem)}
            ${btnLidaNaoLida(mensagem)}
        </div>
        <div class="col col-xs-12 col-sm-1 col-sm-pull-3 inbox-avatar">
            <a href="${config.base_url}/avisos/mensagens/${mensagem.alerta.codigo}">
                <img src="${foto}" class="img-responsive img-circle">
            </a>
        </div>
        <div class="col col-xs-12 col-sm-8 col-sm-pull-3">
            <a href="${config.base_url}/avisos/mensagens/${mensagem.alerta.codigo}">
                <h4 class="inbox-nome">${mensagem.alerta.user.name}</h4>
                <h5 class="inbox-assunto">${titulo}</h5>
                <p>${mensagem.alerta.texto}</p>
                <small>${fn.getDataRelativa(mensagem.alerta.created_at)}</small>
            </a>
        </div>
    </div>
    `;
}

var btnExcluir = function(mensagem) {
    return `
            <button class="btn btn-default btn-excluir" title="Excluir Mensagem">
                <i class="fa fa-trash"></i>
            </button>
    `;
}

var btnLidaNaoLida = function(mensagem) {
    let fa = (mensagem.read_at === null) ? 'fa-envelope-open' : 'fa-envelope';
    let title = (mensagem.read_at === null) ? 'Marcar mensagem como lida.' : 'Marcar mensagem como não lida' ;
    return `
        <button class="btn btn-default btn-marcar-como-nao-lida" title="${title}">
            <i class="fa ${fa}"></i>
        </button>
    `;
}

var btnResponser = function(mensagem) {
    return `
            <button class="btn btn-default btn-responder" title="Responder">
                <i class="fa fa-reply"></i>
            </button>
    `;
}

var caixaDeEntradaVaziaHtml = function(config) {
    return cabecalhoCaixaDeEntrada(config) + `
    <div id="ctM_corpo_caixaDeEntrada">
        <h2 style="text-align:center">Você não possui mensagens!</h2>
    </div>
    `;
}

var btnRetornar = function(config) {
    return `
<div class="form-group  col-lg-2 col-md-3 col-sm-6">
	<a href="${config.base_url}">
		<button class="btn btn-danger btn-block" type="button"><i class="fa fa-arrow-left"></i> Retornar
		</button>
	</a>
</div>`;
}

btnCaixaDeEntrada = function(config) {
    return `<div class="form-group  col-lg-2 col-md-3 col-sm-6">
                    <button class="btn btn-white btn-block nav-msg" disabled="" type="button" id="bt-caixa-de-entrada"><i class="fas fa-envelope"></i> Caixa de
                        entrada
                    </button>

                </div>`;
}

btnMensagensEnviadas = function(config) {
    return `<div class="form-group  col-lg-2 col-md-3 col-sm-6">
                    <button class="btn btn-white btn-block nav-msg" type="button" id="bt-minhas-mensagens"><i class="fas fa-share-square"></i> Mensagens enviadas
                    </button>
                </div>`;
}

btnNovaMensagem = function(config) {
    return `<div class="form-group  col-lg-2 col-md-3 col-sm-6">
                    <button class="btn btn-white btn-block nav-msg" type="button" id="bt-nova-mensagem"><i class="fa fa-plus"></i> Nova mensagem
                    </button>
                </div>`;
}

module.exports = caixaDeEntrada;

/***/ }),

/***/ "./src/html/ConversaHTML.js":
/*!**********************************!*\
  !*** ./src/html/ConversaHTML.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fn = __webpack_require__(/*! ../funcoes/fn */ "./src/funcoes/fn.js");

ConversaHTML = function( conversa, config ) {
    return conversaRend(conversa, config );
}

var conversaRend = function( conversa, config ) {

    var html = `
    <div class="ibox ct-info-mensagem"  data-codigo="${conversa[0].alerta.codigo}">
            <div class="ibox-title">
                <h2 style="font-weight: bold;">${conversa[0].alerta.titulo}</h2>
            </div>

            <div class="ibox-content ibox-mensagem">

                <div class="row">
                    <div class="text-left col-md-6">
                        ${btnResponder()}
                        ${btnExcluir()}
                    </div>
                </div>`;
                //

    conversa.forEach(function(mensagem){
        html += mensagemConversa( mensagem, config );
    })


    html += `</div>
        </div>
    `;

    return html;

}

var mensagemConversa = function(mensagem, config) {
    let foto = ( mensagem.alerta.user.foto === null ) ? config.base_url + '/images/sem_foto.jpg' : config.webservice_url + '/Usuario/' + mensagem.alerta.user.foto;
    return `
    <div class="row mensagem-cabecalho">
                        <div class="col-xs-4 col-xs-offset-4 col-sm-2 col-sm-offset-0 col-md-1">
                            <img class="img-responsive img-circle" src="${foto}" alt="Foto de ${mensagem.alerta.user.name}">
                        </div>
                        <div class="col-xs-12 col-sm-10 col-md-11">
                            <h3>${mensagem.alerta.user.name}</h3>
                            <small>${moment(mensagem.alerta.created_at).format('DD/MM/YYYY')} as ${moment(mensagem.alerta.created_at).format('HH:mm:ss')}</small>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 mensagem-texto">
                            ${mensagem.alerta.texto.replace(/\r?\n/g, '<br />')}
                        </div>
                    </div>
    `;
}

var btnResponder = function() {
    return `<button class="btn btn-success btn-sm btn-responder" id="bt-responder" title="Responder"><i class="fas fa-reply" style="width: 20px"></i>
                            Responder</button>`;
}

var btnExcluir = function() {
    return `<button class="btn btn-danger btn-sm btn-excluir" id="bt-excluir" title="Excluir"><i class="fas fa-trash-alt" style="width: 20px"></i>
                            Excluir</button>`;
}

module.exports = ConversaHTML;

/***/ }),

/***/ "./src/html/MensagensEnviadasHTML.js":
/*!*******************************************!*\
  !*** ./src/html/MensagensEnviadasHTML.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fn = __webpack_require__(/*! ../funcoes/fn */ "./src/funcoes/fn.js");

mensagensEnviadas = function(mensagem, config) {
    return mensagensEvniadasHTML(mensagem, config);
}

var mensagensEvniadasHTML = function(mensagem, config) {
    var retorno = `<div>`;

    mensagem.forEach(function(msg){
        retorno += mensagemItemHtml(msg, config);
    });

    retorno += `</div>`;

    return retorno;
}

var mensagemItemHtml = function(mensagem, config) {
    return `
        <div class="row enviada-box" data-codigo="${mensagem.codigo}">
            <a href="${config.base_url + '/avisos/mensagens/' + mensagem.codigo}">
                <div class="col-xs-12 col-sm-8 col-lg-10">
                    <h4 style="color: green;">${mensagem.titulo}</h4>            
                    <p style="color: #333">${mensagem.texto}</p>            
                </div>   
            </a>                 
            <div class="col-xs-12 col-sm-4 col-lg-2">
                <button class="btn btn-default"><i class="fa fa-trash"></i></button>
                <small>${fn.getDataRelativa( mensagem.created_at )}</small>
            </div>                    
        </div>    
    `
}

module.exports = mensagensEnviadas;

/***/ }),

/***/ "./src/html/Responder.js":
/*!*******************************!*\
  !*** ./src/html/Responder.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fn = __webpack_require__(/*! ../funcoes/fn */ "./src/funcoes/fn.js");

responder = function(mensagem, config) {

    return getResponderBoxHtml(mensagem, config);
}

var getResponderBoxHtml = function(mensagem, config) {
    let titulo = ( mensagem.alerta.titulo.substring(0, 3) === 'RE:' ) ? mensagem.alerta.titulo : 'RE: ' + mensagem.alerta.titulo;
    let data = moment( mensagem.alerta.created_at ).format('DD/MM/YYYY [as] HH:MM');
    return `
        <div id="ctM_divResponderRenderized">
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-addon">Para</div>
                    <input type="text" class="form-control" name="destinatario" value="${mensagem.alerta.user.name}" disabled>
                </div>
            </div>
    
                
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-addon">Assunto</div>
                    <input type="text" class="form-control" name="titulo" value="${titulo}">
                </div>
            </div>
            
            <div class="form-group">
                <label for="titulo">Texto:</label>
                <textarea name="texto" class="form-control" style="height: 400px" id="ctM_texto"></textarea>
            </div>
            
            <div class="form-group">
                <button class="btn btn-primary" id="ctM_btnEnviarResposta"><i class="fa fa-paper-plane"></i> Enviar</button>
            </div>
        </div>
    `;
}

module.exports = responder;

/***/ }),

/***/ "./src/html/ToastHTML.js":
/*!*******************************!*\
  !*** ./src/html/ToastHTML.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/html/UltimasMensagens.js":
/*!**************************************!*\
  !*** ./src/html/UltimasMensagens.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/html/UltimosInformativos.js":
/*!*****************************************!*\
  !*** ./src/html/UltimosInformativos.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
    a.innerHTML = '<strong>Ver todas</strong> <i class="fa fa-angle-right"></i>';

    liVerMais.appendChild(a);

    listElement[listElement.length] = liVerMais;

    console.log('ultimosInformativos');
    console.log(listElement);
    return listElement;
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



    a.appendChild(img);
    divDropDown.appendChild(a);
    divDropDown.appendChild(divTexto);
    li.appendChild(divDropDown);
    console.log('itemUltimosInformativos')
    console.log(li);
    return li;

}

module.exports = ultimosInformativos;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
    Romário Melo
 */

if ($) {
    if ($.summernote) {
        if ($.summernote.version) {
            if ($.summernote.version != '0.8.12') {
                console.error('Versão do Summernote deve ser 0.8.12!');
            }
        }

    } else {
        console.error('Summernote é necessário!');
    }

} else {
    console.warn('jQuery é necessário!');
}


window.CTMesagem = __webpack_require__(/*! ./CTMensagem */ "./src/CTMensagem.js");
window.CTToast = __webpack_require__(/*! ./CTToast */ "./src/CTToast.js");
window.CTToast = new CTToast();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NUTWVuc2FnZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NUVG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmNvZXMvZm4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWwvQ2FpeGFEZUVudHJhZGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWwvQ29udmVyc2FIVE1MLmpzIiwid2VicGFjazovLy8uL3NyYy9odG1sL01lbnNhZ2Vuc0VudmlhZGFzSFRNTC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaHRtbC9SZXNwb25kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWwvVG9hc3RIVE1MLmpzIiwid2VicGFjazovLy8uL3NyYy9odG1sL1VsdGltYXNNZW5zYWdlbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWwvVWx0aW1vc0luZm9ybWF0aXZvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHFCQUFxQixtQkFBTyxDQUFDLDJEQUF1QjtBQUNwRCx1QkFBdUIsbUJBQU8sQ0FBQywrREFBeUI7QUFDeEQsMEJBQTBCLG1CQUFPLENBQUMscUVBQTRCO0FBQzlELGdCQUFnQixtQkFBTyxDQUFDLGlEQUFrQjtBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyx1REFBcUI7QUFDaEQsNEJBQTRCLG1CQUFPLENBQUMseUVBQThCOztBQUVsRTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxTQUFTOzs7QUFHVDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsYUFBYTtBQUNiOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGFBQWE7O0FBRWI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsYUFBYTs7QUFFYixTQUFTOztBQUVUOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGFBQWE7O0FBRWIsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2xVQSxnQkFBZ0IsbUJBQU8sQ0FBQyxpREFBa0I7O0FBRTFDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUEseUI7Ozs7Ozs7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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxZQUFZLG1DQUFtQyx1QkFBdUI7QUFDMUc7QUFDQTtBQUNBLHlFQUF5RSxLQUFLO0FBQzlFO0FBQ0E7QUFDQSx5REFBeUQsMEJBQTBCLGFBQWEsdUJBQXVCO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxZQUFZO0FBQzVDLHNDQUFzQyx1QkFBdUI7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsMEJBQTBCLGFBQWEsdUJBQXVCOzs7O0FBSTlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN2R0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBOzs7QUFHQSxtQkFBbUIsbUJBQU8sQ0FBQyx5Q0FBYztBQUN6QyxpQkFBaUIsbUJBQU8sQ0FBQyxtQ0FBVztBQUNwQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgY2FpeGFEZUVudHJhZGEgPSByZXF1aXJlKCcuL2h0bWwvQ2FpeGFEZUVudHJhZGEnKTtcclxudmFyIHVsdGltYXNNZW5zYWdlbnMgPSByZXF1aXJlKCcuL2h0bWwvVWx0aW1hc01lbnNhZ2VucycpO1xyXG52YXIgdWx0aW1vc0luZm9ybWF0aXZvcyA9IHJlcXVpcmUoJy4vaHRtbC9VbHRpbW9zSW5mb3JtYXRpdm9zJyk7XHJcbnZhciByZXNwb25kZXIgPSByZXF1aXJlKCcuL2h0bWwvUmVzcG9uZGVyJyk7XHJcbnZhciBDb252ZXJzYUhUTUwgPSByZXF1aXJlKCcuL2h0bWwvQ29udmVyc2FIVE1MJyk7XHJcbnZhciBtZW5zYWdlbnNFbnZpYWRhc0hUTUwgPSByZXF1aXJlKCcuL2h0bWwvTWVuc2FnZW5zRW52aWFkYXNIVE1MJyk7XHJcblxyXG5jbGFzcyBDVE1lbnNhZ2VtIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSBudWxsKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnID0ge307XHJcbiAgICAgICAgdGhpcy5tZW5zYWdlbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmluZm9ybWF0aXZvcyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoIGNvbmZpZyAhPT0gbnVsbCApIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBjb25maWcpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNhaXhhRGVFbnRyYWRhKCBlbGVtZW50byApIHtcclxuICAgICAgICAkKCBlbGVtZW50byApLmFkZENsYXNzKCdjdC1tZW5zYWdlbScpO1xyXG5cclxuICAgICAgICBpZiAoICEgQXJyYXkuaXNBcnJheSh0aGlzLm1lbnNhZ2VucykgKSB7XHJcbiAgICAgICAgICAgICQoIGVsZW1lbnRvICkuaHRtbCgnPHA+TWVuc2FnZW5zIG7Do28gZW5jb250cmFkYXMsIGZhdm9yIHJlY2FycmVndWUgYSBww6FnaW5hITwvcD4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoIGVsZW1lbnRvICkuaHRtbCggY2FpeGFEZUVudHJhZGEoIHRoaXMubWVuc2FnZW5zLCB0aGlzLmNvbmZpZyApICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVWx0aW1hc01lbnNhZ2VucyggZWxlbWVudG8gKSB7XHJcbiAgICAgICAgJCggZWxlbWVudG8gKS5hZGRDbGFzcygnY3QtdWx0aW1hcy1tZW5zYWdlbnMnKTtcclxuXHJcbiAgICAgICAgaWYgKCAhIEFycmF5LmlzQXJyYXkodGhpcy5tZW5zYWdlbnMpICkge1xyXG4gICAgICAgICAgICAkKCBlbGVtZW50byApLmh0bWwoJzxwPk1lbnNhZ2VucyBuw6NvIGVuY29udHJhZGFzLCBmYXZvciByZWNhcnJlZ3VlIGEgcMOhZ2luYSE8L3A+Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCBlbGVtZW50byApLmh0bWwoIHVsdGltYXNNZW5zYWdlbnMoICB0aGlzLm1lbnNhZ2VucywgdGhpcy5jb25maWcgKSApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclVsdGltb3NJbmZvcm1hdGl2b3MoIGVsZW1lbnRvICkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXJVbHRpbW9zSW5mb3JtYXRpdm9zJyk7XHJcbiAgICAgICAgJCggZWxlbWVudG8gKS5hZGRDbGFzcygnY3QtdWx0aW1hcy1tZW5zYWdlbnMnKTtcclxuXHJcbiAgICAgICAgaWYgKCAhIEFycmF5LmlzQXJyYXkodGhpcy5tZW5zYWdlbnMpICkge1xyXG4gICAgICAgICAgICAkKCBlbGVtZW50byApLmh0bWwoJzxwPk1lbnNhZ2VucyBuw6NvIGVuY29udHJhZGFzLCBmYXZvciByZWNhcnJlZ3VlIGEgcMOhZ2luYSE8L3A+Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGlzdEVsZW1lbnRzID0gdWx0aW1vc0luZm9ybWF0aXZvcyggdGhpcy5pbmZvcm1hdGl2b3MsIHRoaXMuY29uZmlnICk7XHJcblxyXG4gICAgICAgIGxpc3RFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgICAgICAgICAgJCggZWxlbWVudG8gKS5hcHBlbmQoIGUgKTtcclxuXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclJlc3BvbmRlciggbWVuc2FnZW0sIGVsZW1lbnRvICkge1xyXG5cclxuICAgICAgICAkKCBlbGVtZW50byApLmFkZENsYXNzKCdjdC1tZW5zYWdlbS1yZXBseScpO1xyXG5cclxuICAgICAgICAkKCBlbGVtZW50byApLmh0bWwoIHJlc3BvbmRlcihtZW5zYWdlbSksIHRoaXMuY29uZmlnICk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5kZXN0cm95RWRpdG9yKCcjY3RNX3RleHRvJyk7XHJcblxyXG4gICAgICAgIC8vdGlueW1jZS5iYXNlVVJMID0gdGhpcy5jb25maWcuYmFzZV91cmwgKyAnL2pzL3RpbnltY2UnO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUVkaXRvciggJyNjdE1fdGV4dG8nICk7XHJcblxyXG4gICAgICAgICQoICcjY3RNX2RpdlJlc3BvbmRlclJlbmRlcml6ZWQnICkuYXR0cignZGF0YS1jb2RpZ28nLCBtZW5zYWdlbS5hbGVydGEuY29kaWdvKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ29udmVyc2EoIGNvbnZlcnNhLCBlbGVtZW50byApIHtcclxuICAgICAgICAkKCBlbGVtZW50byApLmh0bWwoIENvbnZlcnNhSFRNTCggY29udmVyc2EsIHRoaXMuY29uZmlnICkgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJNZW5zYWdlbnNFbnZpYWRhcyhlbGVtZW50bywgbWVuc2FnZW5zKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coIHRoaXMuY29uZmlnICk7XHJcbiAgICAgICAgJCggZWxlbWVudG8gKS5odG1sKCBtZW5zYWdlbnNFbnZpYWRhc0hUTUwoIG1lbnNhZ2VucywgdGhpcy5jb25maWcgKSApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1lbnNhZ2VucyhtZW5zYWdlbnMpIHtcclxuXHJcbiAgICAgICAgaWYgKCAhIEFycmF5LmlzQXJyYXkodGhpcy5tZW5zYWdlbnMpICkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ01lbnNhZ2VucyBkZXZlIHNlciB1bSBBcnJheS4nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pbmZvcm1hdGl2b3MgPSB0aGlzLnNvbWVudGVJbmZvcm1hdGl2b3MoIG1lbnNhZ2VucyApO1xyXG4gICAgICAgIHRoaXMubWVuc2FnZW5zID0gdGhpcy5zb21lbnRlTWVuc2FnZW5zKCBtZW5zYWdlbnMgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNZW5zYWdlbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVuc2FnZW5zO1xyXG4gICAgfVxyXG5cclxuICAgIGJ0bkxpZGFOYW9MaWRhQ2xpY2soZm4pIHtcclxuXHJcbiAgICAgICAgaWYgKCB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdE1lbnNhZ2VtID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICQoJy5idG4tbWFyY2FyLWNvbW8tbmFvLWxpZGEnKS5jbGljayhmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5pbmJveC1yb3cnKS5hdHRyKCdkYXRhLWNvZGlnbycpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtZW5zYWdlbSA9IGN0TWVuc2FnZW0uZ2V0TXNnQnlJZCggaWQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmbihtZW5zYWdlbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ZvY8OqIGRldmUgcGFzc2FyIHVtYSBmdW7Dp8OjbyBjb21vIHBhcsOibWV0cm8uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYnRuUmVzcG9uZGVyQ2xpY2soZm4pIHtcclxuXHJcbiAgICAgICAgaWYgKCB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdE1lbnNhZ2VtID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICQoJy5idG4tcmVzcG9uZGVyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jdC1pbmZvLW1lbnNhZ2VtJykuYXR0cignZGF0YS1jb2RpZ28nKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWVuc2FnZW0gPSBjdE1lbnNhZ2VtLmdldE1zZ0J5SWQoIGlkICk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm4obWVuc2FnZW0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdWb2PDqiBkZXZlIHBhc3NhciB1bWEgZnVuw6fDo28gY29tbyBwYXLDom1ldHJvLicpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJ0bkV4Y2x1aXJDbGljayhmbikge1xyXG5cclxuICAgICAgICBpZiAoIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGN0TWVuc2FnZW0gPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgJCgnLmJ0bi1leGNsdWlyJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5jdC1pbmZvLW1lbnNhZ2VtJykuYXR0cignZGF0YS1jb2RpZ28nKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWVuc2FnZW0gPSBjdE1lbnNhZ2VtLmdldE1zZ0J5SWQoIGlkICk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm4obWVuc2FnZW0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdWb2PDqiBkZXZlIHBhc3NhciB1bWEgZnVuw6fDo28gY29tbyBwYXLDom1ldHJvLicpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJ0bkVudmlhclJlc3Bvc3RhQ2xpY2soZm4pIHtcclxuXHJcbiAgICAgICAgaWYgKCB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdE1lbnNhZ2VtID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICQoJyNjdE1fYnRuRW52aWFyUmVzcG9zdGEnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3RpbnltY2UudHJpZ2dlclNhdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGl2UmVzcG9uZGVyID0gJCh0aGlzKS5jbG9zZXN0KCcjY3RNX2RpdlJlc3BvbmRlclJlbmRlcml6ZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9zdGEgPSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRpdHVsbzogZGl2UmVzcG9uZGVyLmZpbmQoJ2lucHV0W25hbWU9dGl0dWxvXScpLnZhbCgpLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0bzogZGl2UmVzcG9uZGVyLmZpbmQoJ3RleHRhcmVhW25hbWU9dGV4dG9dJykudmFsKClcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpZCA9ICQodGhpcykuY2xvc2VzdCgnI2N0TV9kaXZSZXNwb25kZXJSZW5kZXJpemVkJykuYXR0cignZGF0YS1jb2RpZ28nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbWVuc2FnZW0gPSBjdE1lbnNhZ2VtLmdldE1zZ0J5SWQoIGlkICk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm4obWVuc2FnZW0sIHJlc3Bvc3RhKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYnRuTm92YU1lbnNhZ2VtQ2xpY2soZm4pIHtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cclxuICAgICAgICAgICAgJCgnI2J0LW5vdmEtbWVuc2FnZW0nKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcubmF2LW1zZycpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZuKCk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBidG5DYWl4YURlRW50cmFkYUNsaWNrKGZuKSB7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyNidC1jYWl4YS1kZS1lbnRyYWRhJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZm4oKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGFyw6JtZXRybyBkZXZlIHNlciBmdW7Dp8Ojby4nKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBidG5NZW5zYWdlbnNFbnZpYWRhc0NsaWNrKGZuKSB7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyNidC1taW5oYXMtbWVuc2FnZW5zJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLm5hdi1tc2cnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmbigpO1xyXG5cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1BhcsOibWV0cm8gZGV2ZSBzZXIgZnVuw6fDo28uJyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TXNnQnlJZChpZCkge1xyXG4gICAgICAgIGlmICggQXJyYXkuaXNBcnJheSh0aGlzLm1lbnNhZ2VucykgKSB7XHJcbiAgICAgICAgICAgIGxldCByTXNnID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5tZW5zYWdlbnMuZm9yRWFjaChmdW5jdGlvbiAobXNnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobXNnLmFsZXJ0YS5jb2RpZ28gPT09IHBhcnNlSW50KCBpZCApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgck1zZyA9IG1zZztcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gck1zZztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdNZW5zYWdlbnMgZGV2ZW0gc2VyIEFycmF5LicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRUaXR1bG8odGl0dWxvKSB7XHJcbiAgICAgICAgJCgnI2lib3hDYWl4YURlRW50cmFkYSBoNScpLnRleHQodGl0dWxvKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBCVVRUT05TICovXHJcblxyXG4gICAgZ2V0Q2FpeGFEZUVudHJhZGFCdXR0b24oKSB7XHJcbiAgICAgICAgcmV0dXJuICQoJyNidC1jYWl4YS1kZS1lbnRyYWRhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Tm92YU1lbnNhZ2VtQnV0dG9uKCkge1xyXG4gICAgICAgIHJldHVybiAkKCcjYnQtbm92YS1tZW5zYWdlbScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUVkaXRvciggZWxlICkge1xyXG5cclxuICAgICAgICAkKGVsZSkuc3VtbWVybm90ZSh7XHJcbiAgICAgICAgICAgIHRvb2xiYXI6IFtcclxuICAgICAgICAgICAgICAgIC8vW2dyb3VwTmFtZSwgW2xpc3Qgb2YgYnV0dG9uXV1cclxuICAgICAgICAgICAgICAgIFsnc3R5bGUnLCBbJ3VuZG8nLCdyZWRvJywnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ2NsZWFyJywgJ2ZvcmVjb2xvciddXSxcclxuICAgICAgICAgICAgICAgIFsncGFyYScsIFsndWwnLCAncGFyYWdyYXBoJywgJ3N0eWxlJ11dXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHBvcG92ZXI6IHt9LFxyXG4gICAgICAgICAgICBsYW5nOiAncHQtQlInLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICc1MDBweCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveUVkaXRvciggZWxlICkge1xyXG4gICAgICAgICQoIGVsZSApLnN1bW1lcm5vdGUoJ2Rlc3Ryb3knKTtcclxuICAgIH07XHJcblxyXG4gICAgc29tZW50ZUluZm9ybWF0aXZvcyhhdmlzb3MpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWx0cmFyTWVuc3NhZ2Vuc0luZm9ybWF0aXZvcyggYXZpc29zLCAnSU5GT1JNQVRJVk9TJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc29tZW50ZU1lbnNhZ2Vucyhhdmlzb3MpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maWx0cmFyTWVuc3NhZ2Vuc0luZm9ybWF0aXZvcyggYXZpc29zLCdNRU5TQUdFTScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRyYXJNZW5zc2FnZW5zSW5mb3JtYXRpdm9zKGF2aXNvcywgdGlwbykge1xyXG4gICAgICAgIHZhciByZXRvcm5vID0gW107XHJcbiAgICAgICAgYXZpc29zLmZvckVhY2goZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBpZiAoZS5hbGVydGEudGlwbyA9PT0gdGlwbykge1xyXG4gICAgICAgICAgICAgICAgcmV0b3Jub1tyZXRvcm5vLmxlbmd0aF0gPSBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldG9ybm87XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENUTWVuc2FnZW07XHJcbiIsInZhciBUb2FzdEhUTUwgPSByZXF1aXJlKCcuL2h0bWwvVG9hc3RIVE1MJyk7XHJcblxyXG5jbGFzcyBDVFRvYXN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jb25maWcgPSB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnICE9PSBudWxsICkge1xyXG5cclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgY29uZmlnKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldENvbmZpZyhjb25maWcpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnICE9PSBudWxsICkge1xyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBjb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXREdXJhdGlvbihtaWxpc2Vjb25kKSB7XHJcbiAgICAgICAgaWYgKGlzTmFOKG1pbGlzZWNvbmQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmR1cmF0aW9uID0gbWlsaXNlY29uZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdQYXLDom1ldHJvIGludsOhbGlkbyEnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1RvYXN0KG1zZykge1xyXG4gICAgICAgIGxldCBpZFRvYXN0ID0gTWF0aC5jZWlsKCBNYXRoLnJhbmRvbSgpICogMTAwMCApO1xyXG4gICAgICAgIGlmICggJCgnLnRvYXN0LXdyYXBwZXInKS5sZW5ndGggPT09IDAgKSB7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJ0b2FzdC13cmFwcGVyXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJy50b2FzdC13cmFwcGVyJykuYXBwZW5kKCBUb2FzdEhUTUwobXNnLCB0aGlzLmNvbmZpZywgaWRUb2FzdCkgKTtcclxuICAgICAgICAkKCcuY3QtdG9hc3QjdF8nICsgaWRUb2FzdCkuc2hvdygpO1xyXG4gICAgICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgX3RoaXMuZGlzbWlzc1RvYXN0KGlkVG9hc3QpO1xyXG4gICAgICAgIH0sIHRoaXMuY29uZmlnLmR1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyN0b2FzdENsb3NlJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgX3RoaXMuZGlzbWlzc1RvYXN0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzbWlzc1RvYXN0KGlkVG9hc3QpIHtcclxuICAgICAgICAkKCcuY3QtdG9hc3QjdF8nICsgaWRUb2FzdCkucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkIGZhZGVJblVwJyk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnLmN0LXRvYXN0I3RfJyArIGlkVG9hc3QpLmFkZENsYXNzKCdhbmltYXRlZCBmYWRlT3V0RG93bicpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJy5jdC10b2FzdCN0XycgKyBpZFRvYXN0KS5yZW1vdmUoKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENUVG9hc3Q7IiwiZXhwb3J0IGNvbnN0IGxlck1haXMgPSBmdW5jdGlvbihzdHIsIHRhbWFuaG8gPSA1MCkge1xyXG4gICAgaWYgKHN0ci5sZW5ndGggPD0gdGFtYW5obykge1xyXG4gICAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9IGVsc2UgaWYgKHN0ci5sZW5ndGggPiB0YW1hbmhvKSB7XHJcbiAgICAgICAgd2hpbGUgKCBzdHJbdGFtYW5ob10gIT09ICcgJyApIHtcclxuICAgICAgICAgICAgdGFtYW5obyArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cmluZygwLCB0YW1hbmhvKSArICcuLi4gTGVyIG1haXMuJztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldERhdGFSZWxhdGl2YSA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgIGxldCBkID0gbW9tZW50KGRhdGEpO1xyXG4gICAgbGV0IGhvamUgPSBtb21lbnQobmV3IERhdGUoKSk7XHJcbiAgICBsZXQgZGlmZXJlbmNhID0gaG9qZS5kaWZmKGQsICdkYXlzJyk7XHJcblxyXG4gICAgaWYgKCBkaWZlcmVuY2EgPT09IDApIHtcclxuICAgICAgICByZXR1cm4gZC5mb3JtYXQoJ1tIb2plIMOgc10gSEg6bW0nKVxyXG4gICAgfSBlbHNlIGlmICggZGlmZXJlbmNhID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIGQuZm9ybWF0KCdbT250ZW0gw6BzXSBISDptbScpXHJcbiAgICB9IGVsc2UgaWYgKCBkaWZlcmVuY2EgPCAxODApIHtcclxuICAgICAgICByZXR1cm4gZC5mb3JtYXQoJ1tFbV0gREQgW2RlXSBNTU0nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGQuZm9ybWF0KCdbRW1dIEREL01NL1lZWVknKTtcclxuICAgIH1cclxufSIsIi8vaW1wb3J0IHtsZXJNYWlzfSBmcm9tIFwiLi4vZnVuY29lcy9mblwiO1xyXG52YXIgZm4gPSByZXF1aXJlKFwiLi4vZnVuY29lcy9mblwiKTtcclxuXHJcbmNhaXhhRGVFbnRyYWRhID0gZnVuY3Rpb24obWVuc2FnZW5zLCBjb25maWcpIHtcclxuICAgIGlmIChtZW5zYWdlbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhaXhhRGVFbnRyYWRhVmF6aWFIdG1sKGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGh0bWwgPSBjYWJlY2FsaG9DYWl4YURlRW50cmFkYShjb25maWcpO1xyXG5cclxuICAgIGh0bWwgKz0gJzxkaXYgaWQ9XCJjdE1fY29ycG9fY2FpeGFEZUVudHJhZGFcIj4nO1xyXG5cclxuICAgIG1lbnNhZ2Vucy5mb3JFYWNoKChtZW5zYWdlbSkgPT4ge1xyXG4gICAgICAgIGh0bWwgKz0gaXRlbUNhaXhhRGVFbnRyYWRhKG1lbnNhZ2VtLCBjb25maWcpXHJcbiAgICB9KTtcclxuXHJcbiAgICBodG1sICs9ICc8L2Rpdj4nO1xyXG4gICAgcmV0dXJuIGh0bWw7XHJcbn1cclxuXHJcbmNhYmVjYWxob0NhaXhhRGVFbnRyYWRhID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgJHtidG5SZXRvcm5hcihjb25maWcpfVxyXG4gICAgJHtidG5DYWl4YURlRW50cmFkYShjb25maWcpfVxyXG4gICAgJHtidG5NZW5zYWdlbnNFbnZpYWRhcyhjb25maWcpfVxyXG4gICAgJHtidG5Ob3ZhTWVuc2FnZW0oY29uZmlnKX0gICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbn1cclxuXHJcbml0ZW1DYWl4YURlRW50cmFkYSA9IGZ1bmN0aW9uKG1lbnNhZ2VtLCBjb25maWcpIHtcclxuICAgIGxldCBjbGFzc05vUmVhZCA9IChtZW5zYWdlbS5yZWFkX2F0ID09PSBudWxsKSA/ICduby1yZWFkJyA6ICcnO1xyXG5cclxuICAgIGxldCBmb3RvID0gKCBtZW5zYWdlbS5hbGVydGEudXNlci5mb3RvID09PSBudWxsICkgPyBjb25maWcuYmFzZV91cmwgKyAnL2ltYWdlcy9zZW1fZm90by5qcGcnIDogY29uZmlnLndlYnNlcnZpY2VfdXJsICsgJy9Vc3VhcmlvLycgKyBtZW5zYWdlbS5hbGVydGEudXNlci5mb3RvO1xyXG5cclxuICAgIGxldCB0aXR1bG8gPSBmbi5sZXJNYWlzKG1lbnNhZ2VtLmFsZXJ0YS50aXR1bG8pO1xyXG5cclxuICAgIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicm93IGluYm94LXJvdyBjdC1pbmZvLW1lbnNhZ2VtICR7Y2xhc3NOb1JlYWR9XCIgZGF0YS1jb2RpZ289XCIke21lbnNhZ2VtLmFsZXJ0YS5jb2RpZ299XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wteHMtMTIgY29sLXNtLTMgY29sLXNtLXB1c2gtOSB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICR7YnRuRXhjbHVpcihtZW5zYWdlbSl9XHJcbiAgICAgICAgICAgICR7YnRuUmVzcG9uc2VyKG1lbnNhZ2VtKX1cclxuICAgICAgICAgICAgJHtidG5MaWRhTmFvTGlkYShtZW5zYWdlbSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wteHMtMTIgY29sLXNtLTEgY29sLXNtLXB1bGwtMyBpbmJveC1hdmF0YXJcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiR7Y29uZmlnLmJhc2VfdXJsfS9hdmlzb3MvbWVuc2FnZW5zLyR7bWVuc2FnZW0uYWxlcnRhLmNvZGlnb31cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtmb3RvfVwiIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgaW1nLWNpcmNsZVwiPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBjb2wteHMtMTIgY29sLXNtLTggY29sLXNtLXB1bGwtM1wiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiJHtjb25maWcuYmFzZV91cmx9L2F2aXNvcy9tZW5zYWdlbnMvJHttZW5zYWdlbS5hbGVydGEuY29kaWdvfVwiPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiaW5ib3gtbm9tZVwiPiR7bWVuc2FnZW0uYWxlcnRhLnVzZXIubmFtZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiaW5ib3gtYXNzdW50b1wiPiR7dGl0dWxvfTwvaDU+XHJcbiAgICAgICAgICAgICAgICA8cD4ke21lbnNhZ2VtLmFsZXJ0YS50ZXh0b308L3A+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+JHtmbi5nZXREYXRhUmVsYXRpdmEobWVuc2FnZW0uYWxlcnRhLmNyZWF0ZWRfYXQpfTwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxufVxyXG5cclxudmFyIGJ0bkV4Y2x1aXIgPSBmdW5jdGlvbihtZW5zYWdlbSkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tZXhjbHVpclwiIHRpdGxlPVwiRXhjbHVpciBNZW5zYWdlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICBgO1xyXG59XHJcblxyXG52YXIgYnRuTGlkYU5hb0xpZGEgPSBmdW5jdGlvbihtZW5zYWdlbSkge1xyXG4gICAgbGV0IGZhID0gKG1lbnNhZ2VtLnJlYWRfYXQgPT09IG51bGwpID8gJ2ZhLWVudmVsb3BlLW9wZW4nIDogJ2ZhLWVudmVsb3BlJztcclxuICAgIGxldCB0aXRsZSA9IChtZW5zYWdlbS5yZWFkX2F0ID09PSBudWxsKSA/ICdNYXJjYXIgbWVuc2FnZW0gY29tbyBsaWRhLicgOiAnTWFyY2FyIG1lbnNhZ2VtIGNvbW8gbsOjbyBsaWRhJyA7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLW1hcmNhci1jb21vLW5hby1saWRhXCIgdGl0bGU9XCIke3RpdGxlfVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhICR7ZmF9XCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgYDtcclxufVxyXG5cclxudmFyIGJ0blJlc3BvbnNlciA9IGZ1bmN0aW9uKG1lbnNhZ2VtKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1yZXNwb25kZXJcIiB0aXRsZT1cIlJlc3BvbmRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1yZXBseVwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICBgO1xyXG59XHJcblxyXG52YXIgY2FpeGFEZUVudHJhZGFWYXppYUh0bWwgPSBmdW5jdGlvbihjb25maWcpIHtcclxuICAgIHJldHVybiBjYWJlY2FsaG9DYWl4YURlRW50cmFkYShjb25maWcpICsgYFxyXG4gICAgPGRpdiBpZD1cImN0TV9jb3Jwb19jYWl4YURlRW50cmFkYVwiPlxyXG4gICAgICAgIDxoMiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+Vm9jw6ogbsOjbyBwb3NzdWkgbWVuc2FnZW5zITwvaDI+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbn1cclxuXHJcbnZhciBidG5SZXRvcm5hciA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG4gICAgcmV0dXJuIGBcclxuPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgIGNvbC1sZy0yIGNvbC1tZC0zIGNvbC1zbS02XCI+XHJcblx0PGEgaHJlZj1cIiR7Y29uZmlnLmJhc2VfdXJsfVwiPlxyXG5cdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1ibG9ja1wiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhIGZhLWFycm93LWxlZnRcIj48L2k+IFJldG9ybmFyXHJcblx0XHQ8L2J1dHRvbj5cclxuXHQ8L2E+XHJcbjwvZGl2PmA7XHJcbn1cclxuXHJcbmJ0bkNhaXhhRGVFbnRyYWRhID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICBjb2wtbGctMiBjb2wtbWQtMyBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdoaXRlIGJ0bi1ibG9jayBuYXYtbXNnXCIgZGlzYWJsZWQ9XCJcIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJidC1jYWl4YS1kZS1lbnRyYWRhXCI+PGkgY2xhc3M9XCJmYXMgZmEtZW52ZWxvcGVcIj48L2k+IENhaXhhIGRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJhZGFcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5idG5NZW5zYWdlbnNFbnZpYWRhcyA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAgY29sLWxnLTIgY29sLW1kLTMgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13aGl0ZSBidG4tYmxvY2sgbmF2LW1zZ1wiIHR5cGU9XCJidXR0b25cIiBpZD1cImJ0LW1pbmhhcy1tZW5zYWdlbnNcIj48aSBjbGFzcz1cImZhcyBmYS1zaGFyZS1zcXVhcmVcIj48L2k+IE1lbnNhZ2VucyBlbnZpYWRhc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxuYnRuTm92YU1lbnNhZ2VtID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICBjb2wtbGctMiBjb2wtbWQtMyBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdoaXRlIGJ0bi1ibG9jayBuYXYtbXNnXCIgdHlwZT1cImJ1dHRvblwiIGlkPVwiYnQtbm92YS1tZW5zYWdlbVwiPjxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4gTm92YSBtZW5zYWdlbVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjYWl4YURlRW50cmFkYTsiLCJ2YXIgZm4gPSByZXF1aXJlKFwiLi4vZnVuY29lcy9mblwiKTtcclxuXHJcbkNvbnZlcnNhSFRNTCA9IGZ1bmN0aW9uKCBjb252ZXJzYSwgY29uZmlnICkge1xyXG4gICAgcmV0dXJuIGNvbnZlcnNhUmVuZChjb252ZXJzYSwgY29uZmlnICk7XHJcbn1cclxuXHJcbnZhciBjb252ZXJzYVJlbmQgPSBmdW5jdGlvbiggY29udmVyc2EsIGNvbmZpZyApIHtcclxuXHJcbiAgICB2YXIgaHRtbCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJpYm94IGN0LWluZm8tbWVuc2FnZW1cIiAgZGF0YS1jb2RpZ289XCIke2NvbnZlcnNhWzBdLmFsZXJ0YS5jb2RpZ299XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpYm94LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgc3R5bGU9XCJmb250LXdlaWdodDogYm9sZDtcIj4ke2NvbnZlcnNhWzBdLmFsZXJ0YS50aXR1bG99PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWJveC1jb250ZW50IGlib3gtbWVuc2FnZW1cIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtbGVmdCBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2J0blJlc3BvbmRlcigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2J0bkV4Y2x1aXIoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG5cclxuICAgIGNvbnZlcnNhLmZvckVhY2goZnVuY3Rpb24obWVuc2FnZW0pe1xyXG4gICAgICAgIGh0bWwgKz0gbWVuc2FnZW1Db252ZXJzYSggbWVuc2FnZW0sIGNvbmZpZyApO1xyXG4gICAgfSlcclxuXHJcblxyXG4gICAgaHRtbCArPSBgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG5cclxuICAgIHJldHVybiBodG1sO1xyXG5cclxufVxyXG5cclxudmFyIG1lbnNhZ2VtQ29udmVyc2EgPSBmdW5jdGlvbihtZW5zYWdlbSwgY29uZmlnKSB7XHJcbiAgICBsZXQgZm90byA9ICggbWVuc2FnZW0uYWxlcnRhLnVzZXIuZm90byA9PT0gbnVsbCApID8gY29uZmlnLmJhc2VfdXJsICsgJy9pbWFnZXMvc2VtX2ZvdG8uanBnJyA6IGNvbmZpZy53ZWJzZXJ2aWNlX3VybCArICcvVXN1YXJpby8nICsgbWVuc2FnZW0uYWxlcnRhLnVzZXIuZm90bztcclxuICAgIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicm93IG1lbnNhZ2VtLWNhYmVjYWxob1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTQgY29sLXhzLW9mZnNldC00IGNvbC1zbS0yIGNvbC1zbS1vZmZzZXQtMCBjb2wtbWQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlIGltZy1jaXJjbGVcIiBzcmM9XCIke2ZvdG99XCIgYWx0PVwiRm90byBkZSAke21lbnNhZ2VtLmFsZXJ0YS51c2VyLm5hbWV9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMCBjb2wtbWQtMTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4ke21lbnNhZ2VtLmFsZXJ0YS51c2VyLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD4ke21vbWVudChtZW5zYWdlbS5hbGVydGEuY3JlYXRlZF9hdCkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9IGFzICR7bW9tZW50KG1lbnNhZ2VtLmFsZXJ0YS5jcmVhdGVkX2F0KS5mb3JtYXQoJ0hIOm1tOnNzJyl9PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIG1lbnNhZ2VtLXRleHRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAke21lbnNhZ2VtLmFsZXJ0YS50ZXh0by5yZXBsYWNlKC9cXHI/XFxuL2csICc8YnIgLz4nKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG59XHJcblxyXG52YXIgYnRuUmVzcG9uZGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtIGJ0bi1yZXNwb25kZXJcIiBpZD1cImJ0LXJlc3BvbmRlclwiIHRpdGxlPVwiUmVzcG9uZGVyXCI+PGkgY2xhc3M9XCJmYXMgZmEtcmVwbHlcIiBzdHlsZT1cIndpZHRoOiAyMHB4XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVzcG9uZGVyPC9idXR0b24+YDtcclxufVxyXG5cclxudmFyIGJ0bkV4Y2x1aXIgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGJ0bi1zbSBidG4tZXhjbHVpclwiIGlkPVwiYnQtZXhjbHVpclwiIHRpdGxlPVwiRXhjbHVpclwiPjxpIGNsYXNzPVwiZmFzIGZhLXRyYXNoLWFsdFwiIHN0eWxlPVwid2lkdGg6IDIwcHhcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeGNsdWlyPC9idXR0b24+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDb252ZXJzYUhUTUw7IiwidmFyIGZuID0gcmVxdWlyZShcIi4uL2Z1bmNvZXMvZm5cIik7XHJcblxyXG5tZW5zYWdlbnNFbnZpYWRhcyA9IGZ1bmN0aW9uKG1lbnNhZ2VtLCBjb25maWcpIHtcclxuICAgIHJldHVybiBtZW5zYWdlbnNFdm5pYWRhc0hUTUwobWVuc2FnZW0sIGNvbmZpZyk7XHJcbn1cclxuXHJcbnZhciBtZW5zYWdlbnNFdm5pYWRhc0hUTUwgPSBmdW5jdGlvbihtZW5zYWdlbSwgY29uZmlnKSB7XHJcbiAgICB2YXIgcmV0b3JubyA9IGA8ZGl2PmA7XHJcblxyXG4gICAgbWVuc2FnZW0uZm9yRWFjaChmdW5jdGlvbihtc2cpe1xyXG4gICAgICAgIHJldG9ybm8gKz0gbWVuc2FnZW1JdGVtSHRtbChtc2csIGNvbmZpZyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXRvcm5vICs9IGA8L2Rpdj5gO1xyXG5cclxuICAgIHJldHVybiByZXRvcm5vO1xyXG59XHJcblxyXG52YXIgbWVuc2FnZW1JdGVtSHRtbCA9IGZ1bmN0aW9uKG1lbnNhZ2VtLCBjb25maWcpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBlbnZpYWRhLWJveFwiIGRhdGEtY29kaWdvPVwiJHttZW5zYWdlbS5jb2RpZ299XCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIke2NvbmZpZy5iYXNlX3VybCArICcvYXZpc29zL21lbnNhZ2Vucy8nICsgbWVuc2FnZW0uY29kaWdvfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tOCBjb2wtbGctMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9XCJjb2xvcjogZ3JlZW47XCI+JHttZW5zYWdlbS50aXR1bG99PC9oND4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT1cImNvbG9yOiAjMzMzXCI+JHttZW5zYWdlbS50ZXh0b308L3A+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgPC9hPiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTQgY29sLWxnLTJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsPiR7Zm4uZ2V0RGF0YVJlbGF0aXZhKCBtZW5zYWdlbS5jcmVhdGVkX2F0ICl9PC9zbWFsbD5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICBgXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbWVuc2FnZW5zRW52aWFkYXM7IiwidmFyIGZuID0gcmVxdWlyZShcIi4uL2Z1bmNvZXMvZm5cIik7XHJcblxyXG5yZXNwb25kZXIgPSBmdW5jdGlvbihtZW5zYWdlbSwgY29uZmlnKSB7XHJcblxyXG4gICAgcmV0dXJuIGdldFJlc3BvbmRlckJveEh0bWwobWVuc2FnZW0sIGNvbmZpZyk7XHJcbn1cclxuXHJcbnZhciBnZXRSZXNwb25kZXJCb3hIdG1sID0gZnVuY3Rpb24obWVuc2FnZW0sIGNvbmZpZykge1xyXG4gICAgbGV0IHRpdHVsbyA9ICggbWVuc2FnZW0uYWxlcnRhLnRpdHVsby5zdWJzdHJpbmcoMCwgMykgPT09ICdSRTonICkgPyBtZW5zYWdlbS5hbGVydGEudGl0dWxvIDogJ1JFOiAnICsgbWVuc2FnZW0uYWxlcnRhLnRpdHVsbztcclxuICAgIGxldCBkYXRhID0gbW9tZW50KCBtZW5zYWdlbS5hbGVydGEuY3JlYXRlZF9hdCApLmZvcm1hdCgnREQvTU0vWVlZWSBbYXNdIEhIOk1NJyk7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgaWQ9XCJjdE1fZGl2UmVzcG9uZGVyUmVuZGVyaXplZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+UGFyYTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImRlc3RpbmF0YXJpb1wiIHZhbHVlPVwiJHttZW5zYWdlbS5hbGVydGEudXNlci5uYW1lfVwiIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPkFzc3VudG88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJ0aXR1bG9cIiB2YWx1ZT1cIiR7dGl0dWxvfVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXR1bG9cIj5UZXh0bzo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJ0ZXh0b1wiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgc3R5bGU9XCJoZWlnaHQ6IDQwMHB4XCIgaWQ9XCJjdE1fdGV4dG9cIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaWQ9XCJjdE1fYnRuRW52aWFyUmVzcG9zdGFcIj48aSBjbGFzcz1cImZhIGZhLXBhcGVyLXBsYW5lXCI+PC9pPiBFbnZpYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHJlc3BvbmRlcjsiLCJUb2FzdEhUTUwgPSBmdW5jdGlvbihtc2csIGNvbmZpZywgaWRUb2FzdCkge1xyXG4gICAgcmV0dXJuIGdldEhUTUxUb2FzdChtc2csIGNvbmZpZywgaWRUb2FzdCk7XHJcbn1cclxuXHJcbnZhciBnZXRIVE1MVG9hc3QgPSBmdW5jdGlvbihtc2csIGNvbmZpZywgaWRUb0Nsb3NlTm90aWZpY2F0aW9uKSB7XHJcbiAgICBsZXQgZm90byA9IChtc2cuYXV0b3IuZm90byA9PT0gbnVsbCkgPyBjb25maWcuYmFzZV91cmwgKyAnL2ltYWdlcy9zZW1fZm90by5qcGcnIDogY29uZmlnLndlYnNlcnZpY2VfdXJsICsgJy9Vc3VhcmlvLycgKyBtc2cuYXV0b3IuZm90bztcclxuICAgIHJldHVybiBgXHJcbjxkaXYgY2xhc3M9XCJjdC10b2FzdCBmYWRlSW5VcCBhbmltYXRlZFwiIGlkPVwidF8ke2lkVG9DbG9zZU5vdGlmaWNhdGlvbn1cIiBkYXRhLWlkPVwiJHttc2cuYnJvYWRjYXN0X21lc3NhZ2VtLmlkfVwiPlxyXG4gICAgPGEgaHJlZj1cIiMke21zZy5icm9hZGNhc3RfbWVzc2FnZW0uaWR9XCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvYXN0LWNsb3NlXCIgaWQ9XCJ0b2FzdENsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzIGZhLTJ4XCI+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ZvdG99XCIgYWx0PVwiXCIgY2xhc3M9XCJpbWctY2lyY2xlIGltZy1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImxibFwiPk5vdmEgbWVuc2FnZW0gZGUgPHN0cm9uZz4ke21zZy5hdXRvci5uYW1lfTwvc3Ryb25nPjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvYT5cclxuPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBUb2FzdEhUTUw7IiwidWx0aW1hc01lbnNhZ2VucyA9IGZ1bmN0aW9uKG1lbnNhZ2VucywgY29uZmlnKSB7XHJcbiAgICB2YXIgaHRtbCA9ICcnO1xyXG4gICAgbWVuc2FnZW5zLmZvckVhY2goKG1lbnNhZ2VtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmICggaW5kZXggPiA0ICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh0bWwgKz0gaXRlbVVsdGltYXNNZW5zYWdlbnMobWVuc2FnZW0sIGNvbmZpZyk7XHJcbiAgICB9KVxyXG4gICAgaHRtbCArPSBgXHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBsaW5rLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7Y29uZmlnLmJhc2VfdXJsfS9hdmlzb3MvbWVuc2FnZW5zXCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VmVyIHRvZGFzPC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIGBcclxuICAgIHJldHVybiBodG1sO1xyXG59XHJcblxyXG5pdGVtVWx0aW1hc01lbnNhZ2VucyA9IGZ1bmN0aW9uKG1lbnNhZ2VtLCBjb25maWcpIHtcclxuICAgIHZhciBjbGFzc05vUmVhZCA9IChtZW5zYWdlbS5yZWFkX2F0ID09PSBudWxsKSA/ICduby1yZWFkJyA6ICcnXHJcbiAgICB2YXIgZm90byA9IChtZW5zYWdlbS5hbGVydGEudXNlci5mb3RvID09PSBudWxsKSA/IGNvbmZpZy5iYXNlX3VybCArICcvaW1hZ2VzL3NlbV9mb3RvLmpwZycgOiBjb25maWcud2Vic2VydmljZV91cmwgKyAnL1VzdWFyaW8vJyArIG1lbnNhZ2VtLmFsZXJ0YS51c2VyLmZvdG9cclxuICAgIHZhciBodG1sID0gYFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIiR7Y2xhc3NOb1JlYWR9IG5vdGlmaWNhdGlvbi1pdGVtXCIgZGF0YS1jb2RpZ289XCIke21lbnNhZ2VtLmFsZXJ0YS5jb2RpZ299XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZXNzYWdlcy1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbSBwdWxsLWxlZnRcIiBzdHlsZT1cInBhZGRpbmc6IDVweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgY2xhc3M9XCJpbWctY2lyY2xlXCIgc3JjPVwiJHtmb3RvfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB1bGwtcmlnaHRcIiBzdHlsZT1cIndpZHRoOjgwJVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1lbnNhZ2VtIGRlIDxzdHJvbmc+JHttZW5zYWdlbS5hbGVydGEudXNlci5uYW1lfTwvc3Ryb25nPjogJHttZW5zYWdlbS5hbGVydGEudGl0dWxvfS48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwidGV4dC1tdXRlZFwiPkVtIGAgKyBtb21lbnQobWVuc2FnZW0uYWxlcnRhLmNyZWF0ZWRfYXQpLmZvcm1hdCgnREQvTU0vWVlZWScpICsgYDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgcm9sZT1cInNlcGFyYXRvclwiIGNsYXNzPVwiZHJvcGRvd24tZGl2aWRlciBkaXZpZGVyXCI+PC9saT5gO1xyXG4gICAgcmV0dXJuIGh0bWw7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdWx0aW1hc01lbnNhZ2VuczsiLCJ1bHRpbW9zSW5mb3JtYXRpdm9zID0gZnVuY3Rpb24obWVuc2FnZW5zLCBjb25maWcpIHtcclxuICAgIC8vIHZhciBodG1sID0gJyc7XHJcbiAgICAvLyBtZW5zYWdlbnMuZm9yRWFjaCgobWVuc2FnZW0sIGluZGV4KSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKCBpbmRleCA+IDQgKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaHRtbCArPSBpdGVtVWx0aW1vc0luZm9ybWF0aXZvcyhtZW5zYWdlbSwgY29uZmlnKTtcclxuICAgIC8vIH0pXHJcbiAgICAvLyBodG1sICs9IGBcclxuICAgIC8vICAgICAgICAgPGxpPlxyXG4gICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGxpbmstYmxvY2tcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtjb25maWcuYmFzZV91cmx9L2F2aXNvcy9pbmZvcm1hdGl2b3NcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5WZXIgdG9kYXM8L3N0cm9uZz5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiPjwvaT5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgPC9saT5cclxuICAgIC8vICAgICAgICAgYFxyXG4gICAgLy8gcmV0dXJuIGh0bWw7XHJcblxyXG5cclxuXHJcbiAgICBsZXQgbGlzdEVsZW1lbnQgPSBbXTtcclxuXHJcblxyXG5cclxuICAgIG1lbnNhZ2Vucy5mb3JFYWNoKChtZW5zYWdlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoIGluZGV4ID4gNCApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaXN0RWxlbWVudFtsaXN0RWxlbWVudC5sZW5ndGhdID0gaXRlbVVsdGltb3NJbmZvcm1hdGl2b3MobWVuc2FnZW0sIGNvbmZpZyk7XHJcbiAgICAgICAgbGV0IGxpU2VwYXJhZG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaVNlcGFyYWRvci5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnc2VwYXJhdG9yJylcclxuICAgICAgICBsaVNlcGFyYWRvci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnZHJvcGRvd24tZGl2aWRlciBkaXZpZGVyJyk7XHJcbiAgICAgICAgbGlzdEVsZW1lbnRbbGlzdEVsZW1lbnQubGVuZ3RoXSA9IGxpU2VwYXJhZG9yO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGxpVmVyTWFpcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaVZlck1haXMuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0ZXh0LWNlbnRlciBsaW5rLWJsb2NrJyk7XHJcbiAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGEuc2V0QXR0cmlidXRlKCdocmVmJywgY29uZmlnLmJhc2VfdXJsICsnL2F2aXNvcy9pbmZvcm1hdGl2b3MnKTtcclxuICAgIGEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkcm9wZG93bi1pdGVtJyk7XHJcbiAgICBhLmlubmVySFRNTCA9ICc8c3Ryb25nPlZlciB0b2Rhczwvc3Ryb25nPiA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPic7XHJcblxyXG4gICAgbGlWZXJNYWlzLmFwcGVuZENoaWxkKGEpO1xyXG5cclxuICAgIGxpc3RFbGVtZW50W2xpc3RFbGVtZW50Lmxlbmd0aF0gPSBsaVZlck1haXM7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3VsdGltb3NJbmZvcm1hdGl2b3MnKTtcclxuICAgIGNvbnNvbGUubG9nKGxpc3RFbGVtZW50KTtcclxuICAgIHJldHVybiBsaXN0RWxlbWVudDtcclxufVxyXG5cclxuaXRlbVVsdGltb3NJbmZvcm1hdGl2b3MgPSBmdW5jdGlvbihtZW5zYWdlbSwgY29uZmlnKSB7XHJcbiAgICB2YXIgY2xhc3NOb1JlYWQgPSAobWVuc2FnZW0ucmVhZF9hdCA9PT0gbnVsbCkgPyAnbm8tcmVhZCcgOiAnJ1xyXG4gICAgdmFyIGZvdG8gPSAobWVuc2FnZW0uYWxlcnRhLnVzZXIuZm90byA9PT0gbnVsbCkgPyBjb25maWcuYmFzZV91cmwgKyAnL2ltYWdlcy9zZW1fZm90by5qcGcnIDogY29uZmlnLndlYnNlcnZpY2VfdXJsICsgJy9Vc3VhcmlvLycgKyBtZW5zYWdlbS5hbGVydGEudXNlci5mb3RvXHJcbiAgICAvLyB2YXIgaHRtbCA9IGBcclxuICAgIC8vICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCIke2NsYXNzTm9SZWFkfSBub3RpZmljYXRpb24taXRlbVwiIGRhdGEtY29kaWdvPVwiJHttZW5zYWdlbS5hbGVydGEuY29kaWdvfVwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVzc2FnZXMtYm94XCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gcHVsbC1sZWZ0XCIgc3R5bGU9XCJwYWRkaW5nOiA1cHhcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIGNsYXNzPVwiaW1nLWNpcmNsZVwiIHNyYz1cIiR7Zm90b31cIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLXJpZ2h0XCIgc3R5bGU9XCJ3aWR0aDo4MCVcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW5zYWdlbSBkZSA8c3Ryb25nPiR7bWVuc2FnZW0uYWxlcnRhLnVzZXIubmFtZX08L3N0cm9uZz46ICR7bWVuc2FnZW0uYWxlcnRhLnRpdHVsb30uPGJyPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj5FbSBgICsgbW9tZW50KG1lbnNhZ2VtLmFsZXJ0YS5jcmVhdGVkX2F0KS5mb3JtYXQoJ0REL01NL1lZWVknKSArIGA8L3NtYWxsPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJzZXBhcmF0b3JcIiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXIgZGl2aWRlclwiPjwvbGk+YDtcclxuICAgIC8vIHJldHVybiBodG1sO1xyXG5cclxuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYCR7Y2xhc3NOb1JlYWR9IG5vdGlmaWNhdGlvbi1pdGVtYCk7XHJcbiAgICBsaS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29kaWdvJywgYCR7bWVuc2FnZW0uYWxlcnRhLmNvZGlnb31gKTtcclxuXHJcbiAgICBsZXQgZGl2RHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdkRyb3BEb3duLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHJvcGRvd24tbWVzc2FnZXMtYm94Jyk7XHJcblxyXG4gICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBhLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHJvcGRvd24taXRlbSBwdWxsLWxlZnQnKTtcclxuICAgIGEuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwYWRkaW5nOiA1cHgnKTtcclxuXHJcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbWctY2lyY2xlJyk7XHJcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBmb3RvKTtcclxuXHJcbiAgICBsZXQgZGl2VGV4dG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdlRleHRvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHVsbC1yaWdodCcpO1xyXG4gICAgZGl2VGV4dG8uc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDo4MCUnKTtcclxuICAgIGRpdlRleHRvLmlubmVySFRNTCA9IGBNZW5zYWdlbSBkZSA8c3Ryb25nPiR7bWVuc2FnZW0uYWxlcnRhLnVzZXIubmFtZX08L3N0cm9uZz46ICR7bWVuc2FnZW0uYWxlcnRhLnRpdHVsb30uPGJyPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj5FbSBgICsgbW9tZW50KG1lbnNhZ2VtLmFsZXJ0YS5jcmVhdGVkX2F0KS5mb3JtYXQoJ0REL01NL1lZWVknKSArIGA8L3NtYWxsPmA7XHJcblxyXG5cclxuXHJcbiAgICBhLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBkaXZEcm9wRG93bi5hcHBlbmRDaGlsZChhKTtcclxuICAgIGRpdkRyb3BEb3duLmFwcGVuZENoaWxkKGRpdlRleHRvKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKGRpdkRyb3BEb3duKTtcclxuICAgIGNvbnNvbGUubG9nKCdpdGVtVWx0aW1vc0luZm9ybWF0aXZvcycpXHJcbiAgICBjb25zb2xlLmxvZyhsaSk7XHJcbiAgICByZXR1cm4gbGk7XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHVsdGltb3NJbmZvcm1hdGl2b3M7XHJcbiIsIi8qXHJcbiAgICBSb23DoXJpbyBNZWxvXHJcbiAqL1xyXG5cclxuaWYgKCQpIHtcclxuICAgIGlmICgkLnN1bW1lcm5vdGUpIHtcclxuICAgICAgICBpZiAoJC5zdW1tZXJub3RlLnZlcnNpb24pIHtcclxuICAgICAgICAgICAgaWYgKCQuc3VtbWVybm90ZS52ZXJzaW9uICE9ICcwLjguMTInKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdWZXJzw6NvIGRvIFN1bW1lcm5vdGUgZGV2ZSBzZXIgMC44LjEyIScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignU3VtbWVybm90ZSDDqSBuZWNlc3PDoXJpbyEnKTtcclxuICAgIH1cclxuXHJcbn0gZWxzZSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ2pRdWVyeSDDqSBuZWNlc3PDoXJpbyEnKTtcclxufVxyXG5cclxuXHJcbndpbmRvdy5DVE1lc2FnZW0gPSByZXF1aXJlKCcuL0NUTWVuc2FnZW0nKTtcclxud2luZG93LkNUVG9hc3QgPSByZXF1aXJlKCcuL0NUVG9hc3QnKTtcclxud2luZG93LkNUVG9hc3QgPSBuZXcgQ1RUb2FzdCgpO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==