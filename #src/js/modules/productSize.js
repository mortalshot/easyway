export default class ProductSize {
    constructor() {
        const sizeItems = Array.from(document.querySelectorAll('.product-size_item'));

        if (sizeItems) {
            this.handler(sizeItems)
        }
    }

    handler(sizeItems) {

        sizeItems.map(size => {

            if (!size.classList.contains('is-disabled')) {
                size.addEventListener('click', () => {

                    sizeItems.map(item => {
                        item.classList.remove('is-active');
                    })

                    size.classList.add('is-active')

                })
            }
        })
    }
}