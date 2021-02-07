export class UserInfo{
    constructor( { nameSelector, infoSelector }, popupSelector) {
        this.popup = document.querySelector(popupSelector);
        this._name = document.querySelector(nameSelector);
        this._info = document.querySelector(infoSelector);
    }

    close(){
        this.popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        });
    }

    getUserInfo(){
        const name = this._name.textContent;
        const info = this._info.textContent;
        const userInfo = {'name': name, 'info': info};
        return userInfo;
    }


    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    setUserInfo(name, info) {
        this._name .textContent = name;
        this._info.textContent = info;
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
