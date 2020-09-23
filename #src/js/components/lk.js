$(document).ready(function () {
    $('.change-view-password-js').click(function(){

        var type = $(this).siblings('input').attr('type') == "text" ? "password" : 'text';
        $(this).siblings('input').prop('type', type);
        // $(this).toggleClass('');
    })

    $('.lk-wrapper__content-tab').click(function(e){
    	e.preventDefault();
    	var href = $(this).attr('href');
        if(href !== '#'){
            $(this).siblings().removeClass('lk-wrapper__content-tab--active');
            $(this).addClass('lk-wrapper__content-tab--active');


            $('.lk-wrapper__content-box').removeClass('lk-wrapper__content-box--active');
            $(href).addClass('lk-wrapper__content-box--active');
        }
    });


    $('.lk-wrapper__content-tab').click(function(e){
        e.preventDefault();
        var href = $(this).attr('href');
        if(href !== '#'){
            $(this).siblings().removeClass('lk-wrapper__content-tab--active');
            $(this).addClass('lk-wrapper__content-tab--active');


            $('.signin-wrapper__auth-box').removeClass('signin-wrapper__auth-box--active');
            $(href).addClass('signin-wrapper__auth-box--active');
        }
    });



    $('.lk-wrapper__add-address').click(function(){
        var clone = $('.lk-wrapper__form-address:first').clone();
        clone.find('input').val('');
        $(this).before(clone);
    });

    $('.lk-reviews-item__remove').click(function(e){
        e.preventDefault();
        var review = $(this).closest('.lk-reviews-item').fadeOut(400, function() { $(this).remove(); });
    })
});