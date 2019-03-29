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

eval("var caixaDeEntrada = __webpack_require__(/*! ./html/CaixaDeEntrada */ \"./src/html/CaixaDeEntrada.js\");\r\nvar ultimasMensagens = __webpack_require__(/*! ./html/UltimasMensagens */ \"./src/html/UltimasMensagens.js\");\r\nvar responder = __webpack_require__(/*! ./html/Responder */ \"./src/html/Responder.js\");\r\n\r\nclass CTMensagem {\r\n\r\n    constructor(config = null) {\r\n\r\n        this.config = {};\r\n        this.mensagens = [];\r\n\r\n        if ( config !== null ) {\r\n            this.config = Object.assign(this.config, config);\r\n\r\n        }\r\n\r\n    }\r\n\r\n    renderCaixaDeEntrada( elemento ) {\r\n        $( elemento ).addClass('ct-mensagem');\r\n\r\n        if ( ! Array.isArray(this.mensagens) ) {\r\n            $( elemento ).html('<p>Mensagens não encontradas, favor recarregue a página!</p>');\r\n        }\r\n\r\n        $( elemento ).html( caixaDeEntrada( this.mensagens, this.config ) );\r\n    }\r\n\r\n    renderUltimasMensagens( elemento ) {\r\n        $( elemento ).addClass('ct-ultimas-mensagens');\r\n\r\n        if ( ! Array.isArray(this.mensagens) ) {\r\n            $( elemento ).html('<p>Mensagens não encontradas, favor recarregue a página!</p>');\r\n        }\r\n\r\n        $( elemento ).html( ultimasMensagens( this.mensagens, this.config ) );\r\n    }\r\n\r\n    renderResponder( mensagem, elemento ) {\r\n\r\n        $( elemento ).addClass('ct-mensagem-reply');\r\n\r\n        $( elemento ).html( responder(mensagem), this.config );\r\n\r\n        $( '#ctM_divResponderRenderized' ).attr('data-codigo', mensagem.alerta.codigo);\r\n\r\n    }\r\n\r\n    setMensagens(mensagens) {\r\n\r\n        if ( ! Array.isArray(this.mensagens) ) {\r\n            console.warn('Mensagens deve ser um Array.');\r\n            return;\r\n        }\r\n\r\n        this.mensagens = mensagens;\r\n\r\n    }\r\n\r\n    btnLidaNaoLidaClick(fn) {\r\n\r\n        if ( typeof fn === 'function') {\r\n\r\n            let ctMensagem = this;\r\n\r\n            $('.btn-marcar-como-nao-lida').click(function(){\r\n\r\n\r\n                var id = $(this).closest('.inbox-row').attr('data-codigo');\r\n\r\n                var mensagem = ctMensagem.getMsgById( id );\r\n\r\n                fn(mensagem);\r\n            });\r\n        } else {\r\n            console.error('Você deve passar uma função como parâmetro.');\r\n        }\r\n\r\n\r\n    }\r\n\r\n    btnResponderClick(fn) {\r\n\r\n        if ( typeof fn === 'function') {\r\n\r\n            let ctMensagem = this;\r\n\r\n            $('.btn-responder').click(function(){\r\n\r\n                var id = $(this).closest('.inbox-row').attr('data-codigo');\r\n\r\n                var mensagem = ctMensagem.getMsgById( id );\r\n\r\n                fn(mensagem);\r\n            });\r\n        } else {\r\n            console.error('Você deve passar uma função como parâmetro.');\r\n        }\r\n\r\n\r\n    }\r\n\r\n\r\n    btnExcluirClick(fn) {\r\n\r\n        if ( typeof fn === 'function') {\r\n\r\n            let ctMensagem = this;\r\n\r\n            $('.btn-excluir').click(function(){\r\n\r\n                var id = $(this).closest('.inbox-row').attr('data-codigo');\r\n\r\n                var mensagem = ctMensagem.getMsgById( id );\r\n\r\n                fn(mensagem);\r\n            });\r\n        } else {\r\n            console.error('Você deve passar uma função como parâmetro.');\r\n        }\r\n\r\n\r\n    }\r\n\r\n    btnEnviarRespostaClick(fn) {\r\n\r\n        if ( typeof fn === 'function') {\r\n\r\n            let ctMensagem = this;\r\n\r\n            $('#ctM_btnEnviar').click(function() {\r\n\r\n                let divResponder = $(this).closest('#ctM_divResponderRenderized');\r\n\r\n                let resposta = {\r\n\r\n                    titulo: divResponder.find('input[name=titulo]').val(),\r\n\r\n                    texto: divResponder.find('textarea[name=texto]').val()\r\n\r\n                };\r\n\r\n                let id = $(this).closest('#ctM_divResponderRenderized').attr('data-codigo');\r\n\r\n                let mensagem = ctMensagem.getMsgById( id );\r\n\r\n                fn(mensagem, resposta);\r\n\r\n            });\r\n        }\r\n\r\n    }\r\n\r\n    getMsgById(id) {\r\n        if ( Array.isArray(this.mensagens) ) {\r\n            let rMsg = null;\r\n            this.mensagens.forEach(function (msg) {\r\n                if (msg.alerta.codigo === parseInt( id )) {\r\n                    rMsg = msg;\r\n                    return;\r\n                }\r\n            });\r\n            return rMsg;\r\n        } else {\r\n            console.error('Mensagens devem ser Array.');\r\n        }\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = CTMensagem;\r\n\n\n//# sourceURL=webpack:///./src/CTMensagem.js?");

/***/ }),

/***/ "./src/funcoes/fn.js":
/*!***************************!*\
  !*** ./src/funcoes/fn.js ***!
  \***************************/
/*! exports provided: lerMais */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lerMais\", function() { return lerMais; });\nconst lerMais = function(str, tamanho = 50) {\r\n    if (str.length <= tamanho) {\r\n        return str;\r\n    } else if (str.length > tamanho) {\r\n        while ( str[tamanho] !== ' ' ) {\r\n            tamanho += 1;\r\n        }\r\n        return str.substring(0, tamanho) + '... Ler mais.';\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/funcoes/fn.js?");

/***/ }),

/***/ "./src/html/CaixaDeEntrada.js":
/*!************************************!*\
  !*** ./src/html/CaixaDeEntrada.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//import {lerMais} from \"../funcoes/fn\";\r\nvar fn = __webpack_require__(/*! ../funcoes/fn */ \"./src/funcoes/fn.js\");\r\n\r\ncaixaDeEntrada = function(mensagens, config) {\r\n    if (mensagens.length === 0) {\r\n        return caixaDeEntradaVaziaHtml();\r\n    }\r\n\r\n    var html = cabecalhoCaixaDeEntrada(config);\r\n    mensagens.forEach((mensagem) => {\r\n        html += itemCaixaDeEntrada(mensagem, config)\r\n    })\r\n    return html;\r\n}\r\n\r\ncabecalhoCaixaDeEntrada = function(config) {\r\n    return `\r\n    <div class=\"row\">\r\n    ${btnRetornar(config)}\r\n    ${btnCaixaDeEntrada(config)}\r\n    ${btnMensagensEnviadas(config)}\r\n    ${btnNovaMensagem(config)}    \r\n    </div>\r\n    `;\r\n}\r\n\r\nitemCaixaDeEntrada = function(mensagem, config) {\r\n    let classNoRead = (mensagem.read_at === null) ? 'no-read' : '';\r\n\r\n    let foto = ( mensagem.alerta.user.foto === null ) ? config.base_url + '/images/sem_foto.jpg' : config.webservice_url + '/Usuario/' + mensagem.alerta.user.foto;\r\n\r\n    let titulo = fn.lerMais(mensagem.alerta.titulo);\r\n\r\n    return `\r\n    <div class=\"row inbox-row ${classNoRead}\" data-codigo=\"${mensagem.alerta.codigo}\">\r\n        <div class=\"col col-xs-12 col-sm-3 col-sm-push-9 text-right\">\r\n            ${btnExcluir(mensagem)}\r\n            ${btnResponser(mensagem)}\r\n            ${btnLidaNaoLida(mensagem)}\r\n        </div>\r\n        <div class=\"col col-xs-12 col-sm-1 col-sm-pull-3 inbox-avatar\">\r\n            <a href=\"${config.base_url}/avisos/mensagens/${mensagem.alerta.codigo}\">\r\n                <img src=\"${foto}\" class=\"img-responsive img-circle\">\r\n            </a>\r\n        </div>\r\n        <div class=\"col col-xs-12 col-sm-8 col-sm-pull-3\">\r\n            <a href=\"${config.base_url}/avisos/mensagens/${mensagem.alerta.codigo}\">\r\n                <h4 class=\"inbox-nome\">${mensagem.alerta.user.name}</h4>\r\n                <h5 class=\"inbox-assunto\">${titulo}</h5>\r\n                <small>${moment(mensagem.alerta.created_at).format('DD/MM/YYYY')}</small>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    `;\r\n}\r\n\r\nvar btnExcluir = function(mensagem) {\r\n    return `\r\n            <button class=\"btn btn-default btn-excluir\" title=\"Excluir Mensagem\">\r\n                <i class=\"fa fa-trash\"></i>\r\n            </button>\r\n    `;\r\n}\r\n\r\nvar btnLidaNaoLida = function(mensagem) {\r\n    let fa = (mensagem.read_at === null) ? 'fa-envelope-open' : 'fa-envelope';\r\n    let title = (mensagem.read_at === null) ? 'Marcar mensagem como lida.' : 'Marcar mensagem como não lida' ;\r\n    return `\r\n        <button class=\"btn btn-default btn-marcar-como-nao-lida\" title=\"${title}\">\r\n            <i class=\"fa ${fa}\"></i>\r\n        </button>\r\n    `;\r\n}\r\n\r\nvar btnResponser = function(mensagem) {\r\n    return `\r\n            <button class=\"btn btn-default btn-responder\" title=\"Responder\">\r\n                <i class=\"fa fa-reply\"></i>\r\n            </button>\r\n    `;\r\n}\r\n\r\nvar caixaDeEntradaVaziaHtml = function() {\r\n    return `\r\n    <h2>Você não possui mensagens!</h2>\r\n    `;\r\n}\r\n\r\nvar btnRetornar = function(config) {\r\n    return `\r\n<div class=\"form-group  col-lg-2 col-md-3 col-sm-6\">\r\n\t<a href=\"${config.base_url}\">\r\n\t\t<button class=\"btn btn-danger btn-block\" type=\"button\"><i class=\"fa fa-arrow-left\"></i> Retornar\r\n\t\t</button>\r\n\t</a>\r\n</div>`;\r\n}\r\n\r\nbtnCaixaDeEntrada = function(config) {\r\n    return `<div class=\"form-group  col-lg-2 col-md-3 col-sm-6\">\r\n                    <button class=\"btn btn-white btn-block\" disabled=\"\" type=\"button\" id=\"bt-caixa-de-entrada\"><i class=\"fas fa-envelope\"></i> Caixa de\r\n                        entrada\r\n                    </button>\r\n\r\n                </div>`;\r\n}\r\n\r\nbtnMensagensEnviadas = function(config) {\r\n    return `<div class=\"form-group  col-lg-2 col-md-3 col-sm-6\">\r\n                    <button class=\"btn btn-white btn-block\" type=\"button\" id=\"bt-minhas-mensagens\"><i class=\"fas fa-share-square\"></i> Mensagens enviadas\r\n                    </button>\r\n                </div>`;\r\n}\r\n\r\nbtnNovaMensagem = function(config) {\r\n    return `<div class=\"form-group  col-lg-2 col-md-3 col-sm-6\">\r\n                    <button class=\"btn btn-white btn-block\" type=\"button\" id=\"bt-nova-mensagem\"><i class=\"fa fa-plus\"></i> Nova mensagem\r\n                    </button>\r\n                </div>`;\r\n}\r\n\r\nmodule.exports = caixaDeEntrada;\n\n//# sourceURL=webpack:///./src/html/CaixaDeEntrada.js?");

/***/ }),

/***/ "./src/html/Responder.js":
/*!*******************************!*\
  !*** ./src/html/Responder.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fn = __webpack_require__(/*! ../funcoes/fn */ \"./src/funcoes/fn.js\");\r\n\r\nresponder = function(mensagem, config) {\r\n    return getResponderBoxHtml(mensagem, config);\r\n}\r\n\r\nvar getResponderBoxHtml = function(mensagem, config) {\r\n    let titulo = 'RE: ' + mensagem.alerta.titulo;\r\n    let data = moment( mensagem.alerta.created_at ).format('DD/MM/YYYY') + ' as ' + moment( mensagem.alerta.created_at ).format('HH:mm');\r\n    let texto = `&#13;&#10;&#13;&#10;\r\n--------------------------------------------------------------------------------------------------------------------------------------------&#13;&#10;\r\n    Em ${data}, ${mensagem.alerta.user.name}:&#13;&#10;\r\n    ${mensagem.alerta.texto}`;\r\n    return `\r\n        <div id=\"ctM_divResponderRenderized\">\r\n            <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                    <div class=\"input-group-addon\">Para</div>\r\n                    <input type=\"text\" class=\"form-control\" name=\"destinatario\" value=\"${mensagem.alerta.user.name}\" disabled>\r\n                </div>\r\n            </div>\r\n    \r\n                \r\n            <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                    <div class=\"input-group-addon\">Assunto</div>\r\n                    <input type=\"text\" class=\"form-control\" name=\"titulo\" value=\"${titulo}\">\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"form-group\">\r\n                <label for=\"titulo\">Texto:</label>\r\n                <textarea name=\"texto\" class=\"form-control\" style=\"height: 400px\" id=\"ctM_texto\">${texto}</textarea>\r\n            </div>\r\n            \r\n            <div class=\"form-group\">\r\n                <button class=\"btn btn-primary\" id=\"ctM_btnEnviar\"><i class=\"fa fa-paper-plane\"></i> Enviar</button>\r\n            </div>\r\n        </div>\r\n    `;\r\n}\r\n\r\nmodule.exports = responder;\n\n//# sourceURL=webpack:///./src/html/Responder.js?");

/***/ }),

/***/ "./src/html/UltimasMensagens.js":
/*!**************************************!*\
  !*** ./src/html/UltimasMensagens.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("ultimasMensagens = function(mensagens, config) {\r\n    var html = '';\r\n    mensagens.forEach((mensagem, index) => {\r\n        if ( index > 4 ) {\r\n            return;\r\n        }\r\n        html += itemUltimasMensagens(mensagem, config);\r\n    })\r\n    html += `\r\n            <li>\r\n                <div class=\"text-center link-block\">\r\n                    <a href=\"${config.base_url}/avisos/mensagens\" class=\"dropdown-item\">\r\n                        <strong>Ver todas</strong>\r\n                        <i class=\"fa fa-angle-right\"></i>\r\n                    </a>\r\n                </div>\r\n            </li>\r\n            `\r\n    return html;\r\n}\r\n\r\nitemUltimasMensagens = function(mensagem, config) {\r\n    var classNoRead = (mensagem.read_at === null) ? 'no-read' : ''\r\n    var foto = (mensagem.alerta.user.foto === null) ? config.base_url + '/images/sem_foto.jpg' : config.webservice_url + '/Usuario/' + mensagem.alerta.user.foto\r\n    var html = `\r\n                    <li class=\"${classNoRead} notification-item\" data-codigo=\"${mensagem.alerta.codigo}\">\r\n                        <div class=\"dropdown-messages-box\">\r\n                            <a class=\"dropdown-item pull-left\" style=\"padding: 5px\">\r\n                                <img alt=\"\" class=\"img-circle\" src=\"${foto}\">\r\n                            </a>\r\n                            <div class=\"pull-right\" style=\"width:80%\">\r\n                                Mensagem de <strong>${mensagem.alerta.user.name}</strong>: ${mensagem.alerta.titulo}.<br>\r\n                                <small class=\"text-muted\">Em ` + moment(mensagem.alerta.created_at).format('DD/MM/YYYY') + `</small>\r\n                            </div>\r\n                        </div>\r\n                    </li>\r\n                    <li role=\"separator\" class=\"dropdown-divider divider\"></li>`;\r\n    return html;\r\n}\r\n\r\nmodule.exports = ultimasMensagens;\n\n//# sourceURL=webpack:///./src/html/UltimasMensagens.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nwindow.CTMesagem = __webpack_require__(/*! ./CTMensagem */ \"./src/CTMensagem.js\");\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });