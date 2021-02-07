export class FormValidator {
    constructor(config, currentForm) {
        this._form = currentForm;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._inputList = this._form.querySelectorAll(this._inputSelector);
        this._submitButton = this._form.querySelector(this._submitButtonSelector);
    }

    _showError(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        input.classList.add(this._inputErrorClass);
        error.textContent = input.validationMessage;
    }

    _hideError(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        input.classList.remove(this._inputErrorClass);
        error.textContent = "";
    }

    _checkInputValidity(input) {
        if (input.validity.valid) {
            this._hideError(input);
        } else {
            this._showError(input);
        }
    };

    _setButtonState(isActive) {
        if (isActive) {
            this._submitButton.classList.remove(this._inactiveButtonClass);
            this._submitButton.disabled = false;
        } else {
            this._submitButton.classList.add(this._inactiveButtonClass);
            this._submitButton.disabled = true;
        }
    }

    _setEventListener() {
        this._inputList.forEach(input => {
            input.addEventListener('input', (evt) => {
                this._checkInputValidity(input);
                this._setButtonState(this._form.checkValidity());
            });
        });
    }

    enableValidation() {
            this._setEventListener();

            this._form.addEventListener('submit', (evt) => {
                evt.preventDefault();
            });
    }

    resetValidation() {
        this._inputList.forEach(input => {
                this._checkInputValidity(input);
            });
    }

    checkButtonState() {
        this._setButtonState(this._form.checkValidity(), this._submitButton );
    }
}



