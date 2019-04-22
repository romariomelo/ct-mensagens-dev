var ToastHTML = require('./html/ToastHTML');

class CTToast {

    showToast() {
        $('body').append( ToastHTML() );
        $('.ct-toast').show();
        let _this = this;
        setTimeout(function() {
            _this.dismissToast();
        }, 5000);
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