import { tns } from "tiny-slider/src/tiny-slider"

export default class Sliders {
    constructor() {
        this.popularGoodsSlider = document.getElementById('popular-goods-slider');

        if(this.popularGoodsSlider) {

            tns({
                container: '#popular-goods-slider',
                items: 4,
                mouseDrag: true,
                nav: false,
                swipeAngle: false,
                speed: 400,
                gutter: 20,
                edgePadding: 0,
                controlsText: ['<i class="arrow-slider-left"></i>', '<i class="arrow-slider-right"></i>'],
                responsive: {
                    1200: {
                        items: 4,
                        edgePadding: 0,
                    },
                    992: {
                        items: 3,
                        edgePadding: 0,
                    },
                    575: {
                        items: 2,
                        edgePadding: 0,
                    },
                    320: {
                        gutter: 7,
                        edgePadding: 20,
                        items: 2,
                    },
                }
            });
        }
    }
}