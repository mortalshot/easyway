$(document).ready(function () {
    let promocode = $('#promocode');
    const promocodeTrue = 'EAZYWAY2020';
    const promocodeError = 'Промокод не найдет';
    const promocodeSuccess = 'Промокод успешно применен';

    promocode.blur(function () {
        if ($(this).val()) {
            $('.summary-cart__promocode-text').slideDown(300);

            if ($(this).val() == promocodeTrue) {
                $('.summary-cart__promocode-text').removeClass('_red');
                $('.summary-cart__promocode-text').addClass('_green');
                $('.summary-cart__promocode-text').text(promocodeSuccess);
            }
            else {
                $('.summary-cart__promocode-text').removeClass('_green');
                $('.summary-cart__promocode-text').addClass('_red');
                $('.summary-cart__promocode-text').text(promocodeError);
            }
        }
        else {
            $('.summary-cart__promocode-text').slideUp(300);
        }
    });
})