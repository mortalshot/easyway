import { tns } from "tiny-slider/src/tiny-slider"

export default class ProductGallery {
    constructor() {
        const galleryBlocks = Array.from(document.querySelectorAll('.product-gallery'));
        const gallerySlider = document.getElementById('product-gallery');

        if(galleryBlocks) {
            //this.handler(galleryBlocks)
        }

        if(gallerySlider) {
            this.handlerMobile();
        }
    }

    handler (galleryBlocks) {

        galleryBlocks.map((gallery) => {
            const gallerySelectImg = gallery.querySelector('.product-gallery_select__img');
            const galleryPhotos = Array.from(gallery.querySelectorAll('.product-gallery_item'));

            galleryPhotos.map((photo) => {

                photo.addEventListener('click', () => {
                    const imgUrl = photo.querySelector('img').getAttribute('src');

                    galleryPhotos.map((item) => {
                        item.classList.remove('is-active');
                    })

                    photo.classList.add('is-active');
                    gallerySelectImg.setAttribute('src', imgUrl)
                })
            })
        })
    }
    handlerMobile() {

        let productSlider;

        if(window.innerWidth < 576) {
            productSlider = tns({
                container: '#product-gallery',
                items: 1,
                mouseDrag: true,
                nav: true,
                controls: false,
                swipeAngle: false,
                speed: 400,
            });
        }

        window.addEventListener('resize', ()=> {
            if(window.innerWidth > 575) {

                if(productSlider && productSlider.version){
                    productSlider.destroy();
                }

            } else {

                if(!(productSlider && productSlider.version)) {
                    productSlider = tns({
                        container: '#product-gallery',
                        items: 1,
                        mouseDrag: true,
                        nav: true,
                        controls: false,
                        swipeAngle: false,
                        speed: 400,
                    });
                }
            }
        })
    }
}