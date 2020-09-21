$(document).ready(function () {
    let showMore = document.querySelector('.show-more__label');
    let catalogItem = document.querySelectorAll('.filter-catalog__item .title-h6');

    mediaQueryMdMin = window.matchMedia('(min-width: 768px)');
    mediaQuerySmMax = window.matchMedia('(max-width: 575px)');

    // mediaQueryMdMin
    mediaQueryMdMin.addListener(handleTabletChange);
    function handleTabletChange(e) {
        if (e.matches) {
            if ($('#sideCategoriesMobileAccordion')) {
                $('#sideCategoriesMobileAccordion').removeClass('accordion');
                $('#sideCategoriesMobileAccordion .side-categories__item').removeClass('accordion__item');
                $('#sideCategoriesMobileAccordion .side-categories__title').removeClass('accordion__title');
                $('#sideCategoriesMobileAccordion .side-categories__text').removeClass('accordion__text');
                $('#sideCategoriesMobileAccordion .side-categories__text').css({ display: "block" });
            }

            if (showMore) {
                showMore.innerHTML = "Показывать на странице";
            }

            if (catalogItem) {
                for (let index = 0; index < catalogItem.length; index++) {
                    const catalogItems = catalogItem[index];
                    catalogItems.classList.remove('accordion__title');
                }
            }

            if ($('.filter-catalog .accordion__text')) {
                $('.filter-catalog .accordion__text').css({ display: "block" });
            }
        }

        else {
            if ($('#sideCategoriesMobileAccordion')) {
                $('#sideCategoriesMobileAccordion').addClass('accordion');
                $('#sideCategoriesMobileAccordion .side-categories__item').addClass('accordion__item');
                $('#sideCategoriesMobileAccordion .side-categories__title').addClass('accordion__title');
                $('#sideCategoriesMobileAccordion .side-categories__text').addClass('accordion__text');
            }

            if (showMore) {
                showMore.innerHTML = "Отображать товаров";
            }

            if (catalogItem) {
                for (let index = 0; index < catalogItem.length; index++) {
                    const catalogItems = catalogItem[index];
                    catalogItems.classList.add('accordion__title');
                }
            }
        }
    }
    if (mediaQueryMdMin.matches) {
        if ($('#sideCategoriesMobileAccordion')) {
            $('#sideCategoriesMobileAccordion').removeClass('accordion');
            $('#sideCategoriesMobileAccordion .side-categories__item').removeClass('accordion__item');
            $('#sideCategoriesMobileAccordion .side-categories__title').removeClass('accordion__title');
            $('#sideCategoriesMobileAccordion .side-categories__text').removeClass('accordion__text');
            $('#sideCategoriesMobileAccordion .filter-catalog .accordion__text').css({ display: "block" });
        }

        if (catalogItem) {
            for (let index = 0; index < catalogItem.length; index++) {
                const catalogItems = catalogItem[index];
                catalogItems.classList.remove('accordion__title');
            }
        }
    }
    else {
        if (showMore) {
            showMore.innerHTML = "Отображать товаров";
        }
    }

    // mediaQuerySmMax
    mediaQuerySmMax.addListener(handleTabletChangeSmMax);
    function handleTabletChangeSmMax(e) {
        if (e.matches) {
            if ($('.site_footer__block')) {
                $('.site_footer__block').removeClass('accordion');
                $('.site_footer__block .site_footer__text').removeClass('accordion__text');
                $('.site_footer__block .site_footer__text').css({ display: "block" });
            }
        }
        else {
            if ($('.site_footer__block')) {
                $('.site_footer__block').addClass('accordion');
                $('.site_footer__block .site_footer__text').addClass('accordion__text');
            }
        }
    }

    if (mediaQuerySmMax.matches) {
    }
    else {
        if ($('.site_footer__block')) {
            $('.site_footer__block').removeClass('accordion');
            $('.site_footer__block .site_footer__text').removeClass('accordion__text');
            $('.site_footer__block .site_footer__text').css({ display: "block" });
        }
    }
});