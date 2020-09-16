export default class Selector {
    constructor () {
        this.doc = document;
        this.body = this.doc.querySelector('body');
        this.selectors = this.doc.querySelectorAll('.selector');
        this.selectorVals = this.doc.querySelectorAll('.selector_val');
        this.selectorItems = this.doc.querySelectorAll('.selector_list li');
        this.selectorSearchFiles = this.doc.querySelectorAll('.selector_search');

        if(this.selectors) {
            this.handlerPre(this.selectors);
        }

        if(this.selectorVals) {
            this.handlerSelectClick(this.selectorVals);
        }

        if(this.selectorItems){
            this.handlerSelectItem(this.selectorItems);
        }

        if(this.selectorSearchFiles) {
            this.handlerSearch(this.selectorSearchFiles)
        }

        if(this.body) {
            this.handlerCloseMissClick(this.body)
        }
    }

    handlerCloseMissClick(body) {

        body.addEventListener('click', (event)=> {

            const showSelectors = Array.from(document.querySelectorAll('.selector.show-list'))

            showSelectors.map((showSelector)=> {
                const selectorVal = showSelector.querySelector('.selector_val')
                if(event.target !== showSelector && event.target !== selectorVal) {
                    showSelector.classList.remove('show-list');
                }
            })

        })
    }

    handlerPre (selectors) {

        for(let selector of selectors) {
            const input = selector.querySelector('.selector_input');
            const inputVal = input.value;
            const listItems = selector.querySelectorAll('.selector_drop li');
            const selectorVal = selector.querySelector('.selector_val');
            let currentItem = '';
            let currentItemText = '';

            input.addEventListener('change', () => {
                if(input.value) {
                    selector.classList.add('no-empty');
                } else {
                    selector.classList.remove('no-empty');
                }
            })


            for(let listItem of listItems) {
                listItem.classList.remove('is-active');

                if(listItem.getAttribute('data-val') === inputVal) {
                    currentItem = listItem;
                    currentItemText = currentItem.innerHTML;
                    currentItem.classList.add('is-active');
                    selectorVal.innerHTML = currentItemText;
                    selectorVal.setAttribute('data-val', inputVal);
                }
            }
        }
    }

    handlerSelectClick (selectorVals) {

        for(let selectorVal of selectorVals) {

            selectorVal.addEventListener('click', ()=> {
                selectorVal.closest('.selector').classList.toggle('show-list');
            })
        }
    }

    handlerSelectItem (selectorItems) {

        for(let item of selectorItems) {

            item.addEventListener('click', ()=> {

                const dataVal = item.getAttribute('data-val');
                const input = item.closest('.selector').querySelector('.selector_input');
                const selectorVal = item.closest('.selector').querySelector('.selector_val');
                const itemText = item.innerHTML;

                input.dispatchEvent(new Event('change'));
                input.value = dataVal;
                item.closest('.selector').classList.remove('show-list');

                for(let li of selectorItems) {
                    li.classList.remove('is-active');
                }

                selectorVal.innerHTML = itemText;
                selectorVal.setAttribute('data-val', dataVal);
            })
        }
    }

    handlerSearch (selectorSearchFiles) {

        for(let search of selectorSearchFiles) {

            search.addEventListener('input', ()=> {
                const selector = search.closest('.selector');
                const key = search.value.toLowerCase();
                const selectorItems = selector.querySelectorAll('.selector_list li');

                if(key.length){

                    for (let item of selectorItems) {
                        const lowerItem = item.innerHTML.toLowerCase();

                        if(lowerItem.indexOf(key) === 0) {
                            item.classList.remove('is-hidden');
                        } else {
                            item.classList.add('is-hidden');
                        }
                    }
                } else {

                    for (let item of selectorItems) {
                        item.classList.remove('is-hidden');
                    }
                }
            })
        }
    }
}