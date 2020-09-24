$(document).ready(function () {
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
        let sectionNumber = document.querySelectorAll('.sec-popular-goods').length;
        let slidesNumber = $('.slider_item').length;
        let slidesClonedNumber = $('.slider_item.slick-cloned').length;
        let dotsWidth = 100 / (slidesNumber - slidesClonedNumber) * sectionNumber;
        $('.slider_popular-goods .slick-dots li').width(dotsWidth + '%');
    });

    $('.banner-slider').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
    })

    $('.summary-cart__products').slick({
        autoplay: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
    // высота точек слайдера каталога на странице оформления заказа
    mediaQueryMdMax = window.matchMedia('(max-width: 767px)');
    $(function () {
        if ($('.summary-cart__product').length > 0) {
            let slidesNumber = $('.summary-cart__product').length;

            if (mediaQueryMdMax.matches) {
                let dotsHeight = 100 / (slidesNumber);
                $('.summary-cart__products .slick-dots li').height(dotsHeight + '%');
            } else {
                let dotsHeight = 100 / (slidesNumber - 1);
                $('.summary-cart__products .slick-dots li').height(dotsHeight + '%');
            }
        }
    });
})