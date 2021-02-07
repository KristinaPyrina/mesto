import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(link, name) {
        const photoPopupImage = this.popup.querySelector('.popup__picture_type_photo');
        const photoPopupTitle = this.popup.querySelector('.popup__text');
        photoPopupImage.src = link;
        photoPopupImage.alt = name;
        photoPopupTitle.textContent = name;
        super.open()
    }

    close() {
        super.close();
    }
}
