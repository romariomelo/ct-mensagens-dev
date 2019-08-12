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


window.CTMesagem = require('./CTMensagem');
window.CTToast = require('./CTToast');
window.CTToast = new CTToast();

