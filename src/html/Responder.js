var fn = require("../funcoes/fn");

responder = function(mensagem, config) {
    return getResponderBoxHtml(mensagem, config);
}

var getResponderBoxHtml = function(mensagem, config) {
    let titulo = ( mensagem.alerta.titulo.substring(0, 3) === 'RE:' ) ? mensagem.alerta.titulo : 'RE: ' + mensagem.alerta.titulo;
    let data = moment( mensagem.alerta.created_at ).format('DD/MM/YYYY') + ' as ' + moment( mensagem.alerta.created_at ).format('HH:mm');
    let texto = `&#13;&#10;&#13;&#10;
--------------------------------------------------------------------------------------------------------------------------------------------&#13;&#10;
    Em ${data}, ${mensagem.alerta.user.name}:&#13;&#10;
    ${mensagem.alerta.texto}`;
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
                <textarea name="texto" class="form-control" style="height: 400px" id="ctM_texto">${texto}</textarea>
            </div>
            
            <div class="form-group">
                <button class="btn btn-primary" id="ctM_btnEnviarResposta"><i class="fa fa-paper-plane"></i> Enviar</button>
            </div>
        </div>
    `;
}

module.exports = responder;