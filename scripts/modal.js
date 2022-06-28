// Объявление модальных окон 
const profilePopup = document.querySelector('.popup_profile');
const placePopup = document.querySelector('.popup_place');

// Создание функций открытия/закрытия модальных окон профиля и нового места
const popupOpened = document.querySelector('.popup_opened');

const escapeFromModal = (evt) => {
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(popupOpened);
  }
}
document.addEventListener('keydown', escapeFromModal);

const closeByOverlay = (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    evt.target.classList.remove('popup_opened');
  }
};

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', closeByOverlay);
}
const closePopup = (popup) => {
  popup.removeEventListener('mousedown', closeByOverlay);
  popup.classList.remove('popup_opened');
}


const openProfilePopup = () => openPopup(profilePopup);
const closeProfilePopup = () => closePopup(profilePopup);

const openPlacePopup = () => openPopup(placePopup);
const closePlacePopup = () => closePopup(placePopup);

document.querySelector('.profile__edit-button').addEventListener('click', openProfilePopup);
document.querySelector('.profile-close-btn').addEventListener('click', closeProfilePopup);

document.querySelector('.profile__add-button').addEventListener('click', openPlacePopup);
document.querySelector('.place-close-btn').addEventListener('click', closePlacePopup);

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