import { PopupWithImage } from './PopupWithImage.js';

export class Card {
    constructor(data, cardSelector) {
        this._link = data.link;
        this._name = data.name;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = this._cardSelector.content.cloneNode(true);
        return cardElement;
    }

    _handleCardClick() {
        const popupOpen = new PopupWithImage(this._link, this._name, '.popup_type_photo');
        popupOpen.setEventListeners();
        popupOpen.open()
    }

    _like(elem) {
        elem.classList.toggle('elements__vector_active');
    }

    _remove(elem) {
        const elementsRemove = elem.closest('.elements__container');
        elementsRemove.remove();
    }

    _setEventListener() {
        this._element.querySelector('.elements__vector').addEventListener('click',event => {
            this._like(event.target);
        });

        this._element.querySelector('.elements__remove').addEventListener('click', event => {
            this._remove(event.target);
        });

        this._image.addEventListener('click', () => {
            this._handleCardClick();
        })
    }

    generateCard() {
        this._element = this._getTemplate();
        this._image = this._element.querySelector('.elements__image');
        this._text = this._element.querySelector('.elements__text');
        this._setEventListener();

        this._image.src = this._link;
        this._image.alt = this._name;
        this._text.textContent = this._name;

        return this._element;
    }
}

