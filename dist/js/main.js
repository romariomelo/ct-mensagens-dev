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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NUTWVuc2FnZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NUVG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmNvZXMvZm4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWwvQ2FpeGFEZUVudHJhZGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWwvQ29udmVyc2FIVE1MLmpzIiwid2VicGFjazovLy8uL3NyYy9odG1sL01lbnNhZ2Vuc0VudmlhZGFzSFRNTC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaHRtbC9SZXNwb25kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWwvVG9hc3RIVE1MLmpzIiwid2VicGFjazovLy8uL3NyYy9odG1sL1VsdGltYXNNZW5zYWdlbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWwvVWx0aW1vc0luZm9ybWF0aXZvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHFCQUFxQixtQkFBTyxDQUFDLDJEQUF1QjtBQUNwRCx1QkFBdUIsbUJBQU8sQ0FBQywrREFBeUI7QUFDeEQsMEJBQTBCLG1CQUFPLENBQUMscUVBQTRCO0FBQzlELGdCQUFnQixtQkFBTyxDQUFDLGlEQUFrQjtBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyx1REFBcUI7QUFDaEQsNEJBQTRCLG1CQUFPLENBQUMseUVBQThCOztBQUVsRTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsU0FBUztBQUNUOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsYUFBYTs7QUFFYjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxhQUFhOztBQUViLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsYUFBYTs7QUFFYixTQUFTOztBQUVUOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDL1RBLGdCQUFnQixtQkFBTyxDQUFDLGlEQUFrQjs7QUFFMUM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7O0FD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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsWUFBWSxtQ0FBbUMsdUJBQXVCO0FBQzFHO0FBQ0E7QUFDQSx5RUFBeUUsS0FBSztBQUM5RTtBQUNBO0FBQ0EseURBQXlELDBCQUEwQixhQUFhLHVCQUF1QjtBQUN2SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsWUFBWTtBQUM1QyxzQ0FBc0MsdUJBQXVCOztBQUU3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELDBCQUEwQixhQUFhLHVCQUF1Qjs7OztBQUk5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNuR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBOzs7QUFHQSxtQkFBbUIsbUJBQU8sQ0FBQyx5Q0FBYztBQUN6QyxpQkFBaUIsbUJBQU8sQ0FBQyxtQ0FBVztBQUNwQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgY2FpeGFEZUVudHJhZGEgPSByZXF1aXJlKCcuL2h0bWwvQ2FpeGFEZUVudHJhZGEnKTtcclxudmFyIHVsdGltYXNNZW5zYWdlbnMgPSByZXF1aXJlKCcuL2h0bWwvVWx0aW1hc01lbnNhZ2VucycpO1xyXG52YXIgdWx0aW1vc0luZm9ybWF0aXZvcyA9IHJlcXVpcmUoJy4vaHRtbC9VbHRpbW9zSW5mb3JtYXRpdm9zJyk7XHJcbnZhciByZXNwb25kZXIgPSByZXF1aXJlKCcuL2h0bWwvUmVzcG9uZGVyJyk7XHJcbnZhciBDb252ZXJzYUhUTUwgPSByZXF1aXJlKCcuL2h0bWwvQ29udmVyc2FIVE1MJyk7XHJcbnZhciBtZW5zYWdlbnNFbnZpYWRhc0hUTUwgPSByZXF1aXJlKCcuL2h0bWwvTWVuc2FnZW5zRW52aWFkYXNIVE1MJyk7XHJcblxyXG5jbGFzcyBDVE1lbnNhZ2VtIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSBudWxsKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnID0ge307XHJcbiAgICAgICAgdGhpcy5tZW5zYWdlbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmluZm9ybWF0aXZvcyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoIGNvbmZpZyAhPT0gbnVsbCApIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBjb25maWcpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNhaXhhRGVFbnRyYWRhKCBlbGVtZW50byApIHtcclxuICAgICAgICAkKCBlbGVtZW50byApLmFkZENsYXNzKCdjdC1tZW5zYWdlbScpO1xyXG5cclxuICAgICAgICBpZiAoICEgQXJyYXkuaXNBcnJheSh0aGlzLm1lbnNhZ2VucykgKSB7XHJcbiAgICAgICAgICAgICQoIGVsZW1lbnRvICkuaHRtbCgnPHA+TWVuc2FnZW5zIG7Do28gZW5jb250cmFkYXMsIGZhdm9yIHJlY2FycmVndWUgYSBww6FnaW5hITwvcD4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoIGVsZW1lbnRvICkuaHRtbCggY2FpeGFEZUVudHJhZGEoIHRoaXMubWVuc2FnZW5zLCB0aGlzLmNvbmZpZyApICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVWx0aW1hc01lbnNhZ2VucyggZWxlbWVudG8gKSB7XHJcbiAgICAgICAgJCggZWxlbWVudG8gKS5hZGRDbGFzcygnY3QtdWx0aW1hcy1tZW5zYWdlbnMnKTtcclxuXHJcbiAgICAgICAgaWYgKCAhIEFycmF5LmlzQXJyYXkodGhpcy5tZW5zYWdlbnMpICkge1xyXG4gICAgICAgICAgICAkKCBlbGVtZW50byApLmh0bWwoJzxwPk1lbnNhZ2VucyBuw6NvIGVuY29udHJhZGFzLCBmYXZvciByZWNhcnJlZ3VlIGEgcMOhZ2luYSE8L3A+Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCBlbGVtZW50byApLmh0bWwoIHVsdGltYXNNZW5zYWdlbnMoICB0aGlzLm1lbnNhZ2VucywgdGhpcy5jb25maWcgKSApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclVsdGltb3NJbmZvcm1hdGl2b3MoIGVsZW1lbnRvICkge1xyXG4gICAgICAgICQoIGVsZW1lbnRvICkuYWRkQ2xhc3MoJ2N0LXVsdGltYXMtbWVuc2FnZW5zJyk7XHJcblxyXG4gICAgICAgIGlmICggISBBcnJheS5pc0FycmF5KHRoaXMubWVuc2FnZW5zKSApIHtcclxuICAgICAgICAgICAgJCggZWxlbWVudG8gKS5odG1sKCc8cD5NZW5zYWdlbnMgbsOjbyBlbmNvbnRyYWRhcywgZmF2b3IgcmVjYXJyZWd1ZSBhIHDDoWdpbmEhPC9wPicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxpc3RFbGVtZW50cyA9IHVsdGltb3NJbmZvcm1hdGl2b3MoIHRoaXMuaW5mb3JtYXRpdm9zLCB0aGlzLmNvbmZpZyApO1xyXG5cclxuICAgICAgICBsaXN0RWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbihlKXtcclxuXHJcbiAgICAgICAgICAgICQoIGVsZW1lbnRvICkuYXBwZW5kKCBlICk7XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUmVzcG9uZGVyKCBtZW5zYWdlbSwgZWxlbWVudG8gKSB7XHJcblxyXG4gICAgICAgICQoIGVsZW1lbnRvICkuYWRkQ2xhc3MoJ2N0LW1lbnNhZ2VtLXJlcGx5Jyk7XHJcblxyXG4gICAgICAgICQoIGVsZW1lbnRvICkuaHRtbCggcmVzcG9uZGVyKG1lbnNhZ2VtKSwgdGhpcy5jb25maWcgKTtcclxuXHJcbiAgICAgICAgLy90aGlzLmRlc3Ryb3lFZGl0b3IoJyNjdE1fdGV4dG8nKTtcclxuXHJcbiAgICAgICAgLy90aW55bWNlLmJhc2VVUkwgPSB0aGlzLmNvbmZpZy5iYXNlX3VybCArICcvanMvdGlueW1jZSc7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlRWRpdG9yKCAnI2N0TV90ZXh0bycgKTtcclxuXHJcbiAgICAgICAgJCggJyNjdE1fZGl2UmVzcG9uZGVyUmVuZGVyaXplZCcgKS5hdHRyKCdkYXRhLWNvZGlnbycsIG1lbnNhZ2VtLmFsZXJ0YS5jb2RpZ28pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDb252ZXJzYSggY29udmVyc2EsIGVsZW1lbnRvICkge1xyXG4gICAgICAgICQoIGVsZW1lbnRvICkuaHRtbCggQ29udmVyc2FIVE1MKCBjb252ZXJzYSwgdGhpcy5jb25maWcgKSApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck1lbnNhZ2Vuc0VudmlhZGFzKGVsZW1lbnRvLCBtZW5zYWdlbnMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyggdGhpcy5jb25maWcgKTtcclxuICAgICAgICAkKCBlbGVtZW50byApLmh0bWwoIG1lbnNhZ2Vuc0VudmlhZGFzSFRNTCggbWVuc2FnZW5zLCB0aGlzLmNvbmZpZyApICk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWVuc2FnZW5zKG1lbnNhZ2Vucykge1xyXG5cclxuICAgICAgICBpZiAoICEgQXJyYXkuaXNBcnJheSh0aGlzLm1lbnNhZ2VucykgKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTWVuc2FnZW5zIGRldmUgc2VyIHVtIEFycmF5LicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmluZm9ybWF0aXZvcyA9IHRoaXMuc29tZW50ZUluZm9ybWF0aXZvcyggbWVuc2FnZW5zICk7XHJcbiAgICAgICAgdGhpcy5tZW5zYWdlbnMgPSB0aGlzLnNvbWVudGVNZW5zYWdlbnMoIG1lbnNhZ2VucyApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1lbnNhZ2VucygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZW5zYWdlbnM7XHJcbiAgICB9XHJcblxyXG4gICAgYnRuTGlkYU5hb0xpZGFDbGljayhmbikge1xyXG5cclxuICAgICAgICBpZiAoIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGN0TWVuc2FnZW0gPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgJCgnLmJ0bi1tYXJjYXItY29tby1uYW8tbGlkYScpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpZCA9ICQodGhpcykuY2xvc2VzdCgnLmluYm94LXJvdycpLmF0dHIoJ2RhdGEtY29kaWdvJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1lbnNhZ2VtID0gY3RNZW5zYWdlbS5nZXRNc2dCeUlkKCBpZCApO1xyXG5cclxuICAgICAgICAgICAgICAgIGZuKG1lbnNhZ2VtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVm9jw6ogZGV2ZSBwYXNzYXIgdW1hIGZ1bsOnw6NvIGNvbW8gcGFyw6JtZXRyby4nKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBidG5SZXNwb25kZXJDbGljayhmbikge1xyXG5cclxuICAgICAgICBpZiAoIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGN0TWVuc2FnZW0gPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgJCgnLmJ0bi1yZXNwb25kZXInKS5jbGljayhmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpZCA9ICQodGhpcykuY2xvc2VzdCgnLmN0LWluZm8tbWVuc2FnZW0nKS5hdHRyKCdkYXRhLWNvZGlnbycpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtZW5zYWdlbSA9IGN0TWVuc2FnZW0uZ2V0TXNnQnlJZCggaWQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmbihtZW5zYWdlbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ZvY8OqIGRldmUgcGFzc2FyIHVtYSBmdW7Dp8OjbyBjb21vIHBhcsOibWV0cm8uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYnRuRXhjbHVpckNsaWNrKGZuKSB7XHJcblxyXG4gICAgICAgIGlmICggdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgY3RNZW5zYWdlbSA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAkKCcuYnRuLWV4Y2x1aXInKS5jbGljayhmdW5jdGlvbigpe1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpZCA9ICQodGhpcykuY2xvc2VzdCgnLmN0LWluZm8tbWVuc2FnZW0nKS5hdHRyKCdkYXRhLWNvZGlnbycpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBtZW5zYWdlbSA9IGN0TWVuc2FnZW0uZ2V0TXNnQnlJZCggaWQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmbihtZW5zYWdlbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ZvY8OqIGRldmUgcGFzc2FyIHVtYSBmdW7Dp8OjbyBjb21vIHBhcsOibWV0cm8uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgYnRuRW52aWFyUmVzcG9zdGFDbGljayhmbikge1xyXG5cclxuICAgICAgICBpZiAoIHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGN0TWVuc2FnZW0gPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgJCgnI2N0TV9idG5FbnZpYXJSZXNwb3N0YScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vdGlueW1jZS50cmlnZ2VyU2F2ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkaXZSZXNwb25kZXIgPSAkKHRoaXMpLmNsb3Nlc3QoJyNjdE1fZGl2UmVzcG9uZGVyUmVuZGVyaXplZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByZXNwb3N0YSA9IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0dWxvOiBkaXZSZXNwb25kZXIuZmluZCgnaW5wdXRbbmFtZT10aXR1bG9dJykudmFsKCksXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRvOiBkaXZSZXNwb25kZXIuZmluZCgndGV4dGFyZWFbbmFtZT10ZXh0b10nKS52YWwoKVxyXG5cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGlkID0gJCh0aGlzKS5jbG9zZXN0KCcjY3RNX2RpdlJlc3BvbmRlclJlbmRlcml6ZWQnKS5hdHRyKCdkYXRhLWNvZGlnbycpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBtZW5zYWdlbSA9IGN0TWVuc2FnZW0uZ2V0TXNnQnlJZCggaWQgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmbihtZW5zYWdlbSwgcmVzcG9zdGEpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBidG5Ob3ZhTWVuc2FnZW1DbGljayhmbikge1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XHJcblxyXG4gICAgICAgICAgICAkKCcjYnQtbm92YS1tZW5zYWdlbScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICQoJy5uYXYtbXNnJykucmVtb3ZlQXR0cignZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm4oKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJ0bkNhaXhhRGVFbnRyYWRhQ2xpY2soZm4pIHtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cclxuICAgICAgICAgICAgJCgnI2J0LWNhaXhhLWRlLWVudHJhZGEnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBmbigpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdQYXLDom1ldHJvIGRldmUgc2VyIGZ1bsOnw6NvLicpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJ0bk1lbnNhZ2Vuc0VudmlhZGFzQ2xpY2soZm4pIHtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG5cclxuICAgICAgICAgICAgJCgnI2J0LW1pbmhhcy1tZW5zYWdlbnMnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcubmF2LW1zZycpLnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZuKCk7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGFyw6JtZXRybyBkZXZlIHNlciBmdW7Dp8Ojby4nKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRNc2dCeUlkKGlkKSB7XHJcbiAgICAgICAgaWYgKCBBcnJheS5pc0FycmF5KHRoaXMubWVuc2FnZW5zKSApIHtcclxuICAgICAgICAgICAgbGV0IHJNc2cgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLm1lbnNhZ2Vucy5mb3JFYWNoKGZ1bmN0aW9uIChtc2cpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtc2cuYWxlcnRhLmNvZGlnbyA9PT0gcGFyc2VJbnQoIGlkICkpIHtcclxuICAgICAgICAgICAgICAgICAgICByTXNnID0gbXNnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByTXNnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ01lbnNhZ2VucyBkZXZlbSBzZXIgQXJyYXkuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRpdHVsbyh0aXR1bG8pIHtcclxuICAgICAgICAkKCcjaWJveENhaXhhRGVFbnRyYWRhIGg1JykudGV4dCh0aXR1bG8pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIEJVVFRPTlMgKi9cclxuXHJcbiAgICBnZXRDYWl4YURlRW50cmFkYUJ1dHRvbigpIHtcclxuICAgICAgICByZXR1cm4gJCgnI2J0LWNhaXhhLWRlLWVudHJhZGEnKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROb3ZhTWVuc2FnZW1CdXR0b24oKSB7XHJcbiAgICAgICAgcmV0dXJuICQoJyNidC1ub3ZhLW1lbnNhZ2VtJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRWRpdG9yKCBlbGUgKSB7XHJcblxyXG4gICAgICAgICQoZWxlKS5zdW1tZXJub3RlKHtcclxuICAgICAgICAgICAgdG9vbGJhcjogW1xyXG4gICAgICAgICAgICAgICAgLy9bZ3JvdXBOYW1lLCBbbGlzdCBvZiBidXR0b25dXVxyXG4gICAgICAgICAgICAgICAgWydzdHlsZScsIFsndW5kbycsJ3JlZG8nLCdib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnY2xlYXInLCAnZm9yZWNvbG9yJ11dLFxyXG4gICAgICAgICAgICAgICAgWydwYXJhJywgWyd1bCcsICdwYXJhZ3JhcGgnLCAnc3R5bGUnXV1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcG9wb3Zlcjoge30sXHJcbiAgICAgICAgICAgIGxhbmc6ICdwdC1CUicsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzUwMHB4J1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95RWRpdG9yKCBlbGUgKSB7XHJcbiAgICAgICAgJCggZWxlICkuc3VtbWVybm90ZSgnZGVzdHJveScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzb21lbnRlSW5mb3JtYXRpdm9zKGF2aXNvcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRyYXJNZW5zc2FnZW5zSW5mb3JtYXRpdm9zKCBhdmlzb3MsICdJTkZPUk1BVElWT1MnKTtcclxuICAgIH1cclxuXHJcbiAgICBzb21lbnRlTWVuc2FnZW5zKGF2aXNvcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRyYXJNZW5zc2FnZW5zSW5mb3JtYXRpdm9zKCBhdmlzb3MsJ01FTlNBR0VNJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdHJhck1lbnNzYWdlbnNJbmZvcm1hdGl2b3MoYXZpc29zLCB0aXBvKSB7XHJcbiAgICAgICAgdmFyIHJldG9ybm8gPSBbXTtcclxuICAgICAgICBhdmlzb3MuZm9yRWFjaChmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmFsZXJ0YS50aXBvID09PSB0aXBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXRvcm5vW3JldG9ybm8ubGVuZ3RoXSA9IGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0b3JubztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ1RNZW5zYWdlbTtcclxuIiwidmFyIFRvYXN0SFRNTCA9IHJlcXVpcmUoJy4vaHRtbC9Ub2FzdEhUTUwnKTtcclxuXHJcbmNsYXNzIENUVG9hc3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG5cclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHtcclxuICAgICAgICAgICAgZHVyYXRpb246IDUwMDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgIT09IG51bGwgKSB7XHJcblxyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuY29uZmlnLCBjb25maWcpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29uZmlnKGNvbmZpZykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWcgIT09IG51bGwgKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb25maWcsIGNvbmZpZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldER1cmF0aW9uKG1pbGlzZWNvbmQpIHtcclxuICAgICAgICBpZiAoaXNOYU4obWlsaXNlY29uZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcuZHVyYXRpb24gPSBtaWxpc2Vjb25kO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1BhcsOibWV0cm8gaW52w6FsaWRvIScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93VG9hc3QobXNnKSB7XHJcbiAgICAgICAgbGV0IGlkVG9hc3QgPSBNYXRoLmNlaWwoIE1hdGgucmFuZG9tKCkgKiAxMDAwICk7XHJcbiAgICAgICAgaWYgKCAkKCcudG9hc3Qtd3JhcHBlcicpLmxlbmd0aCA9PT0gMCApIHtcclxuICAgICAgICAgICAgJCgnYm9keScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cInRvYXN0LXdyYXBwZXJcIj48L2Rpdj4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCgnLnRvYXN0LXdyYXBwZXInKS5hcHBlbmQoIFRvYXN0SFRNTChtc2csIHRoaXMuY29uZmlnLCBpZFRvYXN0KSApO1xyXG4gICAgICAgICQoJy5jdC10b2FzdCN0XycgKyBpZFRvYXN0KS5zaG93KCk7XHJcbiAgICAgICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5kaXNtaXNzVG9hc3QoaWRUb2FzdCk7XHJcbiAgICAgICAgfSwgdGhpcy5jb25maWcuZHVyYXRpb24pO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI3RvYXN0Q2xvc2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBfdGhpcy5kaXNtaXNzVG9hc3QoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNtaXNzVG9hc3QoaWRUb2FzdCkge1xyXG4gICAgICAgICQoJy5jdC10b2FzdCN0XycgKyBpZFRvYXN0KS5yZW1vdmVDbGFzcygnYW5pbWF0ZWQgZmFkZUluVXAnKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcuY3QtdG9hc3QjdF8nICsgaWRUb2FzdCkuYWRkQ2xhc3MoJ2FuaW1hdGVkIGZhZGVPdXREb3duJyk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgJCgnLmN0LXRvYXN0I3RfJyArIGlkVG9hc3QpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQ1RUb2FzdDsiLCJleHBvcnQgY29uc3QgbGVyTWFpcyA9IGZ1bmN0aW9uKHN0ciwgdGFtYW5obyA9IDUwKSB7XHJcbiAgICBpZiAoc3RyLmxlbmd0aCA8PSB0YW1hbmhvKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0cjtcclxuICAgIH0gZWxzZSBpZiAoc3RyLmxlbmd0aCA+IHRhbWFuaG8pIHtcclxuICAgICAgICB3aGlsZSAoIHN0clt0YW1hbmhvXSAhPT0gJyAnICkge1xyXG4gICAgICAgICAgICB0YW1hbmhvICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyaW5nKDAsIHRhbWFuaG8pICsgJy4uLiBMZXIgbWFpcy4nO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RGF0YVJlbGF0aXZhID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgbGV0IGQgPSBtb21lbnQoZGF0YSk7XHJcbiAgICBsZXQgaG9qZSA9IG1vbWVudChuZXcgRGF0ZSgpKTtcclxuICAgIGxldCBkaWZlcmVuY2EgPSBob2plLmRpZmYoZCwgJ2RheXMnKTtcclxuXHJcbiAgICBpZiAoIGRpZmVyZW5jYSA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBkLmZvcm1hdCgnW0hvamUgw6BzXSBISDptbScpXHJcbiAgICB9IGVsc2UgaWYgKCBkaWZlcmVuY2EgPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gZC5mb3JtYXQoJ1tPbnRlbSDDoHNdIEhIOm1tJylcclxuICAgIH0gZWxzZSBpZiAoIGRpZmVyZW5jYSA8IDE4MCkge1xyXG4gICAgICAgIHJldHVybiBkLmZvcm1hdCgnW0VtXSBERCBbZGVdIE1NTScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZC5mb3JtYXQoJ1tFbV0gREQvTU0vWVlZWScpO1xyXG4gICAgfVxyXG59IiwiLy9pbXBvcnQge2xlck1haXN9IGZyb20gXCIuLi9mdW5jb2VzL2ZuXCI7XHJcbnZhciBmbiA9IHJlcXVpcmUoXCIuLi9mdW5jb2VzL2ZuXCIpO1xyXG5cclxuY2FpeGFEZUVudHJhZGEgPSBmdW5jdGlvbihtZW5zYWdlbnMsIGNvbmZpZykge1xyXG4gICAgaWYgKG1lbnNhZ2Vucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gY2FpeGFEZUVudHJhZGFWYXppYUh0bWwoY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgaHRtbCA9IGNhYmVjYWxob0NhaXhhRGVFbnRyYWRhKGNvbmZpZyk7XHJcblxyXG4gICAgaHRtbCArPSAnPGRpdiBpZD1cImN0TV9jb3Jwb19jYWl4YURlRW50cmFkYVwiPic7XHJcblxyXG4gICAgbWVuc2FnZW5zLmZvckVhY2goKG1lbnNhZ2VtKSA9PiB7XHJcbiAgICAgICAgaHRtbCArPSBpdGVtQ2FpeGFEZUVudHJhZGEobWVuc2FnZW0sIGNvbmZpZylcclxuICAgIH0pO1xyXG5cclxuICAgIGh0bWwgKz0gJzwvZGl2Pic7XHJcbiAgICByZXR1cm4gaHRtbDtcclxufVxyXG5cclxuY2FiZWNhbGhvQ2FpeGFEZUVudHJhZGEgPSBmdW5jdGlvbihjb25maWcpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAke2J0blJldG9ybmFyKGNvbmZpZyl9XHJcbiAgICAke2J0bkNhaXhhRGVFbnRyYWRhKGNvbmZpZyl9XHJcbiAgICAke2J0bk1lbnNhZ2Vuc0VudmlhZGFzKGNvbmZpZyl9XHJcbiAgICAke2J0bk5vdmFNZW5zYWdlbShjb25maWcpfSAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxufVxyXG5cclxuaXRlbUNhaXhhRGVFbnRyYWRhID0gZnVuY3Rpb24obWVuc2FnZW0sIGNvbmZpZykge1xyXG4gICAgbGV0IGNsYXNzTm9SZWFkID0gKG1lbnNhZ2VtLnJlYWRfYXQgPT09IG51bGwpID8gJ25vLXJlYWQnIDogJyc7XHJcblxyXG4gICAgbGV0IGZvdG8gPSAoIG1lbnNhZ2VtLmFsZXJ0YS51c2VyLmZvdG8gPT09IG51bGwgKSA/IGNvbmZpZy5iYXNlX3VybCArICcvaW1hZ2VzL3NlbV9mb3RvLmpwZycgOiBjb25maWcud2Vic2VydmljZV91cmwgKyAnL1VzdWFyaW8vJyArIG1lbnNhZ2VtLmFsZXJ0YS51c2VyLmZvdG87XHJcblxyXG4gICAgbGV0IHRpdHVsbyA9IGZuLmxlck1haXMobWVuc2FnZW0uYWxlcnRhLnRpdHVsbyk7XHJcblxyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJyb3cgaW5ib3gtcm93IGN0LWluZm8tbWVuc2FnZW0gJHtjbGFzc05vUmVhZH1cIiBkYXRhLWNvZGlnbz1cIiR7bWVuc2FnZW0uYWxlcnRhLmNvZGlnb31cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC14cy0xMiBjb2wtc20tMyBjb2wtc20tcHVzaC05IHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgJHtidG5FeGNsdWlyKG1lbnNhZ2VtKX1cclxuICAgICAgICAgICAgJHtidG5SZXNwb25zZXIobWVuc2FnZW0pfVxyXG4gICAgICAgICAgICAke2J0bkxpZGFOYW9MaWRhKG1lbnNhZ2VtKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC14cy0xMiBjb2wtc20tMSBjb2wtc20tcHVsbC0zIGluYm94LWF2YXRhclwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiJHtjb25maWcuYmFzZV91cmx9L2F2aXNvcy9tZW5zYWdlbnMvJHttZW5zYWdlbS5hbGVydGEuY29kaWdvfVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke2ZvdG99XCIgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZSBpbWctY2lyY2xlXCI+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGNvbC14cy0xMiBjb2wtc20tOCBjb2wtc20tcHVsbC0zXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIke2NvbmZpZy5iYXNlX3VybH0vYXZpc29zL21lbnNhZ2Vucy8ke21lbnNhZ2VtLmFsZXJ0YS5jb2RpZ299XCI+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJpbmJveC1ub21lXCI+JHttZW5zYWdlbS5hbGVydGEudXNlci5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJpbmJveC1hc3N1bnRvXCI+JHt0aXR1bG99PC9oNT5cclxuICAgICAgICAgICAgICAgIDxwPiR7bWVuc2FnZW0uYWxlcnRhLnRleHRvfTwvcD5cclxuICAgICAgICAgICAgICAgIDxzbWFsbD4ke2ZuLmdldERhdGFSZWxhdGl2YShtZW5zYWdlbS5hbGVydGEuY3JlYXRlZF9hdCl9PC9zbWFsbD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG59XHJcblxyXG52YXIgYnRuRXhjbHVpciA9IGZ1bmN0aW9uKG1lbnNhZ2VtKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1leGNsdWlyXCIgdGl0bGU9XCJFeGNsdWlyIE1lbnNhZ2VtXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgIGA7XHJcbn1cclxuXHJcbnZhciBidG5MaWRhTmFvTGlkYSA9IGZ1bmN0aW9uKG1lbnNhZ2VtKSB7XHJcbiAgICBsZXQgZmEgPSAobWVuc2FnZW0ucmVhZF9hdCA9PT0gbnVsbCkgPyAnZmEtZW52ZWxvcGUtb3BlbicgOiAnZmEtZW52ZWxvcGUnO1xyXG4gICAgbGV0IHRpdGxlID0gKG1lbnNhZ2VtLnJlYWRfYXQgPT09IG51bGwpID8gJ01hcmNhciBtZW5zYWdlbSBjb21vIGxpZGEuJyA6ICdNYXJjYXIgbWVuc2FnZW0gY29tbyBuw6NvIGxpZGEnIDtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tbWFyY2FyLWNvbW8tbmFvLWxpZGFcIiB0aXRsZT1cIiR7dGl0bGV9XCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgJHtmYX1cIj48L2k+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICBgO1xyXG59XHJcblxyXG52YXIgYnRuUmVzcG9uc2VyID0gZnVuY3Rpb24obWVuc2FnZW0pIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXJlc3BvbmRlclwiIHRpdGxlPVwiUmVzcG9uZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXJlcGx5XCI+PC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgIGA7XHJcbn1cclxuXHJcbnZhciBjYWl4YURlRW50cmFkYVZhemlhSHRtbCA9IGZ1bmN0aW9uKGNvbmZpZykge1xyXG4gICAgcmV0dXJuIGNhYmVjYWxob0NhaXhhRGVFbnRyYWRhKGNvbmZpZykgKyBgXHJcbiAgICA8ZGl2IGlkPVwiY3RNX2NvcnBvX2NhaXhhRGVFbnRyYWRhXCI+XHJcbiAgICAgICAgPGgyIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj5Wb2PDqiBuw6NvIHBvc3N1aSBtZW5zYWdlbnMhPC9oMj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxufVxyXG5cclxudmFyIGJ0blJldG9ybmFyID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcbiAgICByZXR1cm4gYFxyXG48ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCAgY29sLWxnLTIgY29sLW1kLTMgY29sLXNtLTZcIj5cclxuXHQ8YSBocmVmPVwiJHtjb25maWcuYmFzZV91cmx9XCI+XHJcblx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLWJsb2NrXCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmEgZmEtYXJyb3ctbGVmdFwiPjwvaT4gUmV0b3JuYXJcclxuXHRcdDwvYnV0dG9uPlxyXG5cdDwvYT5cclxuPC9kaXY+YDtcclxufVxyXG5cclxuYnRuQ2FpeGFEZUVudHJhZGEgPSBmdW5jdGlvbihjb25maWcpIHtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgIGNvbC1sZy0yIGNvbC1tZC0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2hpdGUgYnRuLWJsb2NrIG5hdi1tc2dcIiBkaXNhYmxlZD1cIlwiIHR5cGU9XCJidXR0b25cIiBpZD1cImJ0LWNhaXhhLWRlLWVudHJhZGFcIj48aSBjbGFzcz1cImZhcyBmYS1lbnZlbG9wZVwiPjwvaT4gQ2FpeGEgZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cmFkYVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbmJ0bk1lbnNhZ2Vuc0VudmlhZGFzID0gZnVuY3Rpb24oY29uZmlnKSB7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwICBjb2wtbGctMiBjb2wtbWQtMyBjb2wtc20tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdoaXRlIGJ0bi1ibG9jayBuYXYtbXNnXCIgdHlwZT1cImJ1dHRvblwiIGlkPVwiYnQtbWluaGFzLW1lbnNhZ2Vuc1wiPjxpIGNsYXNzPVwiZmFzIGZhLXNoYXJlLXNxdWFyZVwiPjwvaT4gTWVuc2FnZW5zIGVudmlhZGFzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5idG5Ob3ZhTWVuc2FnZW0gPSBmdW5jdGlvbihjb25maWcpIHtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgIGNvbC1sZy0yIGNvbC1tZC0zIGNvbC1zbS02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2hpdGUgYnRuLWJsb2NrIG5hdi1tc2dcIiB0eXBlPVwiYnV0dG9uXCIgaWQ9XCJidC1ub3ZhLW1lbnNhZ2VtXCI+PGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPiBOb3ZhIG1lbnNhZ2VtXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNhaXhhRGVFbnRyYWRhOyIsInZhciBmbiA9IHJlcXVpcmUoXCIuLi9mdW5jb2VzL2ZuXCIpO1xyXG5cclxuQ29udmVyc2FIVE1MID0gZnVuY3Rpb24oIGNvbnZlcnNhLCBjb25maWcgKSB7XHJcbiAgICByZXR1cm4gY29udmVyc2FSZW5kKGNvbnZlcnNhLCBjb25maWcgKTtcclxufVxyXG5cclxudmFyIGNvbnZlcnNhUmVuZCA9IGZ1bmN0aW9uKCBjb252ZXJzYSwgY29uZmlnICkge1xyXG5cclxuICAgIHZhciBodG1sID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImlib3ggY3QtaW5mby1tZW5zYWdlbVwiICBkYXRhLWNvZGlnbz1cIiR7Y29udmVyc2FbMF0uYWxlcnRhLmNvZGlnb31cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlib3gtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBzdHlsZT1cImZvbnQtd2VpZ2h0OiBib2xkO1wiPiR7Y29udmVyc2FbMF0uYWxlcnRhLnRpdHVsb308L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpYm94LWNvbnRlbnQgaWJveC1tZW5zYWdlbVwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1sZWZ0IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7YnRuUmVzcG9uZGVyKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7YnRuRXhjbHVpcigpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgICAgICAgICAgIC8vXHJcblxyXG4gICAgY29udmVyc2EuZm9yRWFjaChmdW5jdGlvbihtZW5zYWdlbSl7XHJcbiAgICAgICAgaHRtbCArPSBtZW5zYWdlbUNvbnZlcnNhKCBtZW5zYWdlbSwgY29uZmlnICk7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBodG1sICs9IGA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgcmV0dXJuIGh0bWw7XHJcblxyXG59XHJcblxyXG52YXIgbWVuc2FnZW1Db252ZXJzYSA9IGZ1bmN0aW9uKG1lbnNhZ2VtLCBjb25maWcpIHtcclxuICAgIGxldCBmb3RvID0gKCBtZW5zYWdlbS5hbGVydGEudXNlci5mb3RvID09PSBudWxsICkgPyBjb25maWcuYmFzZV91cmwgKyAnL2ltYWdlcy9zZW1fZm90by5qcGcnIDogY29uZmlnLndlYnNlcnZpY2VfdXJsICsgJy9Vc3VhcmlvLycgKyBtZW5zYWdlbS5hbGVydGEudXNlci5mb3RvO1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJyb3cgbWVuc2FnZW0tY2FiZWNhbGhvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNCBjb2wteHMtb2Zmc2V0LTQgY29sLXNtLTIgY29sLXNtLW9mZnNldC0wIGNvbC1tZC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmUgaW1nLWNpcmNsZVwiIHNyYz1cIiR7Zm90b31cIiBhbHQ9XCJGb3RvIGRlICR7bWVuc2FnZW0uYWxlcnRhLnVzZXIubmFtZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEwIGNvbC1tZC0xMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiR7bWVuc2FnZW0uYWxlcnRhLnVzZXIubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPiR7bW9tZW50KG1lbnNhZ2VtLmFsZXJ0YS5jcmVhdGVkX2F0KS5mb3JtYXQoJ0REL01NL1lZWVknKX0gYXMgJHttb21lbnQobWVuc2FnZW0uYWxlcnRhLmNyZWF0ZWRfYXQpLmZvcm1hdCgnSEg6bW06c3MnKX08L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgbWVuc2FnZW0tdGV4dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bWVuc2FnZW0uYWxlcnRhLnRleHRvLnJlcGxhY2UoL1xccj9cXG4vZywgJzxiciAvPicpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbn1cclxuXHJcbnZhciBidG5SZXNwb25kZXIgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tc20gYnRuLXJlc3BvbmRlclwiIGlkPVwiYnQtcmVzcG9uZGVyXCIgdGl0bGU9XCJSZXNwb25kZXJcIj48aSBjbGFzcz1cImZhcyBmYS1yZXBseVwiIHN0eWxlPVwid2lkdGg6IDIwcHhcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXNwb25kZXI8L2J1dHRvbj5gO1xyXG59XHJcblxyXG52YXIgYnRuRXhjbHVpciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIGA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtIGJ0bi1leGNsdWlyXCIgaWQ9XCJidC1leGNsdWlyXCIgdGl0bGU9XCJFeGNsdWlyXCI+PGkgY2xhc3M9XCJmYXMgZmEtdHJhc2gtYWx0XCIgc3R5bGU9XCJ3aWR0aDogMjBweFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4Y2x1aXI8L2J1dHRvbj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbnZlcnNhSFRNTDsiLCJ2YXIgZm4gPSByZXF1aXJlKFwiLi4vZnVuY29lcy9mblwiKTtcclxuXHJcbm1lbnNhZ2Vuc0VudmlhZGFzID0gZnVuY3Rpb24obWVuc2FnZW0sIGNvbmZpZykge1xyXG4gICAgcmV0dXJuIG1lbnNhZ2Vuc0V2bmlhZGFzSFRNTChtZW5zYWdlbSwgY29uZmlnKTtcclxufVxyXG5cclxudmFyIG1lbnNhZ2Vuc0V2bmlhZGFzSFRNTCA9IGZ1bmN0aW9uKG1lbnNhZ2VtLCBjb25maWcpIHtcclxuICAgIHZhciByZXRvcm5vID0gYDxkaXY+YDtcclxuXHJcbiAgICBtZW5zYWdlbS5mb3JFYWNoKGZ1bmN0aW9uKG1zZyl7XHJcbiAgICAgICAgcmV0b3JubyArPSBtZW5zYWdlbUl0ZW1IdG1sKG1zZywgY29uZmlnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldG9ybm8gKz0gYDwvZGl2PmA7XHJcblxyXG4gICAgcmV0dXJuIHJldG9ybm87XHJcbn1cclxuXHJcbnZhciBtZW5zYWdlbUl0ZW1IdG1sID0gZnVuY3Rpb24obWVuc2FnZW0sIGNvbmZpZykge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGVudmlhZGEtYm94XCIgZGF0YS1jb2RpZ289XCIke21lbnNhZ2VtLmNvZGlnb31cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiR7Y29uZmlnLmJhc2VfdXJsICsgJy9hdmlzb3MvbWVuc2FnZW5zLycgKyBtZW5zYWdlbS5jb2RpZ299XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS04IGNvbC1sZy0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT1cImNvbG9yOiBncmVlbjtcIj4ke21lbnNhZ2VtLnRpdHVsb308L2g0PiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPVwiY29sb3I6ICMzMzNcIj4ke21lbnNhZ2VtLnRleHRvfTwvcD4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICA8L2E+ICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tNCBjb2wtbGctMlwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiPjxpIGNsYXNzPVwiZmEgZmEtdHJhc2hcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8c21hbGw+JHtmbi5nZXREYXRhUmVsYXRpdmEoIG1lbnNhZ2VtLmNyZWF0ZWRfYXQgKX08L3NtYWxsPlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PiAgICBcclxuICAgIGBcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtZW5zYWdlbnNFbnZpYWRhczsiLCJ2YXIgZm4gPSByZXF1aXJlKFwiLi4vZnVuY29lcy9mblwiKTtcclxuXHJcbnJlc3BvbmRlciA9IGZ1bmN0aW9uKG1lbnNhZ2VtLCBjb25maWcpIHtcclxuXHJcbiAgICByZXR1cm4gZ2V0UmVzcG9uZGVyQm94SHRtbChtZW5zYWdlbSwgY29uZmlnKTtcclxufVxyXG5cclxudmFyIGdldFJlc3BvbmRlckJveEh0bWwgPSBmdW5jdGlvbihtZW5zYWdlbSwgY29uZmlnKSB7XHJcbiAgICBsZXQgdGl0dWxvID0gKCBtZW5zYWdlbS5hbGVydGEudGl0dWxvLnN1YnN0cmluZygwLCAzKSA9PT0gJ1JFOicgKSA/IG1lbnNhZ2VtLmFsZXJ0YS50aXR1bG8gOiAnUkU6ICcgKyBtZW5zYWdlbS5hbGVydGEudGl0dWxvO1xyXG4gICAgbGV0IGRhdGEgPSBtb21lbnQoIG1lbnNhZ2VtLmFsZXJ0YS5jcmVhdGVkX2F0ICkuZm9ybWF0KCdERC9NTS9ZWVlZIFthc10gSEg6TU0nKTtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBpZD1cImN0TV9kaXZSZXNwb25kZXJSZW5kZXJpemVkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj5QYXJhPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwiZGVzdGluYXRhcmlvXCIgdmFsdWU9XCIke21lbnNhZ2VtLmFsZXJ0YS51c2VyLm5hbWV9XCIgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+QXNzdW50bzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cInRpdHVsb1wiIHZhbHVlPVwiJHt0aXR1bG99XCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdHVsb1wiPlRleHRvOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cInRleHRvXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBzdHlsZT1cImhlaWdodDogNDAwcHhcIiBpZD1cImN0TV90ZXh0b1wiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBpZD1cImN0TV9idG5FbnZpYXJSZXNwb3N0YVwiPjxpIGNsYXNzPVwiZmEgZmEtcGFwZXItcGxhbmVcIj48L2k+IEVudmlhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcmVzcG9uZGVyOyIsIlRvYXN0SFRNTCA9IGZ1bmN0aW9uKG1zZywgY29uZmlnLCBpZFRvYXN0KSB7XHJcbiAgICByZXR1cm4gZ2V0SFRNTFRvYXN0KG1zZywgY29uZmlnLCBpZFRvYXN0KTtcclxufVxyXG5cclxudmFyIGdldEhUTUxUb2FzdCA9IGZ1bmN0aW9uKG1zZywgY29uZmlnLCBpZFRvQ2xvc2VOb3RpZmljYXRpb24pIHtcclxuICAgIGxldCBmb3RvID0gKG1zZy5hdXRvci5mb3RvID09PSBudWxsKSA/IGNvbmZpZy5iYXNlX3VybCArICcvaW1hZ2VzL3NlbV9mb3RvLmpwZycgOiBjb25maWcud2Vic2VydmljZV91cmwgKyAnL1VzdWFyaW8vJyArIG1zZy5hdXRvci5mb3RvO1xyXG4gICAgcmV0dXJuIGBcclxuPGRpdiBjbGFzcz1cImN0LXRvYXN0IGZhZGVJblVwIGFuaW1hdGVkXCIgaWQ9XCJ0XyR7aWRUb0Nsb3NlTm90aWZpY2F0aW9ufVwiIGRhdGEtaWQ9XCIke21zZy5icm9hZGNhc3RfbWVzc2FnZW0uaWR9XCI+XHJcbiAgICA8YSBocmVmPVwiIyR7bXNnLmJyb2FkY2FzdF9tZXNzYWdlbS5pZH1cIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9hc3QtY2xvc2VcIiBpZD1cInRvYXN0Q2xvc2VcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXMgZmEtMnhcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7Zm90b31cIiBhbHQ9XCJcIiBjbGFzcz1cImltZy1jaXJjbGUgaW1nLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwibGJsXCI+Tm92YSBtZW5zYWdlbSBkZSA8c3Ryb25nPiR7bXNnLmF1dG9yLm5hbWV9PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9hPlxyXG48L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRvYXN0SFRNTDsiLCJ1bHRpbWFzTWVuc2FnZW5zID0gZnVuY3Rpb24obWVuc2FnZW5zLCBjb25maWcpIHtcclxuICAgIHZhciBodG1sID0gJyc7XHJcbiAgICBtZW5zYWdlbnMuZm9yRWFjaCgobWVuc2FnZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKCBpbmRleCA+IDQgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHRtbCArPSBpdGVtVWx0aW1hc01lbnNhZ2VucyhtZW5zYWdlbSwgY29uZmlnKTtcclxuICAgIH0pXHJcbiAgICBodG1sICs9IGBcclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIGxpbmstYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtjb25maWcuYmFzZV91cmx9L2F2aXNvcy9tZW5zYWdlbnNcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5WZXIgdG9kYXM8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgYFxyXG4gICAgcmV0dXJuIGh0bWw7XHJcbn1cclxuXHJcbml0ZW1VbHRpbWFzTWVuc2FnZW5zID0gZnVuY3Rpb24obWVuc2FnZW0sIGNvbmZpZykge1xyXG4gICAgdmFyIGNsYXNzTm9SZWFkID0gKG1lbnNhZ2VtLnJlYWRfYXQgPT09IG51bGwpID8gJ25vLXJlYWQnIDogJydcclxuICAgIHZhciBmb3RvID0gKG1lbnNhZ2VtLmFsZXJ0YS51c2VyLmZvdG8gPT09IG51bGwpID8gY29uZmlnLmJhc2VfdXJsICsgJy9pbWFnZXMvc2VtX2ZvdG8uanBnJyA6IGNvbmZpZy53ZWJzZXJ2aWNlX3VybCArICcvVXN1YXJpby8nICsgbWVuc2FnZW0uYWxlcnRhLnVzZXIuZm90b1xyXG4gICAgdmFyIGh0bWwgPSBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiJHtjbGFzc05vUmVhZH0gbm90aWZpY2F0aW9uLWl0ZW1cIiBkYXRhLWNvZGlnbz1cIiR7bWVuc2FnZW0uYWxlcnRhLmNvZGlnb31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lc3NhZ2VzLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtIHB1bGwtbGVmdFwiIHN0eWxlPVwicGFkZGluZzogNXB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBjbGFzcz1cImltZy1jaXJjbGVcIiBzcmM9XCIke2ZvdG99XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodFwiIHN0eWxlPVwid2lkdGg6ODAlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVuc2FnZW0gZGUgPHN0cm9uZz4ke21lbnNhZ2VtLmFsZXJ0YS51c2VyLm5hbWV9PC9zdHJvbmc+OiAke21lbnNhZ2VtLmFsZXJ0YS50aXR1bG99Ljxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+RW0gYCArIG1vbWVudChtZW5zYWdlbS5hbGVydGEuY3JlYXRlZF9hdCkuZm9ybWF0KCdERC9NTS9ZWVlZJykgKyBgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSByb2xlPVwic2VwYXJhdG9yXCIgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyIGRpdmlkZXJcIj48L2xpPmA7XHJcbiAgICByZXR1cm4gaHRtbDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB1bHRpbWFzTWVuc2FnZW5zOyIsInVsdGltb3NJbmZvcm1hdGl2b3MgPSBmdW5jdGlvbihtZW5zYWdlbnMsIGNvbmZpZykge1xyXG4gICAgLy8gdmFyIGh0bWwgPSAnJztcclxuICAgIC8vIG1lbnNhZ2Vucy5mb3JFYWNoKChtZW5zYWdlbSwgaW5kZXgpID0+IHtcclxuICAgIC8vICAgICBpZiAoIGluZGV4ID4gNCApIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBodG1sICs9IGl0ZW1VbHRpbW9zSW5mb3JtYXRpdm9zKG1lbnNhZ2VtLCBjb25maWcpO1xyXG4gICAgLy8gfSlcclxuICAgIC8vIGh0bWwgKz0gYFxyXG4gICAgLy8gICAgICAgICA8bGk+XHJcbiAgICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbGluay1ibG9ja1wiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke2NvbmZpZy5iYXNlX3VybH0vYXZpc29zL2luZm9ybWF0aXZvc1wiIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlZlciB0b2Rhczwvc3Ryb25nPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDwvYT5cclxuICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICA8L2xpPlxyXG4gICAgLy8gICAgICAgICBgXHJcbiAgICAvLyByZXR1cm4gaHRtbDtcclxuXHJcblxyXG5cclxuICAgIGxldCBsaXN0RWxlbWVudCA9IFtdO1xyXG5cclxuXHJcblxyXG4gICAgbWVuc2FnZW5zLmZvckVhY2goKG1lbnNhZ2VtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGlmICggaW5kZXggPiA0ICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpc3RFbGVtZW50W2xpc3RFbGVtZW50Lmxlbmd0aF0gPSBpdGVtVWx0aW1vc0luZm9ybWF0aXZvcyhtZW5zYWdlbSwgY29uZmlnKTtcclxuICAgICAgICBsZXQgbGlTZXBhcmFkb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGxpU2VwYXJhZG9yLnNldEF0dHJpYnV0ZSgncm9sZScsICdzZXBhcmF0b3InKVxyXG4gICAgICAgIGxpU2VwYXJhZG9yLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdkcm9wZG93bi1kaXZpZGVyIGRpdmlkZXInKTtcclxuICAgICAgICBsaXN0RWxlbWVudFtsaXN0RWxlbWVudC5sZW5ndGhdID0gbGlTZXBhcmFkb3I7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgbGlWZXJNYWlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpVmVyTWFpcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQtY2VudGVyIGxpbmstYmxvY2snKTtcclxuICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBjb25maWcuYmFzZV91cmwgKycvYXZpc29zL2luZm9ybWF0aXZvcycpO1xyXG4gICAgYS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Ryb3Bkb3duLWl0ZW0nKTtcclxuICAgIGEuaW5uZXJIVE1MID0gJzxzdHJvbmc+VmVyIHRvZGFzPC9zdHJvbmc+IDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+JztcclxuXHJcbiAgICBsaVZlck1haXMuYXBwZW5kQ2hpbGQoYSk7XHJcblxyXG4gICAgbGlzdEVsZW1lbnRbbGlzdEVsZW1lbnQubGVuZ3RoXSA9IGxpVmVyTWFpcztcclxuXHJcbiAgICByZXR1cm4gbGlzdEVsZW1lbnQ7XHJcbn1cclxuXHJcbml0ZW1VbHRpbW9zSW5mb3JtYXRpdm9zID0gZnVuY3Rpb24obWVuc2FnZW0sIGNvbmZpZykge1xyXG4gICAgdmFyIGNsYXNzTm9SZWFkID0gKG1lbnNhZ2VtLnJlYWRfYXQgPT09IG51bGwpID8gJ25vLXJlYWQnIDogJydcclxuICAgIHZhciBmb3RvID0gKG1lbnNhZ2VtLmFsZXJ0YS51c2VyLmZvdG8gPT09IG51bGwpID8gY29uZmlnLmJhc2VfdXJsICsgJy9pbWFnZXMvc2VtX2ZvdG8uanBnJyA6IGNvbmZpZy53ZWJzZXJ2aWNlX3VybCArICcvVXN1YXJpby8nICsgbWVuc2FnZW0uYWxlcnRhLnVzZXIuZm90b1xyXG4gICAgLy8gdmFyIGh0bWwgPSBgXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiJHtjbGFzc05vUmVhZH0gbm90aWZpY2F0aW9uLWl0ZW1cIiBkYXRhLWNvZGlnbz1cIiR7bWVuc2FnZW0uYWxlcnRhLmNvZGlnb31cIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lc3NhZ2VzLWJveFwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtIHB1bGwtbGVmdFwiIHN0eWxlPVwicGFkZGluZzogNXB4XCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBjbGFzcz1cImltZy1jaXJjbGVcIiBzcmM9XCIke2ZvdG99XCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodFwiIHN0eWxlPVwid2lkdGg6ODAlXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWVuc2FnZW0gZGUgPHN0cm9uZz4ke21lbnNhZ2VtLmFsZXJ0YS51c2VyLm5hbWV9PC9zdHJvbmc+OiAke21lbnNhZ2VtLmFsZXJ0YS50aXR1bG99Ljxicj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+RW0gYCArIG1vbWVudChtZW5zYWdlbS5hbGVydGEuY3JlYXRlZF9hdCkuZm9ybWF0KCdERC9NTS9ZWVlZJykgKyBgPC9zbWFsbD5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxsaSByb2xlPVwic2VwYXJhdG9yXCIgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyIGRpdmlkZXJcIj48L2xpPmA7XHJcbiAgICAvLyByZXR1cm4gaHRtbDtcclxuXHJcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbGkuc2V0QXR0cmlidXRlKCdjbGFzcycsIGAke2NsYXNzTm9SZWFkfSBub3RpZmljYXRpb24taXRlbWApO1xyXG4gICAgbGkuc2V0QXR0cmlidXRlKCdkYXRhLWNvZGlnbycsIGAke21lbnNhZ2VtLmFsZXJ0YS5jb2RpZ299YCk7XHJcblxyXG4gICAgbGV0IGRpdkRyb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXZEcm9wRG93bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Ryb3Bkb3duLW1lc3NhZ2VzLWJveCcpO1xyXG5cclxuICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Ryb3Bkb3duLWl0ZW0gcHVsbC1sZWZ0Jyk7XHJcbiAgICBhLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncGFkZGluZzogNXB4Jyk7XHJcblxyXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW1nLWNpcmNsZScpO1xyXG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgZm90byk7XHJcblxyXG4gICAgbGV0IGRpdlRleHRvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXZUZXh0by5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3B1bGwtcmlnaHQnKTtcclxuICAgIGRpdlRleHRvLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnd2lkdGg6ODAlJyk7XHJcbiAgICBkaXZUZXh0by5pbm5lckhUTUwgPSBgTWVuc2FnZW0gZGUgPHN0cm9uZz4ke21lbnNhZ2VtLmFsZXJ0YS51c2VyLm5hbWV9PC9zdHJvbmc+OiAke21lbnNhZ2VtLmFsZXJ0YS50aXR1bG99Ljxicj48c21hbGwgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+RW0gYCArIG1vbWVudChtZW5zYWdlbS5hbGVydGEuY3JlYXRlZF9hdCkuZm9ybWF0KCdERC9NTS9ZWVlZJykgKyBgPC9zbWFsbD5gO1xyXG5cclxuXHJcblxyXG4gICAgYS5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgZGl2RHJvcERvd24uYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICBkaXZEcm9wRG93bi5hcHBlbmRDaGlsZChkaXZUZXh0byk7XHJcbiAgICBsaS5hcHBlbmRDaGlsZChkaXZEcm9wRG93bik7XHJcbiAgICByZXR1cm4gbGk7XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHVsdGltb3NJbmZvcm1hdGl2b3M7XHJcbiIsIi8qXHJcbiAgICBSb23DoXJpbyBNZWxvXHJcbiAqL1xyXG5cclxuaWYgKCQpIHtcclxuICAgIGlmICgkLnN1bW1lcm5vdGUpIHtcclxuICAgICAgICBpZiAoJC5zdW1tZXJub3RlLnZlcnNpb24pIHtcclxuICAgICAgICAgICAgaWYgKCQuc3VtbWVybm90ZS52ZXJzaW9uICE9ICcwLjguMTInKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdWZXJzw6NvIGRvIFN1bW1lcm5vdGUgZGV2ZSBzZXIgMC44LjEyIScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignU3VtbWVybm90ZSDDqSBuZWNlc3PDoXJpbyEnKTtcclxuICAgIH1cclxuXHJcbn0gZWxzZSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ2pRdWVyeSDDqSBuZWNlc3PDoXJpbyEnKTtcclxufVxyXG5cclxuXHJcbndpbmRvdy5DVE1lc2FnZW0gPSByZXF1aXJlKCcuL0NUTWVuc2FnZW0nKTtcclxud2luZG93LkNUVG9hc3QgPSByZXF1aXJlKCcuL0NUVG9hc3QnKTtcclxud2luZG93LkNUVG9hc3QgPSBuZXcgQ1RUb2FzdCgpO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==