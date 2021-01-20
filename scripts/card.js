import { popupPhoto } from './popupPhoto.js';

export class Card {
    constructor(link, name) {
        this._link = link;
        this._name = name;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector('.elements-template')
            .content
            .cloneNode(true);

        return cardElement;
    }

    _handleOpenPopup() {
        const popupPhotoTmp = new popupPhoto(this._link, this._name);

        popupPhotoTmp.generatePopup();
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

        this._element.querySelector('.elements__image').addEventListener('click', () => {
            this._handleOpenPopup();
        })
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListener();

        this._element.querySelector('.elements__image').src = this._link;
        this._element.querySelector('.elements__text').textContent = this._name;

        return this._element;
    }
}

