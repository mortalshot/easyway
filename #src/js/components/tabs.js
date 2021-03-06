$(document).ready(function () {
    $('.tabs-triggers__item').click(function (e) {
        e.preventDefault();

        var tabsid = $(this).closest('.tabs').attr("id");
        $('#' + tabsid + ' ' + '.tabs-triggers__item').removeClass('tabs-triggers__item--active');
        $('#' + tabsid + ' ' + '.tabs-content__item').removeClass('tabs-content__item--active');

        $(this).addClass('tabs-triggers__item--active');
        $($(this).attr('href')).addClass('tabs-content__item--active');
    });

    $('.tabs-triggers__item:first').click();


    $('.side-categories__tabs-content-close').click(function (e) {
        e.preventDefault();
        $(this).parent().removeClass('tabs-content__item--active');
        $('.side-categories__tabs-title').removeClass('tabs-triggers__item--active');
    })
});