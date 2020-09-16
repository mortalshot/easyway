let select = function () {
    let selectHeader = document.querySelectorAll('.custom-select');
    let selectItem = document.querySelectorAll('.custom-options__option');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.classList.toggle('open');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.custom-select'),
            currentText = select.querySelector('.custom-select__trigger span');
        currentText.innerText = text;

        let options = this.closest('.custom-options');
        let option = options.querySelectorAll('.custom-options__option');

        for (let index = 0; index < option.length; index++) {
            const element = option[index];
            element.classList.remove('selected');
        }

        this.classList.add("selected");
    }
};

select();