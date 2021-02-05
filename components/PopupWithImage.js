import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(link, name, popupSelector) {
        super(popupSelector);
        this._link = link;
        this._name = name;
    }

    open() {
        const photoPopupImage = this.popup.querySelector('.popup__picture_type_photo');
        const photoPopupTitle = this.popup.querySelector('.popup__text');
        photoPopupImage.src = this._link;
        photoPopupImage.alt = this._name;
        photoPopupTitle.textContent = this._name;
        super.open()
    }

    close() {
        super.close();
    }
}
