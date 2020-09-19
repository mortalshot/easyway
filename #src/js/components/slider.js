$('.slider_popular-goods').slick({
    autoplay: false,
    infinite: true,
    slidesToShow: 4,
    arrows: true,
    centerMode: false,
    variableWidth: false,
    prevArrow: '<button type="button" class="slick-prev"><i class="arrow-slider-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="arrow-slider-right"></i></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true,
            }
        },
    ]
});

// Ширина точек слайдера каталога
$(function () {
    let slidesNumber = $('.slider_item').length;
    let slidesClonedNumber = $('.slider_item.slick-cloned').length;
    let dotsWidth = 100 / (slidesNumber - slidesClonedNumber);
    $('.slider_popular-goods .slick-dots li').width(dotsWidth + '%');
});

$('.banner-slider').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
})