import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, { usage }) {
        super(popupSelector);
        this._usage = usage;
    }

    _getInputValues() {
        const inputText = this.popup.querySelector('.popup__input_type_edit');
        const inputLink = this.popup.querySelector('.popup__input_type_image');
        const responseForm = {'name': inputText.value, 'link': inputLink.value};
        return responseForm;
    }

    close() {
        const formAdd  = this.popup.querySelector('.popup__form_type_add');
        formAdd.reset();
        super.close();
    }

    setEventListeners() {
        this.popup.querySelector('.popup__form_type_add').addEventListener('submit', (event) => {
            this._usage(event);
            this.close()
        });
        super.setEventListeners()
    }
}
