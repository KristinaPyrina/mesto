export const validationConfig = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__input_state_invalid'
};

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

    _showError(form, input) {
        const error = form.querySelector(`#${input.id}-error`);
        input.classList.add(this._inputErrorClass);
        error.textContent = input.validationMessage;
    }

    _hideError(form, input) {
        const error = form.querySelector(`#${input.id}-error`);
        input.classList.remove(this._inputErrorClass);
        error.textContent = "";
    }

    _checkInputValidity(form, input) {
        if (input.validity.valid) {
            this._hideError(form, input);
        } else {
            this._showError(form, input);
        }
    };

    _setButtonState(isActive, button) {
        if (isActive) {
            button.classList.remove(this._inactiveButtonClass);
            button.disabled = false;
        } else {
            button.classList.add(this._inactiveButtonClass);
            button.disabled = true;
        }
    }

    _setEventListener(form) {
        this._inputList.forEach(input => {
            input.addEventListener('input', (evt) => {
                this._checkInputValidity(form, input);
                this._setButtonState(form.checkValidity(), this._submitButton );
            });
        });
    }

    enableValidation() {
            this._setEventListener(this._form);

            this._form.addEventListener('submit', (evt) => {
                evt.preventDefault();
            });
    }

    resetValidation() {
        this._inputList.forEach(input => {
                this._checkInputValidity(this._form, input);
            });
    }

    checkButtonState() {
        this._setButtonState(this._form.checkValidity(), this._submitButton );
    }
}



