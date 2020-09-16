export default class ProductTab {

    constructor() {
        const productTabLinks = Array.from(document.querySelectorAll('.product-tab_links .product-tab_link'));
        const productTabMobileLinks = Array.from(document.querySelectorAll('.product-tab_block .product-tab_link'));

        if(productTabLinks) {
            this.handlerTab(productTabLinks)
        }

        if(productTabMobileLinks) {
            this.handlerMobileTab(productTabMobileLinks)
        }

        if(productTabLinks && productTabMobileLinks) {
            this.handlerResize(productTabLinks, productTabMobileLinks)
        }
    }

    handlerTab (productTabLinks) {
        const tabItems = Array.from(document.querySelectorAll('.product-tab_item'));

        productTabLinks.map((itemLink) => {

            itemLink.addEventListener('click', () => {
                const dataTab = itemLink.getAttribute('data-tab');
                const itemTabSelect = document.getElementById(dataTab);
                const tab = itemLink.closest('.product-tab');
                const tabBlock = Array.from(tab.querySelectorAll('.product-tab_block'));

                productTabLinks.map((item) => {
                    item.classList.remove('is-active');
                })

                tabItems.map((item) => {
                    item.classList.remove('is-active');
                })

                tabBlock.map((block) => {
                    const mobileLink = block.querySelector('.product-tab_link');
                    const mobileLinkData = mobileLink.getAttribute('data-tab');

                    if(mobileLinkData === dataTab) {
                        mobileLink.classList.add('is-active');
                    }
                })

                itemLink.classList.add('is-active');
                itemTabSelect.classList.add('is-active');
            })
        })
    }

    handlerMobileTab (productTabMobileLinks) {
        const tabItems = Array.from(document.querySelectorAll('.product-tab_item'));

        productTabMobileLinks.map((itemLink) => {

            itemLink.addEventListener('click', () => {
                 const dataTab = itemLink.getAttribute('data-tab');
                 const itemTabSelect = document.getElementById(dataTab);
                 const tab = itemLink.closest('.product-tab');
                 const tabLinks = Array.from(tab.querySelectorAll('.product-tab_links .product-tab_link'));

                tabLinks.map((link) => {
                    const linkData = link.getAttribute('data-tab');

                    if(linkData === dataTab) {
                        link.classList.toggle('is-active');
                    }
                })
                itemLink.classList.toggle('is-active');
                itemTabSelect.classList.toggle('is-active');
            })
        })
    }

    handlerResize (productTabLinks, productTabMobileLinks) {

        window.addEventListener('resize', ()=> {

            if(window.innerWidth > 575) {
                const dataTab = productTabLinks[0].getAttribute('data-tab');
                const itemTabSelect = document.getElementById(dataTab);

                productTabLinks[0].classList.add('is-active');
                itemTabSelect.classList.add('is-active');
            } else {
                productTabMobileLinks.map((itemLink) => {
                    const dataTab = itemLink.getAttribute('data-tab');
                    const itemTabSelect = document.getElementById(dataTab);
                    const tab = itemLink.closest('.product-tab');

                    itemLink.classList.remove('is-active');
                    itemTabSelect.classList.remove('is-active');
                })
            }
        })
    }
}