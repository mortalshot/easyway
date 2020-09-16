export default class TableSize {
    constructor() {
        this.tableSizeLink = Array.from(document.querySelectorAll('.table-size-link'));
        this.tableSize = document.getElementById('product-table-size');
        this.tableSizeCloseBtn = this.tableSize.querySelector('.table-size_close');
        this.tableSizeTabLinks = Array.from(this.tableSize.querySelectorAll('.table-size_type__item'));
        this.tableSizeTabBlocks = Array.from(this.tableSize.querySelectorAll('.table-size_block'));

        if(this.tableSizeLink && this.tableSize && this.tableSizeCloseBtn && this.tableSizeTabLinks) {
            this.handler();
        }
    }

    handler() {

        this.tableSizeLink.map(link => {
            link.addEventListener('click', () => {
                this.tableSize.classList.add('is-open')
            })
        })

        this.tableSizeCloseBtn.addEventListener('click', () => {
            this.handlerCloseTableSize();
        })

        this.tableSize.addEventListener('click', e => {
            if(e.target === this.tableSize) {
                this.handlerCloseTableSize();
            }
        })

        this.tableSizeTabLinks.map(tabLink => {

            tabLink.addEventListener('click', () => {
                if(!tabLink.classList.contains('is-active')) {
                    const selectBlock = document.getElementById(tabLink.getAttribute('data-type'));
                    this.tableSizeTabLinks.map(link => {
                        link.classList.remove('is-active')
                    })

                    this.tableSizeTabBlocks.map(block => {
                        block.classList.remove('is-active')
                    })

                    tabLink.classList.add('is-active');
                    selectBlock.classList.add('is-active');
                }
            })
        })
    }

    handlerCloseTableSize () {
        this.tableSize.classList.remove('is-open')
    }
}