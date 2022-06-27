// Объявление констант профиля и формы добавления нового места
const formProfile = document.querySelector('[name="profile-info"]');
const nameInput = document.querySelector('[name="profile-title"]');
const jobInput = document.querySelector('[name="profile-subtitle"]');
const profileName = document.querySelector('.profile__title');
const profession = document.querySelector('.profile__subtitle');
const formImage = document.querySelector('[name="element-creation"]');

// Объявление модальных окон 
const profilePopup = document.querySelector('.popup_profile');
const placePopup = document.querySelector('.popup_place');

// Создание функций открытия/закрытия модальных окон профиля и нового места
const popupList = document.querySelectorAll('.popup');

const escapeFromModal = (evt) => {
  if (evt.key == 'Escape') {
    placePopup.classList.remove('popup_opened');
  }
};

const closeByOverlay = (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    placePopup.classList.remove('popup_opened');
  }
};

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  popup.addEventListener('keydown', escapeFromModal);
  popup.addEventListener('mousedown', closeByOverlay);
}
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('keydown', escapeFromModal);
  popup.removeEventListener('mousedown', closeByOverlay);
}

const openProfilePopup = () => openPopup(profilePopup);
const closeProfilePopup = () => closePopup(profilePopup);

const openPlacePopup = () => openPopup(placePopup);
const closePlacePopup = () => {
  closePopup(placePopup);
  formImage.reset();
};

document.querySelector('.profile__edit-button').addEventListener('click', openProfilePopup);
document.querySelector('.profile-close-btn').addEventListener('click', closeProfilePopup);

document.querySelector('.profile__add-button').addEventListener('click', openPlacePopup);
document.querySelector('.place-close-btn').addEventListener('click', closePlacePopup);

// Функция перезаписи информации профиля
function submitProfileForm (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
  profileName.textContent = nameInput.value;
  profession.textContent = jobInput.value;
  closeProfilePopup();
}
formProfile.addEventListener('submit', submitProfileForm); 

// Объявление констант окна картинок
const popupImage = document.querySelector('.popup_image');
const popupPic = popupImage.querySelector('.popup__pic');
const popupPicCaption = document.querySelector('.popup__pic-caption');

// Функция открытия окна с указанной картинкой (из массива)
const openImage = (data) => {
  popupPic.src = data.link;
  popupPicCaption.textContent = data.name;
  openPopup(popupImage);
  return data;
}

const closeImage = () => closePopup(popupImage);

document.querySelector('.image-close-btn').addEventListener('click', closeImage);

const placeTemplateName = document.querySelector('#element-title');
const placeTemplateImage = document.querySelector('#element-image');
const addPlaceButton = document.querySelector('.form__submit-button_create-element');

// Валидация кнопки нового места
function setSubmitButtonState (isFormValid) {
  if (isFormValid) {
    addPlaceButton.removeAttribute('disabled');
    addPlaceButton.classList.remove('form__submit-button_disabled');
  } else {
    addPlaceButton.setAttribute('disabled', true);
    addPlaceButton.classList.add('form__submit-button_disabled');
  }
}

// Функция создания карточки из модального окна
function addPlace (evt) {
  evt.preventDefault();
  const data = {
    name: placeTemplateName.value,
    link: placeTemplateImage.value    
  };
  const newCard = createCard(data);
  elementsList.prepend(newCard);
  setSubmitButtonState (false);
  closePlacePopup();
}
formImage.addEventListener('submit', addPlace);


const showError = (errorElement, inputElement, inputErrorClass) => {
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.add(inputErrorClass);
}

const hideError = (errorElement, inputElement, inputErrorClass) => {
  errorElement.textContent = inputElement.validationMessage;
  inputElement.classList.remove(inputErrorClass);
}

const checkInputValidity = (formElement, inputElement, config) => {
  const isInputNotValid = !inputElement.validity.valid;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  if(isInputNotValid) {
      showError(errorElement, inputElement, config);
  } else {
      hideError(errorElement, inputElement, config);
  }
}

const toggleButtonState = (button, isActive, inactiveButtonClass) => {
  if(isActive){
      button.classList.remove(inactiveButtonClass);
      button.disabled = false;
  } else {
      button.classList.add(inactiveButtonClass);
      button.disabled = 'disabled';
  }
}

const setEventListers = (formElement, {inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass }) => {
  const inputsList = formElement.querySelectorAll(inputSelector);
  const submitButton = formElement.querySelector(submitButtonSelector);

  Array.from(inputsList).forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      const isFormValid = formElement.checkValidity();
      checkInputValidity(formElement, inputElement, inputErrorClass);
      toggleButtonState(submitButton, isFormValid, inactiveButtonClass);
      });
  }); 
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
}

const enableValidation = ({formSelector, ...rest}) => {
  const forms = document.querySelectorAll(formSelector);
  Array.from(forms).forEach(formElement => {
    setEventListers(formElement, rest) 
  })
}

const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.form__submit-button',
  inactiveButtonClass: 'form__submit-button_disabled',
  inputErrorClass: 'form__item_type_error',
}

const {inputSelector, ...rest} = validationConfig;

enableValidation(validationConfig);
