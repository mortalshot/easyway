@@include('vendors.js');

$(document).ready(function () {
    $('#sideCategories-accordion .accordion__title:first').click();

    var priceSlider = document.querySelector('.price-filter');
    noUiSlider.create(priceSlider, {
        start: [0, 1000],
        connect: true,
        tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
        range: {
            'min': [0],
            'max': [1000]
        }
    });
}); 