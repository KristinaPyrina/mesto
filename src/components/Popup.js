export class Popup {
    constructor(popupSelector) {
        this.popup = document.querySelector(popupSelector);
    }

    open(){
        this.popup.classList.add('popup_opened');
        this._handleEscClose();
    }

    close(){
        this.popup.classList.remove('popup_opened');
    }

    _handleEscClose(){
        document.addEventListener('keydown', (evt) => {
            if (evt.key === 'Escape') {
                this.close();
            }
        })
    }

    setEventListeners() {
        this.popup.querySelector('.popup__close').addEventListener('click', () => {
            this.close();
        });

        this.popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close();
            }
            if (evt.target.classList.contains('popup__close')) {
                this.close();
            }
        });
    }
}
