$(document).ready(function () {
    let submenu = $('.nav__submenu');
    submenuClass = function () {
        for (let i = 0; i < submenu.length; i++) {
            let submenuItem = submenu[i].previousElementSibling.closest('.nav__item');
            $(submenuItem).addClass('nav__item--submenu');
        }
    }
    submenuClass();

    const timeout = 300;
    let unlock = true;

    $('.nav__item--submenu').on('mouseenter', function () {
        if (unlock) {
            $(body).addClass('lock');
            $(body).css({ 'padding-right': '17px' })
            $(this).children('.nav__submenu').addClass('open').slideDown(300);
            $(this).children('.nav__submenu').css({ 'padding-right': '17px' });

            if ($('.site_wrap').hasClass('nav-fixed')) {
                $('.site_header__bottom').css({ 'padding-right': '17px' });
            }

            unlock = false;

            setTimeout(() => {
                unlock = true;
            }, timeout);
        }
    }).on('mouseleave', function () {
        if (unlock) {
            $(body).removeClass('lock');
            $(body).css({ 'padding-right': '0' })
            $('.site_header__bottom').css({ 'padding-right': '0' });
            $('.nav__submenu').removeClass('open').slideUp(300);
            $(this).children('.nav__submenu').css({ 'padding-right': '0' });
        }
    });
})