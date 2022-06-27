// Объявление констант профиля и формы добавления нового места
const formProfile = document.querySelector('[name="profile-info"]');
const nameInput = document.querySelector('[name="profile-title"]');
const jobInput = document.querySelector('[name="profile-subtitle"]');
const profileName = document.querySelector('.profile__title');
const profession = document.querySelector('.profile__subtitle');


// Объявление модальных окон 
const profilePopup = document.querySelector('.popup_profile');
const placePopup = document.querySelector('.popup_place');

// Создание функций открытия/закрытия модальных окон профиля и нового места
const popupList = document.querySelectorAll('.popup');

const escapeFromModal = (evt) => {
  if (evt.key == 'Escape') {
    Array.from(popupList).forEach(popup => {
      popup.classList.remove('popup_opened');
    });
    console.log(evt.key);
  }
};
/*
Array.from(inputsList).forEach(inputElement => {
  inputElement.addEventListener('input', () => {
      const isFormValid = formElement.checkValidity();
      checkInputValidity(formElement, inputElement, inputErrorClass)
      toggleButtonState(submitButton, isFormValid, inactiveButtonClass)
  })
})
*/
const closeByOverlay = (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    evt.target.classList.remove('popup_opened');
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
const closePlacePopup = () => closePopup(placePopup);

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
