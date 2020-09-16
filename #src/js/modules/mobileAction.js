export default class MobileAction {
    constructor() {
        const actionCancel = document.querySelector('.mobile-action_cancel');

        if(actionCancel) {
            this.handlerCancel(actionCancel)
        }
    }

    handlerCancel (actionCancel) {

        actionCancel.addEventListener('click', () => {
            const mobileActionBlock = actionCancel.closest('.mobile-action');
            mobileActionBlock.classList.remove('is-show');
        })
    }
}