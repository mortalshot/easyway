$(document).ready(function () {
    mediaQueryMdMin = window.matchMedia('(min-width: 768px)');
    mediaQueryMdMin.addListener(handleTabletChange);
    function handleTabletChange(e) {
        if (e.matches) {
            $(".basket_list").niceScroll({
                cursorwidth: "8px",
                cursorborderradius: "5px",
                cursorcolor: "#8D8F9A",
            });
            $(".summary-cart__products-wrapper").niceScroll({
                cursorwidth: "8px",
                cursorborderradius: "5px",
                cursorcolor: "#8D8F9A",
            });
        }
    }
})