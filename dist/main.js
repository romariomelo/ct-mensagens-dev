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

eval("//import {setHtml} from \"./html/html\";\r\nvar caixaDeEntrada = __webpack_require__(/*! ./html/CaixaDeEntrada */ \"./src/html/CaixaDeEntrada.js\");\r\nvar ultimasMensagens = __webpack_require__(/*! ./html/UltimasMensagens */ \"./src/html/UltimasMensagens.js\");\r\n\r\nclass CTMensagem {\r\n\r\n    constructor(config = null) {\r\n\r\n        this.config = {};\r\n        this.mensagens = [];\r\n\r\n        if ( config !== null ) {\r\n            this.config = Object.assign(this.config, config);\r\n\r\n        }\r\n\r\n    }\r\n\r\n    renderCaixaDeEntrada( elemento ) {\r\n        console.log('Renderizando caixa de entrada em: ' + elemento);\r\n        $( elemento ).addClass('ct-mensagem');\r\n        $( elemento ).html( caixaDeEntrada( this.mensagens, this.config ) );\r\n    }\r\n\r\n    renderUltimasMensagens( elemento ) {\r\n        console.log('Renderizando ultimas mensagens em: ' + elemento);\r\n        $( elemento ).addClass('ct-ultimas-mensagens');\r\n        $( elemento ).html( ultimasMensagens( this.mensagens, this.config ) );\r\n    }\r\n\r\n    setMensagens(mensagens) {\r\n\r\n        this.mensagens = mensagens;\r\n\r\n    }\r\n\r\n    btnNaoLidaClick(fn) {\r\n\r\n        if ( typeof fn === 'function') {\r\n\r\n            $('.btn-marcar-como-nao-lida').click(function(){\r\n\r\n                var mensagem = $(this).closest('.inbox-row').attr('data-codigo');\r\n\r\n                fn(mensagem);\r\n            });\r\n        } else {\r\n            console.error('Você deve passar uma função como parâmetro.');\r\n        }\r\n\r\n\r\n    }\r\n\r\n    btnResponderClick(fn) {\r\n\r\n        if ( typeof fn === 'function') {\r\n\r\n            $('.btn-responder').click(function(){\r\n\r\n                var mensagem = $(this).closest('.inbox-row').attr('data-codigo');\r\n\r\n                fn(mensagem);\r\n            });\r\n        } else {\r\n            console.error('Você deve passar uma função como parâmetro.');\r\n        }\r\n\r\n\r\n    }\r\n\r\n\r\n    btnExcluirClick(fn) {\r\n\r\n        if ( typeof fn === 'function') {\r\n\r\n            $('.btn-excluir').click(function(){\r\n\r\n                var mensagem = $(this).closest('.inbox-row').attr('data-codigo');\r\n\r\n                fn(mensagem);\r\n            });\r\n        } else {\r\n            console.error('Você deve passar uma função como parâmetro.');\r\n        }\r\n\r\n\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = CTMensagem;\r\n\n\n//# sourceURL=webpack:///./src/CTMensagem.js?");

/***/ }),

/***/ "./src/html/CaixaDeEntrada.js":
/*!************************************!*\
  !*** ./src/html/CaixaDeEntrada.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\ncaixaDeEntrada = function(mensagens, config) {\r\n    var html = '';\r\n    mensagens.forEach((mensagem) => {\r\n        html += itemCaixaDeEntrada(mensagem, config)\r\n    })\r\n    return html;\r\n}\r\n\r\nitemCaixaDeEntrada = function(mensagem, config) {\r\n    var classNoRead = (mensagem.read_at === null) ? 'no-read' : '';\r\n    let foto = ( mensagem.alerta.user.foto === null ) ? config.base_url + '/images/sem_foto.jpg' : config.webservice_url + '/Usuario/' + mensagem.alerta.user.foto;\r\n    return `\r\n    <div class=\"row inbox-row ${classNoRead}\" data-codigo=\"${mensagem.alerta.codigo}\">\r\n        <div class=\"col col-xs-12 col-sm-3 col-sm-push-9 text-right\">\r\n            <button class=\"btn btn-default btn-excluir\" title=\"Excluir Mensagem\">\r\n                <i class=\"fa fa-trash\"></i>\r\n            </button>\r\n            <button class=\"btn btn-default btn-responder\" title=\"Responder\">\r\n                <i class=\"fa fa-reply\"></i>\r\n            </button>\r\n            <button class=\"btn btn-default btn-marcar-como-nao-lida\" title=\"Marcar mensagem como não lida\">\r\n                <i class=\"fa fa-envelope\"></i>\r\n            </button>\r\n        </div>\r\n        <div class=\"col col-xs-12 col-sm-1 col-sm-pull-3 inbox-avatar\">\r\n            <a href=\"${config.base_url}/avisos/mensagens/${mensagem.alerta.codigo}\">\r\n                <img src=\"${foto}\" class=\"img-responsive img-circle\">\r\n            </a>\r\n        </div>\r\n        <div class=\"col col-xs-12 col-sm-8 col-sm-pull-3\">\r\n            <a href=\"${config.base_url}/avisos/mensagens/${mensagem.alerta.codigo}\">\r\n                <h4 class=\"inbox-nome\">${mensagem.alerta.user.name}</h4>\r\n                <h4 class=\"inbox-assunto\">${mensagem.alerta.titulo}</h4>\r\n            </a>\r\n        </div>\r\n    </div>\r\n    `\r\n}\r\n\r\nmodule.exports = caixaDeEntrada;\n\n//# sourceURL=webpack:///./src/html/CaixaDeEntrada.js?");

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