export default class Basket {
    constructor() {
        this.basketBtn = Array.from(document.querySelectorAll('.basket-btn'));
        this.basketBtnClose = document.querySelector('.basket_close');
        this.basket = document.getElementById('product-basket');

        if(this.basketBtn && this.basket && this.basketBtnClose) {
            this.handler()
        }
    }

    handler () {

        this.basketBtn.map(btn => {

            btn.addEventListener('click', () => {
                this.basket.classList.add('is-open');
            })
        })

        this.basket.addEventListener('click', e => {
            if(e.target === this.basket) {
                this.handlerClose()
            }
        })

        this.basketBtnClose.addEventListener('click', () => {
            this.handlerClose();
        })
    }

    handlerClose () {
        this.basket.classList.remove('is-open');
    }
}