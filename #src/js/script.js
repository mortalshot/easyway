@@include('vendors.js');

$(document).ready(function () {
    $('#sideCategories-accordion .accordion__title:first').click();

    $('.help-tabs__item').click(function () {
        $('.popup').removeClass('open');
        $('body').removeClass('lock');
        $('body').css({ paddingRight: 0 });
        $('.help-page__menu-mobile a').removeClass('active');
    });

    $('.help-page__menu-mobile a').click(function () {
        $('.help-page__menu-mobile a').toggleClass('active');
    });
    
}); 