$(document).ready(function () {
    $('.site_header__burger').click(function (event) {
        $('.site_header__burger, .side-categories__wrapper').toggleClass('active');
        $('body').toggleClass('lock');

        setTimeout(() => {
            $('#headerMobileCategoriesTabs .side-categories__tabs-title').removeClass('tabs-triggers__item--active');
            $('#headerMobileCategoriesTabs .side-categories__tabs-content-item').removeClass('tabs-content__item--active');
        }, 300);
    })
})