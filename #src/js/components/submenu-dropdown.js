$(document).ready(function () {
    let submenu = $('.nav__submenu');
    submenuClass = function () {
        for (let i = 0; i < submenu.length; i++) {
            let submenuItem = submenu[i].previousElementSibling.closest('.nav__item');
            $(submenuItem).addClass('nav__item--submenu');
        }
    }
    submenuClass();

    const lockPaddingValue = window.innerWidth - document.querySelector('.site-main').offsetWidth + 'px';
    $('.nav__submenu').css({ 'padding-right': lockPaddingValue });

    $('.nav__item--submenu').on('mouseenter', function () {
        $(body).addClass('lock');
        $(body).css({ 'padding-right': lockPaddingValue })
        $(this).children('.nav__submenu').addClass('open');
        $('.nav__submenu').css({ 'padding-right': lockPaddingValue });

        if ($('.site_wrap').hasClass('nav-fixed')) {
            $('.site_header__bottom').css({ 'padding-right': lockPaddingValue });
        }
    }).on('mouseleave', function () {
        $(body).removeClass('lock');
        $(body).css({ 'padding-right': '0' })
        $('.site_header__bottom').css({ 'padding-right': '0' });
        $(this).children('.nav__submenu').removeClass('open');
        $('.nav__submenu').css({ 'padding-right': '0' });
    });
})