export class popupPhoto {
    constructor(image, text) {
        this._image = image;
        this._text = text;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector('.popup_type_photo');

        return cardElement;
    }

    _openPopup() {
        this._element.classList.add('popup_opened');
        document.addEventListener('keydown', event => {
            this._closeByEscape(event)
        });
    }

    _closePopup() {
        this._element.classList.remove('popup_opened');
        document.removeEventListener('keydown', event => {
            this._closeByEscape(event)
        });
    }

    _closeByEscape(event) {
        if (event.key === 'Escape') {
            this._closePopup();
        }
    }

    _setEventListener() {
        this._element.querySelector('.popup__close').addEventListener('click', () => {
            this._closePopup();
        });
    }

    generatePopup() {
        this._element = this._getTemplate();

        this._element.querySelector('.popup__picture').src = this._image;
        this._element.querySelector('.popup__text').textContent = this._text;
        this._setEventListener();
        this._openPopup();

        return this._element;
    }
}

