var ToastHTML = require('./html/ToastHTML');

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