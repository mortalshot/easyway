export default class ProductCardAdd {
    constructor() {
        this.productCardOrderBtns = Array.from(document.querySelectorAll('.product-card_order'));

        if(this.productCardOrderBtns) {
            this.handler();
        }
    }

    handler() {

        this.productCardOrderBtns.map(btn => {
            const productCartAction = btn.closest('.product-card_action');

            btn.addEventListener('click', () => {
                productCartAction.classList.add('show-size');
            })
        })

        document.addEventListener('click', e => {

            if(!e.target.closest('.product-card_order')) {
                this.productCardOrderBtns.map(btn => {
                    const productCartAction = btn.closest('.product-card_action');
                    productCartAction.classList.remove('show-size');
                })
            }
        });
    }
}