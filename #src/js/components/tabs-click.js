$(document).ready(function () {
    $('#sizeTabsMain .table-size__trigger-item:first').click();
    $('#sizeTabsSub .tabs-triggers__item:first').click();
    $('#articlePageTabs .tabs-triggers__item:first').click();
    $('#helpTabs .tabs-triggers__item:first').click();
    
    $('#mobileMenuTabs .tabs-triggers__item').removeClass('tabs-triggers__item--active');
    $('#mobileMenuTabs .tabs-content__item').removeClass('tabs-content__item--active');

    $('#headerMobileCategoriesTabs .side-categories__tabs-title').removeClass('tabs-triggers__item--active');
    $('#headerMobileCategoriesTabs .side-categories__tabs-content-item').removeClass('tabs-content__item--active');

}); 