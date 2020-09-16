export default class ColorChange {
    constructor() {
        const colorBlocks = Array.from(document.querySelectorAll('.product-color'));

        if(colorBlocks) {
            this.handler(colorBlocks)
        }
    }

    handler (colorBlocks) {

        colorBlocks.map((block) =>{

            const colors = Array.from(block.querySelectorAll('.product-color_item'));

            colors.map((color) => {

                color.addEventListener('click', () => {

                    colors.map((item) => {
                        item.classList.remove('is-active')
                    })

                    color.classList.add('is-active')
                })
            })
        })
    }
}