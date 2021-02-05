import { Popup } from "./Popup.js";

export class UserInfo extends Popup{
    constructor( { nameSelector, infoSelector }, popupSelector) {
        super(popupSelector);
        this._name = document.querySelector(nameSelector);
        this._info = document.querySelector(infoSelector);
    }

    getUserInfo(){
        const name = this._name.textContent;
        const info = this._info.textContent;
        const userInfo = {'name': name, 'info': info};
        return userInfo;
    }

    open(userInfo) {
        const popupName = this.popup.querySelector('.popup__input_type_name');
        const popupInfo = this.popup.querySelector('.popup__input_type_myself');
        popupName.value = userInfo.name;
        popupInfo.value = userInfo.info;
        super.open()
    }

    setUserInfo() {
        const popupName = this.popup.querySelector('.popup__input_type_name');
        const popupInfo = this.popup.querySelector('.popup__input_type_myself');
        this._name .textContent = popupName.value;
        this._info.textContent = popupInfo.value;
    }
}
