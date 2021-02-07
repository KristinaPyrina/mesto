export class Popup {
    constructor(popupSelector) {
        this.popup = document.querySelector(popupSelector);
    }

    open(){
        this.popup.classList.add('popup_opened');
    }

    close(){
        this.popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        });
    }

    _handleEscClose(evt){
            if (evt.key === 'Escape') {
                this.close();
            }
        }

    setEventListeners() {
        this.popup.querySelector('.popup__close').addEventListener('click', () => {
            this.close();
        });

        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        });

        this.popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close();
            }
        });
    }
}
