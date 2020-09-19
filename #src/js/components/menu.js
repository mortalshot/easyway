$(document).ready(function() {
    $('.site_header__burger').click(function(event) {
        $('.site_header__burger, #headerMobileAccordion').toggleClass('active');
        $('body').toggleClass('lock');
    })
})