!function(t){var e={};function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";n.r(e),n.d(e,"lerMais",function(){return a}),n.d(e,"getDataRelativa",function(){return s});const a=function(t,e=50){if(t.length<=e)return t;if(t.length>e){for(;" "!==t[e];)e+=1;return t.substring(0,e)+"... Ler mais."}},s=function(t){let e=moment(t),n=moment(new Date).diff(e,"days");return 0===n?e.format("[Hoje às] HH:mm"):1===n?e.format("[Ontem às] HH:mm"):n<180?e.format("[Em] DD [de] MMM"):e.format("[Em] DD/MM/YYYY")}},function(t,e,n){$?$.summernote?$.summernote.version&&"0.8.12"!=$.summernote.version&&console.error("Versão do Summernote deve ser 0.8.12!"):console.error("Summernote é necessário!"):console.warn("jQuery é necessário!"),window.CTMesagem=n(2),window.CTToast=n(9),window.CTToast=new CTToast},function(t,e,n){var a=n(3),s=n(4),o=n(5),r=n(6),i=n(7),l=n(8);t.exports=class{constructor(t=null){this.config={},this.mensagens=[],this.informativos=[],null!==t&&(this.config=Object.assign(this.config,t))}renderCaixaDeEntrada(t){$(t).addClass("ct-mensagem"),Array.isArray(this.mensagens)||$(t).html("<p>Mensagens não encontradas, favor recarregue a página!</p>"),$(t).html(a(this.mensagens,this.config))}renderUltimasMensagens(t){$(t).addClass("ct-ultimas-mensagens"),Array.isArray(this.mensagens)||$(t).html("<p>Mensagens não encontradas, favor recarregue a página!</p>"),$(t).html(s(this.mensagens,this.config))}renderUltimosInformativos(t){$(t).addClass("ct-ultimas-mensagens"),Array.isArray(this.mensagens)||$(t).html("<p>Mensagens não encontradas, favor recarregue a página!</p>");let e=o(this.informativos,this.config);$(t).html(""),e.forEach(function(e){$(t).append(e)})}renderResponder(t,e){$(e).addClass("ct-mensagem-reply"),$(e).html(r(t),this.config),this.createEditor("#ctM_texto"),$("#ctM_divResponderRenderized").attr("data-codigo",t.alerta.codigo)}renderConversa(t,e){$(e).html(i(t,this.config))}renderMensagensEnviadas(t,e){console.log(this.config),$(t).html(l(e,this.config))}setMensagens(t){Array.isArray(this.mensagens)?(this.informativos=this.somenteInformativos(t),this.mensagens=this.somenteMensagens(t)):console.warn("Mensagens deve ser um Array.")}getMensagens(){return this.mensagens}btnLidaNaoLidaClick(t){if("function"==typeof t){let e=this;$(".btn-marcar-como-nao-lida").click(function(){var n=$(this).closest(".inbox-row").attr("data-codigo"),a=e.getMsgById(n);t(a)})}else console.error("Você deve passar uma função como parâmetro.")}btnResponderClick(t){if("function"==typeof t){let e=this;$(".btn-responder").click(function(){var n=$(this).closest(".ct-info-mensagem").attr("data-codigo"),a=e.getMsgById(n);t(a)})}else console.error("Você deve passar uma função como parâmetro.")}btnExcluirClick(t){if("function"==typeof t){let e=this;$(".btn-excluir").click(function(){var n=$(this).closest(".ct-info-mensagem").attr("data-codigo"),a=e.getMsgById(n);t(a)})}else console.error("Você deve passar uma função como parâmetro.")}btnEnviarRespostaClick(t){if("function"==typeof t){let e=this;$("#ctM_btnEnviarResposta").click(function(){let n=$(this).closest("#ctM_divResponderRenderized"),a={titulo:n.find("input[name=titulo]").val(),texto:n.find("textarea[name=texto]").val()},s=$(this).closest("#ctM_divResponderRenderized").attr("data-codigo"),o=e.getMsgById(s);t(o,a)})}}btnNovaMensagemClick(t){"function"==typeof t&&$("#bt-nova-mensagem").click(function(){$(".nav-msg").removeAttr("disabled"),$(this).attr("disabled","disabled"),t()})}btnCaixaDeEntradaClick(t){"function"==typeof t?$("#bt-caixa-de-entrada").click(function(){t()}):console.error("Parâmetro deve ser função.")}btnMensagensEnviadasClick(t){"function"==typeof t?$("#bt-minhas-mensagens").click(function(){$(".nav-msg").removeAttr("disabled"),$(this).attr("disabled","disabled"),t()}):console.error("Parâmetro deve ser função.")}getMsgById(t){if(Array.isArray(this.mensagens)){let e=null;return this.mensagens.forEach(function(n){n.alerta.codigo!==parseInt(t)||(e=n)}),e}console.error("Mensagens devem ser Array.")}setTitulo(t){$("#iboxCaixaDeEntrada h5").text(t)}getCaixaDeEntradaButton(){return $("#bt-caixa-de-entrada")}getNovaMensagemButton(){return $("#bt-nova-mensagem")}createEditor(t){$(t).summernote({toolbar:[["style",["undo","redo","bold","italic","underline","clear","forecolor"]],["para",["ul","paragraph","style"]]],popover:{},lang:"pt-BR",height:"500px"})}destroyEditor(t){$(t).summernote("destroy")}somenteInformativos(t){return this.filtrarMenssagensInformativos(t,"INFORMATIVOS")}somenteMensagens(t){return this.filtrarMenssagensInformativos(t,"MENSAGEM")}filtrarMenssagensInformativos(t,e){var n=[];return t.forEach(function(t){t.alerta.tipo===e&&(n[n.length]=t)}),n}}},function(t,e,n){var a=n(0);caixaDeEntrada=function(t,e){if(0===t.length)return i(e);var n=cabecalhoCaixaDeEntrada(e);return n+='<div id="ctM_corpo_caixaDeEntrada">',t.forEach(t=>{n+=itemCaixaDeEntrada(t,e)}),n+="</div>"},cabecalhoCaixaDeEntrada=function(t){return`\n    <div class="row">\n    ${l(t)}\n    ${btnCaixaDeEntrada(t)}\n    ${btnMensagensEnviadas(t)}\n    ${btnNovaMensagem(t)}    \n    </div>\n    `},itemCaixaDeEntrada=function(t,e){let n=null===t.read_at?"no-read":"",i=null===t.alerta.user.foto?e.base_url+"/images/sem_foto.jpg":e.webservice_url+"/Usuario/"+t.alerta.user.foto,l=a.lerMais(t.alerta.titulo);return`\n    <div class="row inbox-row ct-info-mensagem ${n}" data-codigo="${t.alerta.codigo}">\n        <div class="col col-xs-12 col-sm-3 col-sm-push-9 text-right">\n            ${s(t)}\n            ${r(t)}\n            ${o(t)}\n        </div>\n        <div class="col col-xs-12 col-sm-1 col-sm-pull-3 inbox-avatar">\n            <a href="${e.base_url}/avisos/mensagens/${t.alerta.codigo}">\n                <img src="${i}" class="img-responsive img-circle">\n            </a>\n        </div>\n        <div class="col col-xs-12 col-sm-8 col-sm-pull-3">\n            <a href="${e.base_url}/avisos/mensagens/${t.alerta.codigo}">\n                <h4 class="inbox-nome">${t.alerta.user.name}</h4>\n                <h5 class="inbox-assunto">${l}</h5>\n                <p>${t.alerta.texto}</p>\n                <small>${a.getDataRelativa(t.alerta.created_at)}</small>\n            </a>\n        </div>\n    </div>\n    `};var s=function(t){return'\n            <button class="btn btn-default btn-excluir" title="Excluir Mensagem">\n                <i class="fa fa-trash"></i>\n            </button>\n    '},o=function(t){let e=null===t.read_at?"fa-envelope-open":"fa-envelope";return`\n        <button class="btn btn-default btn-marcar-como-nao-lida" title="${null===t.read_at?"Marcar mensagem como lida.":"Marcar mensagem como não lida"}">\n            <i class="fa ${e}"></i>\n        </button>\n    `},r=function(t){return'\n            <button class="btn btn-default btn-responder" title="Responder">\n                <i class="fa fa-reply"></i>\n            </button>\n    '},i=function(t){return cabecalhoCaixaDeEntrada(t)+'\n    <div id="ctM_corpo_caixaDeEntrada">\n        <h2 style="text-align:center">Você não possui mensagens!</h2>\n    </div>\n    '},l=function(t){return`\n<div class="form-group  col-lg-2 col-md-3 col-sm-6">\n\t<a href="${t.base_url}">\n\t\t<button class="btn btn-danger btn-block" type="button"><i class="fa fa-arrow-left"></i> Retornar\n\t\t</button>\n\t</a>\n</div>`};btnCaixaDeEntrada=function(t){return'<div class="form-group  col-lg-2 col-md-3 col-sm-6">\n                    <button class="btn btn-white btn-block nav-msg" disabled="" type="button" id="bt-caixa-de-entrada"><i class="fas fa-envelope"></i> Caixa de\n                        entrada\n                    </button>\n\n                </div>'},btnMensagensEnviadas=function(t){return'<div class="form-group  col-lg-2 col-md-3 col-sm-6">\n                    <button class="btn btn-white btn-block nav-msg" type="button" id="bt-minhas-mensagens"><i class="fas fa-share-square"></i> Mensagens enviadas\n                    </button>\n                </div>'},btnNovaMensagem=function(t){return'<div class="form-group  col-lg-2 col-md-3 col-sm-6">\n                    <button class="btn btn-white btn-block nav-msg" type="button" id="bt-nova-mensagem"><i class="fa fa-plus"></i> Nova mensagem\n                    </button>\n                </div>'},t.exports=caixaDeEntrada},function(t,e){ultimasMensagens=function(t,e){var n="";return t.forEach((t,a)=>{a>4||(n+=itemUltimasMensagens(t,e))}),n+=`\n            <li>\n                <div class="text-center link-block">\n                    <a href="${e.base_url}/avisos/mensagens" class="dropdown-item">\n                        <strong>Ver todas</strong>\n                        <i class="fa fa-angle-right"></i>\n                    </a>\n                </div>\n            </li>\n            `},itemUltimasMensagens=function(t,e){var n=null===t.read_at?"no-read":"",a=null===t.alerta.user.foto?e.base_url+"/images/sem_foto.jpg":e.webservice_url+"/Usuario/"+t.alerta.user.foto;return`\n                    <li class="${n} notification-item" data-codigo="${t.alerta.codigo}">\n                        <div class="dropdown-messages-box">\n                            <a class="dropdown-item pull-left" style="padding: 5px">\n                                <img alt="" class="img-circle" src="${a}">\n                            </a>\n                            <div class="pull-right" style="width:80%">\n                                Mensagem de <strong>${t.alerta.user.name}</strong>: ${t.alerta.titulo}.<br>\n                                <small class="text-muted">Em `+moment(t.alerta.created_at).format("DD/MM/YYYY")+'</small>\n                            </div>\n                        </div>\n                    </li>\n                    <li role="separator" class="dropdown-divider divider"></li>'},t.exports=ultimasMensagens},function(t,e){ultimosInformativos=function(t,e){let n=[];t.forEach((t,a)=>{if(a>4)return;n[n.length]=itemUltimosInformativos(t,e);let s=document.createElement("li");s.setAttribute("role","separator"),s.setAttribute("class","dropdown-divider divider"),n[n.length]=s});let a=document.createElement("li");a.setAttribute("class","text-center link-block");let s=document.createElement("a");return s.setAttribute("href",e.base_url+"/avisos/informativos"),s.setAttribute("class","dropdown-item"),s.setAttribute("style","text-align: center"),s.innerHTML='<strong>Ver todas</strong> <i class="fa fa-angle-right"></i>',a.appendChild(s),n[n.length]=a,n},itemUltimosInformativos=function(t,e){var n=null===t.read_at?"no-read":"",a=null===t.alerta.user.foto?e.base_url+"/images/sem_foto.jpg":e.webservice_url+"/Usuario/"+t.alerta.user.foto;let s=document.createElement("li");s.setAttribute("class",`${n} notification-item`),s.setAttribute("data-codigo",`${t.alerta.codigo}`);let o=document.createElement("div");o.setAttribute("class","dropdown-messages-box");let r=document.createElement("a");r.setAttribute("class","dropdown-item pull-left"),r.setAttribute("style","padding: 5px");let i=document.createElement("img");i.setAttribute("class","img-circle"),i.setAttribute("src",a);let l=document.createElement("div");return l.setAttribute("class","pull-right"),l.setAttribute("style","width:80%"),l.innerHTML=`Mensagem de <strong>${t.alerta.user.name}</strong>: ${t.alerta.titulo}.<br><small class="text-muted">Em `+moment(t.alerta.created_at).format("DD/MM/YYYY")+"</small>",r.appendChild(i),o.appendChild(r),o.appendChild(l),s.appendChild(o),s},t.exports=ultimosInformativos},function(t,e,n){n(0);responder=function(t,e){return a(t,e)};var a=function(t,e){let n="RE:"===t.alerta.titulo.substring(0,3)?t.alerta.titulo:"RE: "+t.alerta.titulo;moment(t.alerta.created_at).format("DD/MM/YYYY [as] HH:MM");return`\n        <div id="ctM_divResponderRenderized">\n            <div class="form-group">\n                <div class="input-group">\n                    <div class="input-group-addon">Para</div>\n                    <input type="text" class="form-control" name="destinatario" value="${t.alerta.user.name}" disabled>\n                </div>\n            </div>\n    \n                \n            <div class="form-group">\n                <div class="input-group">\n                    <div class="input-group-addon">Assunto</div>\n                    <input type="text" class="form-control" name="titulo" value="${n}">\n                </div>\n            </div>\n            \n            <div class="form-group">\n                <label for="titulo">Texto:</label>\n                <textarea name="texto" class="form-control" style="height: 400px" id="ctM_texto"></textarea>\n            </div>\n            \n            <div class="form-group">\n                <button class="btn btn-primary" id="ctM_btnEnviarResposta"><i class="fa fa-paper-plane"></i> Enviar</button>\n            </div>\n        </div>\n    `};t.exports=responder},function(t,e,n){n(0);ConversaHTML=function(t,e){return a(t,e)};var a=function(t,e){var n=`\n    <div class="ibox ct-info-mensagem"  data-codigo="${t[0].alerta.codigo}">\n            <div class="ibox-title">\n                <h2 style="font-weight: bold;">${t[0].alerta.titulo}</h2>\n            </div>\n\n            <div class="ibox-content ibox-mensagem">\n\n                <div class="row">\n                    <div class="text-left col-md-6">\n                        ${o()}\n                        ${r()}\n                    </div>\n                </div>`;return t.forEach(function(t){n+=s(t,e)}),n+="</div>\n        </div>\n    "},s=function(t,e){return`\n    <div class="row mensagem-cabecalho">\n                        <div class="col-xs-4 col-xs-offset-4 col-sm-2 col-sm-offset-0 col-md-1">\n                            <img class="img-responsive img-circle" src="${null===t.alerta.user.foto?e.base_url+"/images/sem_foto.jpg":e.webservice_url+"/Usuario/"+t.alerta.user.foto}" alt="Foto de ${t.alerta.user.name}">\n                        </div>\n                        <div class="col-xs-12 col-sm-10 col-md-11">\n                            <h3>${t.alerta.user.name}</h3>\n                            <small>${moment(t.alerta.created_at).format("DD/MM/YYYY")} as ${moment(t.alerta.created_at).format("HH:mm:ss")}</small>\n                        </div>\n                    </div>\n                    <div class="row">\n                        <div class="col-xs-12 mensagem-texto">\n                            ${t.alerta.texto.replace(/\r?\n/g,"<br />")}\n                        </div>\n                    </div>\n    `},o=function(){return'<button class="btn btn-success btn-sm btn-responder" id="bt-responder" title="Responder"><i class="fas fa-reply" style="width: 20px"></i>\n                            Responder</button>'},r=function(){return'<button class="btn btn-danger btn-sm btn-excluir" id="bt-excluir" title="Excluir"><i class="fas fa-trash-alt" style="width: 20px"></i>\n                            Excluir</button>'};t.exports=ConversaHTML},function(t,e,n){var a=n(0);mensagensEnviadas=function(t,e){return s(t,e)};var s=function(t,e){var n="<div>";return t.forEach(function(t){n+=o(t,e)}),n+="</div>"},o=function(t,e){return`\n        <div class="row enviada-box" data-codigo="${t.codigo}">\n            <a href="${e.base_url+"/avisos/mensagens/"+t.codigo}">\n                <div class="col-xs-12 col-sm-8 col-lg-10">\n                    <h4 style="color: green;">${t.titulo}</h4>            \n                    <p style="color: #333">${t.texto}</p>            \n                </div>   \n            </a>                 \n            <div class="col-xs-12 col-sm-4 col-lg-2">\n                <button class="btn btn-default"><i class="fa fa-trash"></i></button>\n                <small>${a.getDataRelativa(t.created_at)}</small>\n            </div>                    \n        </div>    \n    `};t.exports=mensagensEnviadas},function(t,e,n){var a=n(10);t.exports=class{constructor(t){this.config={duration:5e3},"object"==typeof t&&null!==t&&Object.assign(this.config,t)}setConfig(t){"object"==typeof t&&null!==t&&Object.assign(this.config,t)}setDuration(t){isNaN(t)?this.config.duration=t:console.error("Parâmetro inválido!")}showToast(t){let e=Math.ceil(1e3*Math.random());0===$(".toast-wrapper").length&&$("body").append('<div class="toast-wrapper"></div>'),$(".toast-wrapper").append(a(t,this.config,e)),$(".ct-toast#t_"+e).show();let n=this;setTimeout(function(){n.dismissToast(e)},this.config.duration),$(document).on("click","#toastClose",function(){n.dismissToast()})}dismissToast(t){$(".ct-toast#t_"+t).removeClass("animated fadeInUp"),setTimeout(function(){$(".ct-toast#t_"+t).addClass("animated fadeOutDown")},100),setTimeout(function(){$(".ct-toast#t_"+t).remove()},1e3)}}},function(t,e){ToastHTML=function(t,e,a){return n(t,e,a)};var n=function(t,e,n){let a=null===t.autor.foto?e.base_url+"/images/sem_foto.jpg":e.webservice_url+"/Usuario/"+t.autor.foto;return`\n<div class="ct-toast fadeInUp animated" id="t_${n}" data-id="${t.broadcast_messagem.id}">\n    <a href="#${t.broadcast_messagem.id}">\n        <div>\n            <div class="toast-close" id="toastClose">\n                <i class="fa fa-times fa-2x"></i>\n            </div>\n            <div class="img">\n                <img src="${a}" alt="" class="img-circle img-responsive">\n            </div>\n            <p class="lbl">Nova mensagem de <strong>${t.autor.name}</strong></p>\n        </div>\n    </a>\n</div>`};t.exports=ToastHTML}]);