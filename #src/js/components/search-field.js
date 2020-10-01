$(document).ready(function () {
    mediaQueryMdMax = window.matchMedia('(max-width: 767px)');
    $('.search').click(function (e) {
        e.stopPropagation();
        $(this).addClass('search--active');
        if (mediaQueryMdMax.matches) {
            $('.site_header__nav').css({opacity: '0', 'visibility': 'hidden', 'width': '0', 'height': '0'});
        }
    })
    $(body).click(function (e) {
        $('.search').removeClass('search--active');
        if (mediaQueryMdMax.matches) {
            $('.site_header__nav').css({opacity: '1', 'visibility': 'visible', 'width': "inherit", 'height': "inherit"});
        }
    })
})