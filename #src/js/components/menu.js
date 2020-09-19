$(document).ready(function() {
    $('.site_header__burger').click(function(event) {
        $('.site_header__burger, .side-categories__wrapper').toggleClass('active');
        $('body').toggleClass('lock');
    })
})