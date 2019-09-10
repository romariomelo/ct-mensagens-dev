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
        $( elemento ).addClass('ct-ultimas-mensagens');

        if ( ! Array.isArray(this.mensagens) ) {
            $( elemento ).html('<p>Mensagens não encontradas, favor recarregue a página!</p>');
        }

        let listElements = ultimosInformativos( this.informativos, this.config );

        /*
        listElements.forEach(function(e){

            $( elemento ).append( e );

        })

         */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NUTWVuc2FnZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NUVG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmNvZXMvZm4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWwvQ2FpeGFEZUVudHJhZGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWwvQ29udmVyc2FIVE1MLmpzIiwid2VicGFjazovLy8uL3NyYy9odG1sL01lbnNhZ2Vuc0VudmlhZGFzSFRNTC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaHRtbC9SZXNwb25kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWwvVG9hc3RIVE1MLmpzIiwid2VicGFjazovLy8uL3NyYy9odG1sL1VsdGltYXNNZW5zYWdlbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWwvVWx0aW1vc0luZm9ybWF0aXZvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHFCQUFxQixtQkFBTyxDQUFDLDJEQUF1QjtBQUNwRCx1QkFBdUIsbUJBQU8sQ0FBQywrREFBeUI7QUFDeEQsMEJBQTBCLG1CQUFPLENBQUMscUVBQTRCO0FBQzlELGdCQUFnQixtQkFBTyxDQUFDLGlEQUFrQjtBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyx1REFBcUI7QUFDaEQsNEJBQTRCLG1CQUFPLENBQUMseUVBQThCOztBQUVsRTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxhQUFhOztBQUViOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGFBQWE7O0FBRWIsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxhQUFhOztBQUViLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNsVUEsZ0JBQWdCLG1CQUFPLENBQUMsaURBQWtCOztBQUUxQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBLHlCOzs7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O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxZQUFZLG1DQUFtQyx1QkFBdUI7QUFDMUc7QUFDQTtBQUNBLHlFQUF5RSxLQUFLO0FBQzlFO0FBQ0E7QUFDQSx5REFBeUQsMEJBQTBCLGFBQWEsdUJBQXVCO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxZQUFZO0FBQzVDLHNDQUFzQyx1QkFBdUI7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsMEJBQTBCLGFBQWEsdUJBQXVCOzs7O0FBSTlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7OztBQUdBLG1CQUFtQixtQkFBTyxDQUFDLHlDQUFjO0FBQ3pDLGlCQUFpQixtQkFBTyxDQUFDLG1DQUFXO0FBQ3BDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBjYWl4YURlRW50cmFkYSA9IHJlcXVpcmUoJy4vaHRtbC9DYWl4YURlRW50cmFkYScpO1xyXG52YXIgdWx0aW1hc01lbnNhZ2VucyA9IHJlcXVpcmUoJy4vaHRtbC9VbHRpbWFzTWVuc2FnZW5zJyk7XHJcbnZhciB1bHRpbW9zSW5mb3JtYXRpdm9zID0gcmVxdWlyZSgnLi9odG1sL1VsdGltb3NJbmZvcm1hdGl2b3MnKTtcclxudmFyIHJlc3BvbmRlciA9IHJlcXVpcmUoJy4vaHRtbC9SZXNwb25kZXInKTtcclxudmFyIENvbnZlcnNhSFRNTCA9IHJlcXVpcmUoJy4vaHRtbC9Db252ZXJzYUhUTUwnKTtcclxudmFyIG1lbnNhZ2Vuc0VudmlhZGFzSFRNTCA9IHJlcXVpcmUoJy4vaHRtbC9NZW5zYWdlbnNFbnZpYWRhc0hUTUwnKTtcclxuXHJcbmNsYXNzIENUTWVuc2FnZW0ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZyA9IG51bGwpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jb25maWcgPSB7fTtcclxuICAgICAgICB0aGlzLm1lbnNhZ2VucyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5mb3JtYXRpdm9zID0gW107XHJcblxyXG4gICAgICAgIGlmICggY29uZmlnICE9PSBudWxsICkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIGNvbmZpZyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2FpeGFEZUVudHJhZGEoIGVsZW1lbnRvICkge1xyXG4gICAgICAgICQoIGVsZW1lbnRvICkuYWRkQ2xhc3MoJ2N0LW1lbnNhZ2VtJyk7XHJcblxyXG4gICAgICAgIGlmICggISBBcnJheS5pc0FycmF5KHRoaXMubWVuc2FnZW5zKSApIHtcclxuICAgICAgICAgICAgJCggZWxlbWVudG8gKS5odG1sKCc8cD5NZW5zYWdlbnMgbsOjbyBlbmNvbnRyYWRhcywgZmF2b3IgcmVjYXJyZWd1ZSBhIHDDoWdpbmEhPC9wPicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCggZWxlbWVudG8gKS5odG1sKCBjYWl4YURlRW50cmFkYSggdGhpcy5tZW5zYWdlbnMsIHRoaXMuY29uZmlnICkgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJVbHRpbWFzTWVuc2FnZW5zKCBlbGVtZW50byApIHtcclxuICAgICAgICAkKCBlbGVtZW50byApLmFkZENsYXNzKCdjdC11bHRpbWFzLW1lbnNhZ2VucycpO1xyXG5cclxuICAgICAgICBpZiAoICEgQXJyYXkuaXNBcnJheSh0aGlzLm1lbnNhZ2VucykgKSB7XHJcbiAgICAgICAgICAgICQoIGVsZW1lbnRvICkuaHRtbCgnPHA+TWVuc2FnZW5zIG7Do28gZW5jb250cmFkYXMsIGZhdm9yIHJlY2FycmVndWUgYSBww6FnaW5hITwvcD4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoIGVsZW1lbnRvICkuaHRtbCggdWx0aW1hc01lbnNhZ2VucyggIHRoaXMubWVuc2FnZW5zLCB0aGlzLmNvbmZpZyApICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVWx0aW1vc0luZm9ybWF0aXZvcyggZWxlbWVudG8gKSB7XHJcbiAgICAgICAgJCggZWxlbWVudG8gKS5hZGRDbGFzcygnY3QtdWx0aW1hcy1tZW5zYWdlbnMnKTtcclxuXHJcbiAgICAgICAgaWYgKCAhIEFycmF5LmlzQXJyYXkodGhpcy5tZW5zYWdlbnMpICkge1xyXG4gICAgICAgICAgICAkKCBlbGVtZW50byApLmh0bWwoJzxwPk1lbnNhZ2VucyBuw6NvIGVuY29udHJhZGFzLCBmYXZvciByZWNhcnJlZ3VlIGEgcMOhZ2luYSE8L3A+Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbGlzdEVsZW1lbnRzID0gdWx0aW1vc0luZm9ybWF0aXZvcyggdGhpcy5pbmZvcm1hdGl2b3MsIHRoaXMuY29uZmlnICk7XHJcblxyXG4gICAgICAgIC8qXHJcbiAgICAgICAgbGlzdEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgICAgICAgICAkKCBlbGVtZW50byApLmFwcGVuZCggZSApO1xyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAgKi9cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJSZXNwb25kZXIoIG1lbnNhZ2VtLCBlbGVtZW50byApIHtcclxuXHJcbiAgICAgICAgJCggZWxlbWVudG8gKS5hZGRDbGFzcygnY3QtbWVuc2FnZW0tcmVwbHknKTtcclxuXHJcbiAgICAgICAgJCggZWxlbWVudG8gKS5odG1sKCByZXNwb25kZXIobWVuc2FnZW0pLCB0aGlzLmNvbmZpZyApO1xyXG5cclxuICAgICAgICAvL3RoaXMuZGVzdHJveUVkaXRvcignI2N0TV90ZXh0bycpO1xyXG5cclxuICAgICAgICAvL3RpbnltY2UuYmFzZVVSTCA9IHRoaXMuY29uZmlnLmJhc2VfdXJsICsgJy9qcy90aW55bWNlJztcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVFZGl0b3IoICcjY3RNX3RleHRvJyApO1xyXG5cclxuICAgICAgICAkKCAnI2N0TV9kaXZSZXNwb25kZXJSZW5kZXJpemVkJyApLmF0dHIoJ2RhdGEtY29kaWdvJywgbWVuc2FnZW0uYWxlcnRhLmNvZGlnbyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNvbnZlcnNhKCBjb252ZXJzYSwgZWxlbWVudG8gKSB7XHJcbiAgICAgICAgJCggZWxlbWVudG8gKS5odG1sKCBDb252ZXJzYUhUTUwoIGNvbnZlcnNhLCB0aGlzLmNvbmZpZyApICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTWVuc2FnZW5zRW52aWFkYXMoZWxlbWVudG8sIG1lbnNhZ2Vucykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCB0aGlzLmNvbmZpZyApO1xyXG4gICAgICAgICQoIGVsZW1lbnRvICkuaHRtbCggbWVuc2FnZW5zRW52aWFkYXNIVE1MKCBtZW5zYWdlbnMsIHRoaXMuY29uZmlnICkgKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRNZW5zYWdlbnMobWVuc2FnZW5zKSB7XHJcblxyXG4gICAgICAgIGlmICggISBBcnJheS5pc0FycmF5KHRoaXMubWVuc2FnZW5zKSApIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdNZW5zYWdlbnMgZGV2ZSBzZXIgdW0gQXJyYXkuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaW5mb3JtYXRpdm9zID0gdGhpcy5zb21lbnRlSW5mb3JtYXRpdm9zKCBtZW5zYWdlbnMgKTtcclxuICAgICAgICB0aGlzLm1lbnNhZ2VucyA9IHRoaXMuc29tZW50ZU1lbnNhZ2VucyggbWVuc2FnZW5zICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWVuc2FnZW5zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lbnNhZ2VucztcclxuICAgIH1cclxuXHJcbiAgICBidG5MaWRhTmFvTGlkYUNsaWNrKGZuKSB7XHJcblxyXG4gICAgICAgIGlmICggdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY3RNZW5zYWdlbSA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAkKCcuYnRuLW1hcmNhci1jb21vLW5hby1saWRhJykuY2xpY2soZnVuY3Rpb24oKXtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5jbG9zZXN0KCcuaW5ib3gtcm93JykuYXR0cignZGF0YS1jb2RpZ28nKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWVuc2FnZW0gPSBjdE1lbnNhZ2VtLmdldE1zZ0J5SWQoIGlkICk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm4obWVuc2FnZW0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdWb2PDqiBkZXZlIHBhc3NhciB1bWEgZnVuw6fDo28gY29tbyBwYXLDom1ldHJvLicpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJ0blJlc3BvbmRlckNsaWNrKGZuKSB7XHJcblxyXG4gICAgICAgIGlmICggdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY3RNZW5zYWdlbSA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAkKCcuYnRuLXJlc3BvbmRlcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5jbG9zZXN0KCcuY3QtaW5mby1tZW5zYWdlbScpLmF0dHIoJ2RhdGEtY29kaWdvJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1lbnNhZ2VtID0gY3RNZW5zYWdlbS5nZXRNc2dCeUlkKCBpZCApO1xyXG5cclxuICAgICAgICAgICAgICAgIGZuKG1lbnNhZ2VtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVm9jw6ogZGV2ZSBwYXNzYXIgdW1hIGZ1bsOnw6NvIGNvbW8gcGFyw6JtZXRyby4nKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBidG5FeGNsdWlyQ2xpY2soZm4pIHtcclxuXHJcbiAgICAgICAgaWYgKCB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdE1lbnNhZ2VtID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICQoJy5idG4tZXhjbHVpcicpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5jbG9zZXN0KCcuY3QtaW5mby1tZW5zYWdlbScpLmF0dHIoJ2RhdGEtY29kaWdvJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1lbnNhZ2VtID0gY3RNZW5zYWdlbS5nZXRNc2dCeUlkKCBpZCApO1xyXG5cclxuICAgICAgICAgICAgICAgIGZuKG1lbnNhZ2VtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVm9jw6ogZGV2ZSBwYXNzYXIgdW1hIGZ1bsOnw6NvIGNvbW8gcGFyw6JtZXRyby4nKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBidG5FbnZpYXJSZXNwb3N0YUNsaWNrKGZuKSB7XHJcblxyXG4gICAgICAgIGlmICggdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY3RNZW5zYWdlbSA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAkKCcjY3RNX2J0bkVudmlhclJlc3Bvc3RhJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy90aW55bWNlLnRyaWdnZXJTYXZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRpdlJlc3BvbmRlciA9ICQodGhpcykuY2xvc2VzdCgnI2N0TV9kaXZSZXNwb25kZXJSZW5kZXJpemVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3Bvc3RhID0ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aXR1bG86IGRpdlJlc3BvbmRlci5maW5kKCdpbnB1dFtuYW1lPXRpdHVsb10nKS52YWwoKSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dG86IGRpdlJlc3BvbmRlci5maW5kKCd0ZXh0YXJlYVtuYW1lPXRleHRvXScpLnZhbCgpXHJcblxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaWQgPSAkKHRoaXMpLmNsb3Nlc3QoJyNjdE1fZGl2UmVzcG9uZGVyUmVuZGVyaXplZCcpLmF0dHIoJ2RhdGEtY29kaWdvJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG1lbnNhZ2VtID0gY3RNZW5zYWdlbS5nZXRNc2dCeUlkKCBpZCApO1xyXG5cclxuICAgICAgICAgICAgICAgIGZuKG1lbnNhZ2VtLCByZXNwb3N0YSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJ0bk5vdmFNZW5zYWdlbUNsaWNrKGZuKSB7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcclxuXHJcbiAgICAgICAgICAgICQoJyNidC1ub3ZhLW1lbnNhZ2VtJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLm5hdi1tc2cnKS5yZW1vdmVBdHRyKCdkaXNhYmxlZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmbigpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYnRuQ2FpeGFEZUVudHJhZGFDbGljayhmbikge1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcjYnQtY2FpeGEtZGUtZW50cmFkYScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGZuKCk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1BhcsOibWV0cm8gZGV2ZSBzZXIgZnVuw6fDo28uJyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYnRuTWVuc2FnZW5zRW52aWFkYXNDbGljayhmbikge1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcjYnQtbWluaGFzLW1lbnNhZ2VucycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICQoJy5uYXYtbXNnJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm4oKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdQYXLDom1ldHJvIGRldmUgc2VyIGZ1bsOnw6NvLicpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldE1zZ0J5SWQoaWQpIHtcclxuICAgICAgICBpZiAoIEFycmF5LmlzQXJyYXkodGhpcy5tZW5zYWdlbnMpICkge1xyXG4gICAgICAgICAgICBsZXQgck1zZyA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMubWVuc2FnZW5zLmZvckVhY2goZnVuY3Rpb24gKG1zZykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1zZy5hbGVydGEuY29kaWdvID09PSBwYXJzZUludCggaWQgKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJNc2cgPSBtc2c7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJNc2c7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignTWVuc2FnZW5zIGRldmVtIHNlciBBcnJheS4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGl0dWxvKHRpdHVsbykge1xyXG4gICAgICAgICQoJyNpYm94Q2FpeGFEZUVudHJhZGEgaDUnKS50ZXh0KHRpdHVsbyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogQlVUVE9OUyAqL1xyXG5cclxuICAgIGdldENhaXhhRGVFbnRyYWRhQnV0dG9uKCkge1xyXG4gICAgICAgIHJldHVybiAkKCcjYnQtY2FpeGEtZGUtZW50cmFkYScpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5vdmFNZW5zYWdlbUJ1dHRvbigpIHtcclxuICAgICAgICByZXR1cm4gJCgnI2J0LW5vdmEtbWVuc2FnZW0nKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFZGl0b3IoIGVsZSApIHtcclxuXHJcbiAgICAgICAgJChlbGUpLnN1bW1lcm5vdGUoe1xyXG4gICAgICAgICAgICB0b29sYmFyOiBbXHJcbiAgICAgICAgICAgICAgICAvL1tncm91cE5hbWUsIFtsaXN0IG9mIGJ1dHRvbl1dXHJcbiAgICAgICAgICAgICAgICBbJ3N0eWxlJywgWyd1bmRvJywncmVkbycsJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdjbGVhcicsICdmb3JlY29sb3InXV0sXHJcbiAgICAgICAgICAgICAgICBbJ3BhcmEnLCBbJ3VsJywgJ3BhcmFncmFwaCcsICdzdHlsZSddXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBwb3BvdmVyOiB7fSxcclxuICAgICAgICAgICAgbGFuZzogJ3B0LUJSJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnNTAwcHgnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3lFZGl0b3IoIGVsZSApIHtcclxuICAgICAgICAkKCBlbGUgKS5zdW1tZXJub3RlKCdkZXN0cm95Jyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHNvbWVudGVJbmZvcm1hdGl2b3MoYXZpc29zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdHJhck1lbnNzYWdlbnNJbmZvcm1hdGl2b3MoIGF2aXNvcywgJ0lORk9STUFUSVZPUycpO1xyXG4gICAgfVxyXG5cclxuICAgIHNvbWVudGVNZW5zYWdlbnMoYXZpc29zKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdHJhck1lbnNzYWdlbnNJbmZvcm1hdGl2b3MoIGF2aXNvcywnTUVOU0FHRU0nKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0cmFyTWVuc3NhZ2Vuc0luZm9ybWF0aXZvcyhhdmlzb3MsIHRpcG8pIHtcclxuICAgICAgICB2YXIgcmV0b3JubyA9IFtdO1xyXG4gICAgICAgIGF2aXNvcy5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUuYWxlcnRhLnRpcG8gPT09IHRpcG8pIHtcclxuICAgICAgICAgICAgICAgIHJldG9ybm9bcmV0b3Juby5sZW5ndGhdID0gZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXRvcm5vO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDVE1lbnNhZ2VtO1xyXG4iLCJ2YXIgVG9hc3RIVE1MID0gcmVxdWlyZSgnLi9odG1sL1RvYXN0SFRNTCcpO1xyXG5cclxuY2xhc3MgQ1RUb2FzdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnID0ge1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyAhPT0gbnVsbCApIHtcclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIGNvbmZpZyk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRDb25maWcoY29uZmlnKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZyAhPT0gbnVsbCApIHtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZywgY29uZmlnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RHVyYXRpb24obWlsaXNlY29uZCkge1xyXG4gICAgICAgIGlmIChpc05hTihtaWxpc2Vjb25kKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5kdXJhdGlvbiA9IG1pbGlzZWNvbmQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGFyw6JtZXRybyBpbnbDoWxpZG8hJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dUb2FzdChtc2cpIHtcclxuICAgICAgICBsZXQgaWRUb2FzdCA9IE1hdGguY2VpbCggTWF0aC5yYW5kb20oKSAqIDEwMDAgKTtcclxuICAgICAgICBpZiAoICQoJy50b2FzdC13cmFwcGVyJykubGVuZ3RoID09PSAwICkge1xyXG4gICAgICAgICAgICAkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwidG9hc3Qtd3JhcHBlclwiPjwvZGl2PicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcudG9hc3Qtd3JhcHBlcicpLmFwcGVuZCggVG9hc3RIVE1MKG1zZywgdGhpcy5jb25maWcsIGlkVG9hc3QpICk7XHJcbiAgICAgICAgJCgnLmN0LXRvYXN0I3RfJyArIGlkVG9hc3QpLnNob3coKTtcclxuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIF90aGlzLmRpc21pc3NUb2FzdChpZFRvYXN0KTtcclxuICAgICAgICB9LCB0aGlzLmNvbmZpZy5kdXJhdGlvbik7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcjdG9hc3RDbG9zZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIF90aGlzLmRpc21pc3NUb2FzdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc21pc3NUb2FzdChpZFRvYXN0KSB7XHJcbiAgICAgICAgJCgnLmN0LXRvYXN0I3RfJyArIGlkVG9hc3QpLnJlbW92ZUNsYXNzKCdhbmltYXRlZCBmYWRlSW5VcCcpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJy5jdC10b2FzdCN0XycgKyBpZFRvYXN0KS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZU91dERvd24nKTtcclxuICAgICAgICB9LCAxMDApO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcuY3QtdG9hc3QjdF8nICsgaWRUb2FzdCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBDVFRvYXN0OyIsImV4cG9ydCBjb25zdCBsZXJNYWlzID0gZnVuY3Rpb24oc3RyLCB0YW1hbmhvID0gNTApIHtcclxuICAgIGlmIChzdHIubGVuZ3RoIDw9IHRhbWFuaG8pIHtcclxuICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgfSBlbHNlIGlmIChzdHIubGVuZ3RoID4gdGFtYW5obykge1xyXG4gICAgICAgIHdoaWxlICggc3RyW3RhbWFuaG9dICE9PSAnICcgKSB7XHJcbiAgICAgICAgICAgIHRhbWFuaG8gKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0ci5zdWJzdHJpbmcoMCwgdGFtYW5obykgKyAnLi4uIExlciBtYWlzLic7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXREYXRhUmVsYXRpdmEgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICBsZXQgZCA9IG1vbWVudChkYXRhKTtcclxuICAgIGxldCBob2plID0gbW9tZW50KG5ldyBEYXRlKCkpO1xyXG4gICAgbGV0IGRpZmVyZW5jYSA9IGhvamUuZGlmZihkLCAnZGF5cycpO1xyXG5cclxuICAgIGlmICggZGlmZXJlbmNhID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGQuZm9ybWF0KCdbSG9qZSDDoHNdIEhIOm1tJylcclxuICAgIH0gZWxzZSBpZiAoIGRpZmVyZW5jYSA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiBkLmZvcm1hdCgnW09udGVtIMOgc10gSEg6bW0nKVxyXG4gICAgfSBlbHNlIGlmICggZGlmZXJlbmNhIDwgMTgwKSB7XHJcbiAgICAgICAgcmV0dXJuIGQuZm9ybWF0KCdbRW1dIEREIFtkZV0gTU1NJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBkLmZvcm1hdCgnW0VtXSBERC9NTS9ZWVlZJyk7XHJcbiAgICB9XHJcbn0iLCIvL2ltcG9ydCB7bGVyTWFpc30gZnJvbSBcIi4uL2Z1bmNvZXMvZm5cIjtcclxudmFyIGZuID0gcmVxdWlyZShcIi4uL2Z1bmNvZXMvZm5cIik7XHJcblxyXG5jYWl4YURlRW50cmFkYSA9IGZ1bmN0aW9uKG1lbnNhZ2VucywgY29uZmlnKSB7XHJcbiAgICBpZiAobWVuc2FnZW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBjYWl4YURlRW50cmFkYVZhemlhSHRtbChjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBodG1sID0gY2FiZWNhbGhvQ2FpeGFEZUVudHJhZGEoY29uZmlnKTtcclxuXHJcbiAgICBodG1sICs9ICc8ZGl2IGlkPVwiY3RNX2NvcnBvX2NhaXhhRGVFbnRyYWRhXCI+JztcclxuXHJcbiAgICBtZW5zYWdlbnMuZm9yRWFjaCgobWVuc2FnZW0pID0+IHtcclxuICAgICAgICBodG1sICs9IGl0ZW1DYWl4YURlRW50cmFkYShtZW5zYWdlbSwgY29uZmlnKVxyXG4gICAgfSk7XHJcblxyXG4gICAgaHRtbCArPSAnPC9kaXY+JztcclxuICAgIHJldHVybiBodG1sO1xyXG59XHJcblxyXG5jYWJlY2FsaG9DYWl4YURlRW50cmFkYSA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICR7YnRuUmV0b3JuYXIoY29uZmlnKX1cclxuICAgICR7YnRuQ2FpeGFEZUVudHJhZGEoY29uZmlnKX1cclxuICAgICR7YnRuTWVuc2FnZW5zRW52aWFkYXMoY29uZmlnKX1cclxuICAgICR7YnRuTm92YU1lbnNhZ2VtKGNvbmZpZyl9ICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG59XHJcblxyXG5pdGVtQ2FpeGFEZUVudHJhZGEgPSBmdW5jdGlvbihtZW5zYWdlbSwgY29uZmlnKSB7XHJcbiAgICBsZXQgY2xhc3NOb1JlYWQgPSAobWVuc2FnZW0ucmVhZF9hdCA9PT0gbnVsbCkgPyAnbm8tcmVhZCcgOiAnJztcclxuXHJcbiAgICBsZXQgZm90byA9ICggbWVuc2FnZW0uYWxlcnRhLnVzZXIuZm90byA9PT0gbnVsbCApID8gY29uZmlnLmJhc2VfdXJsICsgJy9pbWFnZXMvc2VtX2ZvdG8uanBnJyA6IGNvbmZpZy53ZWJzZXJ2aWNlX3VybCArICcvVXN1YXJpby8nICsgbWVuc2FnZW0uYWxlcnRhLnVzZXIuZm90bztcclxuXHJcbiAgICBsZXQgdGl0dWxvID0gZm4ubGVyTWFpcyhtZW5zYWdlbS5hbGVydGEudGl0dWxvKTtcclxuXHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cInJvdyBpbmJveC1yb3cgY3QtaW5mby1tZW5zYWdlbSAke2NsYXNzTm9SZWFkfVwiIGRhdGEtY29kaWdvPVwiJHttZW5zYWdlbS5hbGVydGEuY29kaWdvfVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLXhzLTEyIGNvbC1zbS0zIGNvbC1zbS1wdXNoLTkgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAke2J0bkV4Y2x1aXIobWVuc2FnZW0pfVxyXG4gICAgICAgICAgICAke2J0blJlc3BvbnNlcihtZW5zYWdlbSl9XHJcbiAgICAgICAgICAgICR7YnRuTGlkYU5hb0xpZGEobWVuc2FnZW0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLXhzLTEyIGNvbC1zbS0xIGNvbC1zbS1wdWxsLTMgaW5ib3gtYXZhdGFyXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIke2NvbmZpZy5iYXNlX3VybH0vYXZpc29zL21lbnNhZ2Vucy8ke21lbnNhZ2VtLmFsZXJ0YS5jb2RpZ299XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Zm90b31cIiBjbGFzcz1cImltZy1yZXNwb25zaXZlIGltZy1jaXJjbGVcIj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgY29sLXhzLTEyIGNvbC1zbS04IGNvbC1zbS1wdWxsLTNcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiR7Y29uZmlnLmJhc2VfdXJsfS9hdmlzb3MvbWVuc2FnZW5zLyR7bWVuc2FnZW0uYWxlcnRhLmNvZGlnb31cIj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImluYm94LW5vbWVcIj4ke21lbnNhZ2VtLmFsZXJ0YS51c2VyLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImluYm94LWFzc3VudG9cIj4ke3RpdHVsb308L2g1PlxyXG4gICAgICAgICAgICAgICAgPHA+JHttZW5zYWdlbS5hbGVydGEudGV4dG99PC9wPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsPiR7Zm4uZ2V0RGF0YVJlbGF0aXZhKG1lbnNhZ2VtLmFsZXJ0YS5jcmVhdGVkX2F0KX08L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGA7XHJcbn1cclxuXHJcbnZhciBidG5FeGNsdWlyID0gZnVuY3Rpb24obWVuc2FnZW0pIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWV4Y2x1aXJcIiB0aXRsZT1cIkV4Y2x1aXIgTWVuc2FnZW1cIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgYDtcclxufVxyXG5cclxudmFyIGJ0bkxpZGFOYW9MaWRhID0gZnVuY3Rpb24obWVuc2FnZW0pIHtcclxuICAgIGxldCBmYSA9IChtZW5zYWdlbS5yZWFkX2F0ID09PSBudWxsKSA/ICdmYS1lbnZlbG9wZS1vcGVuJyA6ICdmYS1lbnZlbG9wZSc7XHJcbiAgICBsZXQgdGl0bGUgPSAobWVuc2FnZW0ucmVhZF9hdCA9PT0gbnVsbCkgPyAnTWFyY2FyIG1lbnNhZ2VtIGNvbW8gbGlkYS4nIDogJ01hcmNhciBtZW5zYWdlbSBjb21vIG7Do28gbGlkYScgO1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1tYXJjYXItY29tby1uYW8tbGlkYVwiIHRpdGxlPVwiJHt0aXRsZX1cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSAke2ZhfVwiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIGA7XHJcbn1cclxuXHJcbnZhciBidG5SZXNwb25zZXIgPSBmdW5jdGlvbihtZW5zYWdlbSkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tcmVzcG9uZGVyXCIgdGl0bGU9XCJSZXNwb25kZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcmVwbHlcIj48L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgYDtcclxufVxyXG5cclxudmFyIGNhaXhhRGVFbnRyYWRhVmF6aWFIdG1sID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcbiAgICByZXR1cm4gY2FiZWNhbGhvQ2FpeGFEZUVudHJhZGEoY29uZmlnKSArIGBcclxuICAgIDxkaXYgaWQ9XCJjdE1fY29ycG9fY2FpeGFEZUVudHJhZGFcIj5cclxuICAgICAgICA8aDIgc3R5bGU9XCJ0ZXh0LWFsaWduOmNlbnRlclwiPlZvY8OqIG7Do28gcG9zc3VpIG1lbnNhZ2VucyE8L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG59XHJcblxyXG52YXIgYnRuUmV0b3JuYXIgPSBmdW5jdGlvbihjb25maWcpIHtcclxuICAgIHJldHVybiBgXHJcbjxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICBjb2wtbGctMiBjb2wtbWQtMyBjb2wtc20tNlwiPlxyXG5cdDxhIGhyZWY9XCIke2NvbmZpZy5iYXNlX3VybH1cIj5cclxuXHRcdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tYmxvY2tcIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJmYSBmYS1hcnJvdy1sZWZ0XCI+PC9pPiBSZXRvcm5hclxyXG5cdFx0PC9idXR0b24+XHJcblx0PC9hPlxyXG48L2Rpdj5gO1xyXG59XHJcblxyXG5idG5DYWl4YURlRW50cmFkYSA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAgY29sLWxnLTIgY29sLW1kLTMgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13aGl0ZSBidG4tYmxvY2sgbmF2LW1zZ1wiIGRpc2FibGVkPVwiXCIgdHlwZT1cImJ1dHRvblwiIGlkPVwiYnQtY2FpeGEtZGUtZW50cmFkYVwiPjxpIGNsYXNzPVwiZmFzIGZhLWVudmVsb3BlXCI+PC9pPiBDYWl4YSBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyYWRhXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxuYnRuTWVuc2FnZW5zRW52aWFkYXMgPSBmdW5jdGlvbihjb25maWcpIHtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgIGNvbC1sZy0yIGNvbC1tZC0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2hpdGUgYnRuLWJsb2NrIG5hdi1tc2dcIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJidC1taW5oYXMtbWVuc2FnZW5zXCI+PGkgY2xhc3M9XCJmYXMgZmEtc2hhcmUtc3F1YXJlXCI+PC9pPiBNZW5zYWdlbnMgZW52aWFkYXNcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbmJ0bk5vdmFNZW5zYWdlbSA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAgY29sLWxnLTIgY29sLW1kLTMgY29sLXNtLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13aGl0ZSBidG4tYmxvY2sgbmF2LW1zZ1wiIHR5cGU9XCJidXR0b25cIiBpZD1cImJ0LW5vdmEtbWVuc2FnZW1cIj48aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+IE5vdmEgbWVuc2FnZW1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY2FpeGFEZUVudHJhZGE7IiwidmFyIGZuID0gcmVxdWlyZShcIi4uL2Z1bmNvZXMvZm5cIik7XHJcblxyXG5Db252ZXJzYUhUTUwgPSBmdW5jdGlvbiggY29udmVyc2EsIGNvbmZpZyApIHtcclxuICAgIHJldHVybiBjb252ZXJzYVJlbmQoY29udmVyc2EsIGNvbmZpZyApO1xyXG59XHJcblxyXG52YXIgY29udmVyc2FSZW5kID0gZnVuY3Rpb24oIGNvbnZlcnNhLCBjb25maWcgKSB7XHJcblxyXG4gICAgdmFyIGh0bWwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiaWJveCBjdC1pbmZvLW1lbnNhZ2VtXCIgIGRhdGEtY29kaWdvPVwiJHtjb252ZXJzYVswXS5hbGVydGEuY29kaWdvfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWJveC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIHN0eWxlPVwiZm9udC13ZWlnaHQ6IGJvbGQ7XCI+JHtjb252ZXJzYVswXS5hbGVydGEudGl0dWxvfTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlib3gtY29udGVudCBpYm94LW1lbnNhZ2VtXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWxlZnQgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtidG5SZXNwb25kZXIoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtidG5FeGNsdWlyKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgLy9cclxuXHJcbiAgICBjb252ZXJzYS5mb3JFYWNoKGZ1bmN0aW9uKG1lbnNhZ2VtKXtcclxuICAgICAgICBodG1sICs9IG1lbnNhZ2VtQ29udmVyc2EoIG1lbnNhZ2VtLCBjb25maWcgKTtcclxuICAgIH0pXHJcblxyXG5cclxuICAgIGh0bWwgKz0gYDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICByZXR1cm4gaHRtbDtcclxuXHJcbn1cclxuXHJcbnZhciBtZW5zYWdlbUNvbnZlcnNhID0gZnVuY3Rpb24obWVuc2FnZW0sIGNvbmZpZykge1xyXG4gICAgbGV0IGZvdG8gPSAoIG1lbnNhZ2VtLmFsZXJ0YS51c2VyLmZvdG8gPT09IG51bGwgKSA/IGNvbmZpZy5iYXNlX3VybCArICcvaW1hZ2VzL3NlbV9mb3RvLmpwZycgOiBjb25maWcud2Vic2VydmljZV91cmwgKyAnL1VzdWFyaW8vJyArIG1lbnNhZ2VtLmFsZXJ0YS51c2VyLmZvdG87XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cInJvdyBtZW5zYWdlbS1jYWJlY2FsaG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy00IGNvbC14cy1vZmZzZXQtNCBjb2wtc20tMiBjb2wtc20tb2Zmc2V0LTAgY29sLW1kLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZSBpbWctY2lyY2xlXCIgc3JjPVwiJHtmb3RvfVwiIGFsdD1cIkZvdG8gZGUgJHttZW5zYWdlbS5hbGVydGEudXNlci5uYW1lfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTAgY29sLW1kLTExXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+JHttZW5zYWdlbS5hbGVydGEudXNlci5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+JHttb21lbnQobWVuc2FnZW0uYWxlcnRhLmNyZWF0ZWRfYXQpLmZvcm1hdCgnREQvTU0vWVlZWScpfSBhcyAke21vbWVudChtZW5zYWdlbS5hbGVydGEuY3JlYXRlZF9hdCkuZm9ybWF0KCdISDptbTpzcycpfTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBtZW5zYWdlbS10ZXh0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHttZW5zYWdlbS5hbGVydGEudGV4dG8ucmVwbGFjZSgvXFxyP1xcbi9nLCAnPGJyIC8+Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxufVxyXG5cclxudmFyIGJ0blJlc3BvbmRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbSBidG4tcmVzcG9uZGVyXCIgaWQ9XCJidC1yZXNwb25kZXJcIiB0aXRsZT1cIlJlc3BvbmRlclwiPjxpIGNsYXNzPVwiZmFzIGZhLXJlcGx5XCIgc3R5bGU9XCJ3aWR0aDogMjBweFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlc3BvbmRlcjwvYnV0dG9uPmA7XHJcbn1cclxuXHJcbnZhciBidG5FeGNsdWlyID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gYDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tc20gYnRuLWV4Y2x1aXJcIiBpZD1cImJ0LWV4Y2x1aXJcIiB0aXRsZT1cIkV4Y2x1aXJcIj48aSBjbGFzcz1cImZhcyBmYS10cmFzaC1hbHRcIiBzdHlsZT1cIndpZHRoOiAyMHB4XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhjbHVpcjwvYnV0dG9uPmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ29udmVyc2FIVE1MOyIsInZhciBmbiA9IHJlcXVpcmUoXCIuLi9mdW5jb2VzL2ZuXCIpO1xyXG5cclxubWVuc2FnZW5zRW52aWFkYXMgPSBmdW5jdGlvbihtZW5zYWdlbSwgY29uZmlnKSB7XHJcbiAgICByZXR1cm4gbWVuc2FnZW5zRXZuaWFkYXNIVE1MKG1lbnNhZ2VtLCBjb25maWcpO1xyXG59XHJcblxyXG52YXIgbWVuc2FnZW5zRXZuaWFkYXNIVE1MID0gZnVuY3Rpb24obWVuc2FnZW0sIGNvbmZpZykge1xyXG4gICAgdmFyIHJldG9ybm8gPSBgPGRpdj5gO1xyXG5cclxuICAgIG1lbnNhZ2VtLmZvckVhY2goZnVuY3Rpb24obXNnKXtcclxuICAgICAgICByZXRvcm5vICs9IG1lbnNhZ2VtSXRlbUh0bWwobXNnLCBjb25maWcpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0b3JubyArPSBgPC9kaXY+YDtcclxuXHJcbiAgICByZXR1cm4gcmV0b3JubztcclxufVxyXG5cclxudmFyIG1lbnNhZ2VtSXRlbUh0bWwgPSBmdW5jdGlvbihtZW5zYWdlbSwgY29uZmlnKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZW52aWFkYS1ib3hcIiBkYXRhLWNvZGlnbz1cIiR7bWVuc2FnZW0uY29kaWdvfVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiJHtjb25maWcuYmFzZV91cmwgKyAnL2F2aXNvcy9tZW5zYWdlbnMvJyArIG1lbnNhZ2VtLmNvZGlnb31cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTggY29sLWxnLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPVwiY29sb3I6IGdyZWVuO1wiPiR7bWVuc2FnZW0udGl0dWxvfTwvaDQ+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9XCJjb2xvcjogIzMzM1wiPiR7bWVuc2FnZW0udGV4dG99PC9wPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgIDwvYT4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS00IGNvbC1sZy0yXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCI+PGkgY2xhc3M9XCJmYSBmYS10cmFzaFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxzbWFsbD4ke2ZuLmdldERhdGFSZWxhdGl2YSggbWVuc2FnZW0uY3JlYXRlZF9hdCApfTwvc21hbGw+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgYFxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1lbnNhZ2Vuc0VudmlhZGFzOyIsInZhciBmbiA9IHJlcXVpcmUoXCIuLi9mdW5jb2VzL2ZuXCIpO1xyXG5cclxucmVzcG9uZGVyID0gZnVuY3Rpb24obWVuc2FnZW0sIGNvbmZpZykge1xyXG5cclxuICAgIHJldHVybiBnZXRSZXNwb25kZXJCb3hIdG1sKG1lbnNhZ2VtLCBjb25maWcpO1xyXG59XHJcblxyXG52YXIgZ2V0UmVzcG9uZGVyQm94SHRtbCA9IGZ1bmN0aW9uKG1lbnNhZ2VtLCBjb25maWcpIHtcclxuICAgIGxldCB0aXR1bG8gPSAoIG1lbnNhZ2VtLmFsZXJ0YS50aXR1bG8uc3Vic3RyaW5nKDAsIDMpID09PSAnUkU6JyApID8gbWVuc2FnZW0uYWxlcnRhLnRpdHVsbyA6ICdSRTogJyArIG1lbnNhZ2VtLmFsZXJ0YS50aXR1bG87XHJcbiAgICBsZXQgZGF0YSA9IG1vbWVudCggbWVuc2FnZW0uYWxlcnRhLmNyZWF0ZWRfYXQgKS5mb3JtYXQoJ0REL01NL1lZWVkgW2FzXSBISDpNTScpO1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGlkPVwiY3RNX2RpdlJlc3BvbmRlclJlbmRlcml6ZWRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPlBhcmE8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJkZXN0aW5hdGFyaW9cIiB2YWx1ZT1cIiR7bWVuc2FnZW0uYWxlcnRhLnVzZXIubmFtZX1cIiBkaXNhYmxlZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5Bc3N1bnRvPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwidGl0dWxvXCIgdmFsdWU9XCIke3RpdHVsb31cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0dWxvXCI+VGV4dG86PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwidGV4dG9cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHN0eWxlPVwiaGVpZ2h0OiA0MDBweFwiIGlkPVwiY3RNX3RleHRvXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIGlkPVwiY3RNX2J0bkVudmlhclJlc3Bvc3RhXCI+PGkgY2xhc3M9XCJmYSBmYS1wYXBlci1wbGFuZVwiPjwvaT4gRW52aWFyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSByZXNwb25kZXI7IiwiVG9hc3RIVE1MID0gZnVuY3Rpb24obXNnLCBjb25maWcsIGlkVG9hc3QpIHtcclxuICAgIHJldHVybiBnZXRIVE1MVG9hc3QobXNnLCBjb25maWcsIGlkVG9hc3QpO1xyXG59XHJcblxyXG52YXIgZ2V0SFRNTFRvYXN0ID0gZnVuY3Rpb24obXNnLCBjb25maWcsIGlkVG9DbG9zZU5vdGlmaWNhdGlvbikge1xyXG4gICAgbGV0IGZvdG8gPSAobXNnLmF1dG9yLmZvdG8gPT09IG51bGwpID8gY29uZmlnLmJhc2VfdXJsICsgJy9pbWFnZXMvc2VtX2ZvdG8uanBnJyA6IGNvbmZpZy53ZWJzZXJ2aWNlX3VybCArICcvVXN1YXJpby8nICsgbXNnLmF1dG9yLmZvdG87XHJcbiAgICByZXR1cm4gYFxyXG48ZGl2IGNsYXNzPVwiY3QtdG9hc3QgZmFkZUluVXAgYW5pbWF0ZWRcIiBpZD1cInRfJHtpZFRvQ2xvc2VOb3RpZmljYXRpb259XCIgZGF0YS1pZD1cIiR7bXNnLmJyb2FkY2FzdF9tZXNzYWdlbS5pZH1cIj5cclxuICAgIDxhIGhyZWY9XCIjJHttc2cuYnJvYWRjYXN0X21lc3NhZ2VtLmlkfVwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2FzdC1jbG9zZVwiIGlkPVwidG9hc3RDbG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lcyBmYS0yeFwiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWdcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtmb3RvfVwiIGFsdD1cIlwiIGNsYXNzPVwiaW1nLWNpcmNsZSBpbWctcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJsYmxcIj5Ob3ZhIG1lbnNhZ2VtIGRlIDxzdHJvbmc+JHttc2cuYXV0b3IubmFtZX08L3N0cm9uZz48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2E+XHJcbjwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVG9hc3RIVE1MOyIsInVsdGltYXNNZW5zYWdlbnMgPSBmdW5jdGlvbihtZW5zYWdlbnMsIGNvbmZpZykge1xyXG4gICAgdmFyIGh0bWwgPSAnJztcclxuICAgIG1lbnNhZ2Vucy5mb3JFYWNoKChtZW5zYWdlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoIGluZGV4ID4gNCApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBodG1sICs9IGl0ZW1VbHRpbWFzTWVuc2FnZW5zKG1lbnNhZ2VtLCBjb25maWcpO1xyXG4gICAgfSlcclxuICAgIGh0bWwgKz0gYFxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbGluay1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke2NvbmZpZy5iYXNlX3VybH0vYXZpc29zL21lbnNhZ2Vuc1wiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlZlciB0b2Rhczwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICBgXHJcbiAgICByZXR1cm4gaHRtbDtcclxufVxyXG5cclxuaXRlbVVsdGltYXNNZW5zYWdlbnMgPSBmdW5jdGlvbihtZW5zYWdlbSwgY29uZmlnKSB7XHJcbiAgICB2YXIgY2xhc3NOb1JlYWQgPSAobWVuc2FnZW0ucmVhZF9hdCA9PT0gbnVsbCkgPyAnbm8tcmVhZCcgOiAnJ1xyXG4gICAgdmFyIGZvdG8gPSAobWVuc2FnZW0uYWxlcnRhLnVzZXIuZm90byA9PT0gbnVsbCkgPyBjb25maWcuYmFzZV91cmwgKyAnL2ltYWdlcy9zZW1fZm90by5qcGcnIDogY29uZmlnLndlYnNlcnZpY2VfdXJsICsgJy9Vc3VhcmlvLycgKyBtZW5zYWdlbS5hbGVydGEudXNlci5mb3RvXHJcbiAgICB2YXIgaHRtbCA9IGBcclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCIke2NsYXNzTm9SZWFkfSBub3RpZmljYXRpb24taXRlbVwiIGRhdGEtY29kaWdvPVwiJHttZW5zYWdlbS5hbGVydGEuY29kaWdvfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVzc2FnZXMtYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gcHVsbC1sZWZ0XCIgc3R5bGU9XCJwYWRkaW5nOiA1cHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIGNsYXNzPVwiaW1nLWNpcmNsZVwiIHNyYz1cIiR7Zm90b31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLXJpZ2h0XCIgc3R5bGU9XCJ3aWR0aDo4MCVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW5zYWdlbSBkZSA8c3Ryb25nPiR7bWVuc2FnZW0uYWxlcnRhLnVzZXIubmFtZX08L3N0cm9uZz46ICR7bWVuc2FnZW0uYWxlcnRhLnRpdHVsb30uPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj5FbSBgICsgbW9tZW50KG1lbnNhZ2VtLmFsZXJ0YS5jcmVhdGVkX2F0KS5mb3JtYXQoJ0REL01NL1lZWVknKSArIGA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJzZXBhcmF0b3JcIiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXIgZGl2aWRlclwiPjwvbGk+YDtcclxuICAgIHJldHVybiBodG1sO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHVsdGltYXNNZW5zYWdlbnM7IiwidWx0aW1vc0luZm9ybWF0aXZvcyA9IGZ1bmN0aW9uKG1lbnNhZ2VucywgY29uZmlnKSB7XHJcbiAgICAvLyB2YXIgaHRtbCA9ICcnO1xyXG4gICAgLy8gbWVuc2FnZW5zLmZvckVhY2goKG1lbnNhZ2VtLCBpbmRleCkgPT4ge1xyXG4gICAgLy8gICAgIGlmICggaW5kZXggPiA0ICkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGh0bWwgKz0gaXRlbVVsdGltb3NJbmZvcm1hdGl2b3MobWVuc2FnZW0sIGNvbmZpZyk7XHJcbiAgICAvLyB9KVxyXG4gICAgLy8gaHRtbCArPSBgXHJcbiAgICAvLyAgICAgICAgIDxsaT5cclxuICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBsaW5rLWJsb2NrXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7Y29uZmlnLmJhc2VfdXJsfS9hdmlzb3MvaW5mb3JtYXRpdm9zXCIgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VmVyIHRvZGFzPC9zdHJvbmc+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgLy8gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgIDwvbGk+XHJcbiAgICAvLyAgICAgICAgIGBcclxuICAgIC8vIHJldHVybiBodG1sO1xyXG5cclxuXHJcblxyXG4gICAgbGV0IGxpc3RFbGVtZW50ID0gW107XHJcblxyXG5cclxuXHJcbiAgICBtZW5zYWdlbnMuZm9yRWFjaCgobWVuc2FnZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKCBpbmRleCA+IDQgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGlzdEVsZW1lbnRbbGlzdEVsZW1lbnQubGVuZ3RoXSA9IGl0ZW1VbHRpbW9zSW5mb3JtYXRpdm9zKG1lbnNhZ2VtLCBjb25maWcpO1xyXG4gICAgICAgIGxldCBsaVNlcGFyYWRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGlTZXBhcmFkb3Iuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3NlcGFyYXRvcicpXHJcbiAgICAgICAgbGlTZXBhcmFkb3Iuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2Ryb3Bkb3duLWRpdmlkZXIgZGl2aWRlcicpO1xyXG4gICAgICAgIGxpc3RFbGVtZW50W2xpc3RFbGVtZW50Lmxlbmd0aF0gPSBsaVNlcGFyYWRvcjtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBsaVZlck1haXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbGlWZXJNYWlzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dC1jZW50ZXIgbGluay1ibG9jaycpO1xyXG4gICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBhLnNldEF0dHJpYnV0ZSgnaHJlZicsIGNvbmZpZy5iYXNlX3VybCArJy9hdmlzb3MvaW5mb3JtYXRpdm9zJyk7XHJcbiAgICBhLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHJvcGRvd24taXRlbScpO1xyXG4gICAgYS5pbm5lckhUTUwgPSAnPHN0cm9uZz5WZXIgdG9kYXM8L3N0cm9uZz4gPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiPjwvaT4nO1xyXG5cclxuICAgIGxpVmVyTWFpcy5hcHBlbmRDaGlsZChhKTtcclxuXHJcbiAgICBsaXN0RWxlbWVudFtsaXN0RWxlbWVudC5sZW5ndGhdID0gbGlWZXJNYWlzO1xyXG5cclxuICAgIHJldHVybiBsaXN0RWxlbWVudDtcclxufVxyXG5cclxuaXRlbVVsdGltb3NJbmZvcm1hdGl2b3MgPSBmdW5jdGlvbihtZW5zYWdlbSwgY29uZmlnKSB7XHJcbiAgICB2YXIgY2xhc3NOb1JlYWQgPSAobWVuc2FnZW0ucmVhZF9hdCA9PT0gbnVsbCkgPyAnbm8tcmVhZCcgOiAnJ1xyXG4gICAgdmFyIGZvdG8gPSAobWVuc2FnZW0uYWxlcnRhLnVzZXIuZm90byA9PT0gbnVsbCkgPyBjb25maWcuYmFzZV91cmwgKyAnL2ltYWdlcy9zZW1fZm90by5qcGcnIDogY29uZmlnLndlYnNlcnZpY2VfdXJsICsgJy9Vc3VhcmlvLycgKyBtZW5zYWdlbS5hbGVydGEudXNlci5mb3RvXHJcbiAgICAvLyB2YXIgaHRtbCA9IGBcclxuICAgIC8vICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCIke2NsYXNzTm9SZWFkfSBub3RpZmljYXRpb24taXRlbVwiIGRhdGEtY29kaWdvPVwiJHttZW5zYWdlbS5hbGVydGEuY29kaWdvfVwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVzc2FnZXMtYm94XCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRyb3Bkb3duLWl0ZW0gcHVsbC1sZWZ0XCIgc3R5bGU9XCJwYWRkaW5nOiA1cHhcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIlwiIGNsYXNzPVwiaW1nLWNpcmNsZVwiIHNyYz1cIiR7Zm90b31cIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdWxsLXJpZ2h0XCIgc3R5bGU9XCJ3aWR0aDo4MCVcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW5zYWdlbSBkZSA8c3Ryb25nPiR7bWVuc2FnZW0uYWxlcnRhLnVzZXIubmFtZX08L3N0cm9uZz46ICR7bWVuc2FnZW0uYWxlcnRhLnRpdHVsb30uPGJyPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj5FbSBgICsgbW9tZW50KG1lbnNhZ2VtLmFsZXJ0YS5jcmVhdGVkX2F0KS5mb3JtYXQoJ0REL01NL1lZWVknKSArIGA8L3NtYWxsPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJzZXBhcmF0b3JcIiBjbGFzcz1cImRyb3Bkb3duLWRpdmlkZXIgZGl2aWRlclwiPjwvbGk+YDtcclxuICAgIC8vIHJldHVybiBodG1sO1xyXG5cclxuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYCR7Y2xhc3NOb1JlYWR9IG5vdGlmaWNhdGlvbi1pdGVtYCk7XHJcbiAgICBsaS5zZXRBdHRyaWJ1dGUoJ2RhdGEtY29kaWdvJywgYCR7bWVuc2FnZW0uYWxlcnRhLmNvZGlnb31gKTtcclxuXHJcbiAgICBsZXQgZGl2RHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdkRyb3BEb3duLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHJvcGRvd24tbWVzc2FnZXMtYm94Jyk7XHJcblxyXG4gICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBhLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHJvcGRvd24taXRlbSBwdWxsLWxlZnQnKTtcclxuICAgIGEuc2V0QXR0cmlidXRlKCdzdHlsZScsICdwYWRkaW5nOiA1cHgnKTtcclxuXHJcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbWctY2lyY2xlJyk7XHJcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBmb3RvKTtcclxuXHJcbiAgICBsZXQgZGl2VGV4dG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdlRleHRvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHVsbC1yaWdodCcpO1xyXG4gICAgZGl2VGV4dG8uc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDo4MCUnKTtcclxuICAgIGRpdlRleHRvLmlubmVySFRNTCA9IGBNZW5zYWdlbSBkZSA8c3Ryb25nPiR7bWVuc2FnZW0uYWxlcnRhLnVzZXIubmFtZX08L3N0cm9uZz46ICR7bWVuc2FnZW0uYWxlcnRhLnRpdHVsb30uPGJyPjxzbWFsbCBjbGFzcz1cInRleHQtbXV0ZWRcIj5FbSBgICsgbW9tZW50KG1lbnNhZ2VtLmFsZXJ0YS5jcmVhdGVkX2F0KS5mb3JtYXQoJ0REL01NL1lZWVknKSArIGA8L3NtYWxsPmA7XHJcblxyXG5cclxuXHJcbiAgICBhLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBkaXZEcm9wRG93bi5hcHBlbmRDaGlsZChhKTtcclxuICAgIGRpdkRyb3BEb3duLmFwcGVuZENoaWxkKGRpdlRleHRvKTtcclxuICAgIGxpLmFwcGVuZENoaWxkKGRpdkRyb3BEb3duKTtcclxuICAgIHJldHVybiBsaTtcclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdWx0aW1vc0luZm9ybWF0aXZvcztcclxuIiwiLypcclxuICAgIFJvbcOhcmlvIE1lbG9cclxuICovXHJcblxyXG5pZiAoJCkge1xyXG4gICAgaWYgKCQuc3VtbWVybm90ZSkge1xyXG4gICAgICAgIGlmICgkLnN1bW1lcm5vdGUudmVyc2lvbikge1xyXG4gICAgICAgICAgICBpZiAoJC5zdW1tZXJub3RlLnZlcnNpb24gIT0gJzAuOC4xMicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ZlcnPDo28gZG8gU3VtbWVybm90ZSBkZXZlIHNlciAwLjguMTIhJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdTdW1tZXJub3RlIMOpIG5lY2Vzc8OhcmlvIScpO1xyXG4gICAgfVxyXG5cclxufSBlbHNlIHtcclxuICAgIGNvbnNvbGUud2FybignalF1ZXJ5IMOpIG5lY2Vzc8OhcmlvIScpO1xyXG59XHJcblxyXG5cclxud2luZG93LkNUTWVzYWdlbSA9IHJlcXVpcmUoJy4vQ1RNZW5zYWdlbScpO1xyXG53aW5kb3cuQ1RUb2FzdCA9IHJlcXVpcmUoJy4vQ1RUb2FzdCcpO1xyXG53aW5kb3cuQ1RUb2FzdCA9IG5ldyBDVFRvYXN0KCk7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9