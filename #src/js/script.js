@@include('vendors.js');

$(document).ready(function () {
    $('#sideCategories-accordion .accordion__title:first').click();

    let showMore = document.querySelector('.show-more__label');
    let catalogItem = document.querySelectorAll('.filter-catalog__item .title-h6');

    mediaQuery = window.matchMedia('(min-width: 768px)');
    mediaQuery.addListener(handleTabletChange);
    function handleTabletChange(e) {
        if (e.matches) {
            $('#sideCategoriesMobileAccordion').removeClass('accordion');
            $('#sideCategoriesMobileAccordion .side-categories__item').removeClass('accordion__item');
            $('#sideCategoriesMobileAccordion .side-categories__title').removeClass('accordion__title');
            $('#sideCategoriesMobileAccordion .side-categories__text').removeClass('accordion__text');
            $('#sideCategoriesMobileAccordion .side-categories__text').css({ display: "block" });

            showMore.innerHTML = "Показывать на странице";

            for (let index = 0; index < catalogItem.length; index++) {
                const catalogItems = catalogItem[index];
                catalogItems.classList.remove('accordion__title');
            }
            $('.filter-catalog .accordion__text').css({ display: "block" });
        } else {
            $('#sideCategoriesMobileAccordion').addClass('accordion');
            $('#sideCategoriesMobileAccordion .side-categories__item').addClass('accordion__item');
            $('#sideCategoriesMobileAccordion .side-categories__title').addClass('accordion__title');
            $('#sideCategoriesMobileAccordion .side-categories__text').addClass('accordion__text');

            showMore.innerHTML = "Отображать товаров";

            for (let index = 0; index < catalogItem.length; index++) {
                const catalogItems = catalogItem[index];
                catalogItems.classList.add('accordion__title');
            }
        }
    }
    if (mediaQuery.matches) {
        $('#sideCategoriesMobileAccordion').removeClass('accordion');
        $('#sideCategoriesMobileAccordion .side-categories__item').removeClass('accordion__item');
        $('#sideCategoriesMobileAccordion .side-categories__title').removeClass('accordion__title');
        $('#sideCategoriesMobileAccordion .side-categories__text').removeClass('accordion__text');
        $('#sideCategoriesMobileAccordion .filter-catalog .accordion__text').css({ display: "block" });

        for (let index = 0; index < catalogItem.length; index++) {
            const catalogItems = catalogItem[index];
            catalogItems.classList.remove('accordion__title');
        }
    } else {
        showMore.innerHTML = "Отображать товаров";
    }
}); 