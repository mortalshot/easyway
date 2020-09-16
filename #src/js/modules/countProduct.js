export default class CountProduct {
    constructor() {
        const countBlocks = Array.from(document.querySelectorAll('.product-count'));

        if(countBlocks) {
            this.handler(countBlocks)
        }
    }

    handler(countBlocks) {

        countBlocks.map((block) => {
            const sub = block.querySelector('.product-count_sub');
            const add = block.querySelector('.product-count_add');
            const input = block.querySelector('.product-count_field');

            sub.addEventListener('click', () => {
                if(Number(input.value) !== 1) {
                    console.log(input.value)
                    input.stepDown()
                }
            })

            add.addEventListener('click', () => {
                input.stepUp()
            })
        })
    }
}