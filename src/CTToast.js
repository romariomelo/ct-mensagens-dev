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

    showToast() {
        $('body').append( ToastHTML() );
        $('.ct-toast').show();
        let _this = this;
        setTimeout(function() {
            _this.dismissToast();
        }, 5000);

        $(document).on('click', '#toastClose', function(){
            _this.dismissToast();
        });
    }

    dismissToast() {
        $('.ct-toast').removeClass('animated fadeInUp');
        setTimeout(function() {
            $('.ct-toast').addClass('animated fadeOutDown');
        }, 100);

        setTimeout(function() {
            $('.ct-toast').remove();
        }, 1000);

    }

}

module.exports = CTToast;