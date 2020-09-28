$(document).ready(function () {
    $('.nav__item').on('mouseenter', function () {
        $(body).addClass('lock');
        $(this).children('.popup').addClass('open');
        $(body).css({ 'padding-right': '17px' })
    }).on('mouseleave', function () {
        $(body).removeClass('lock');
        $(body).css({ 'padding-right': '0' })
        $(this).children('.popup').removeClass('open');
    });
})