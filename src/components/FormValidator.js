export default class FormValidator {
  constructor(validationConfig, formElement) {
    this._validationConfig = validationConfig;
    this._formElement = formElement;
    this._formSelector = validationConfig.formSelector;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._validationConfig.inputSelector)
    );
  }
  _showInputError(inputElement, errorMessage) {
    this._errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._validationConfig.inputErrorClass);
    this._errorElement.textContent = errorMessage;
  }
  _hideInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._validationConfig.inputErrorClass);
    this._errorElement.textContent = "";
  }
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }
  _disableButton() {
    this._buttonElement.classList.add(
      this._validationConfig.inactiveButtonClass
    );
    this._buttonElement.setAttribute("disabled", true);
  }
  _activateButton() {
    this._buttonElement.classList.remove(
      this._validationConfig.inactiveButtonClass
    );
    this._buttonElement.removeAttribute("disabled");
  }
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._disableButton();
    } else {
      this._activateButton();
    }
  }
  _setEventListeners() {
    this._buttonElement = this._formElement.querySelector(
      this._validationConfig.submitButtonSelector
    );
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
    this._formElement.addEventListener('reset', () => {
      this._disableButton();
      this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement)
      })
    });
  }
  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
