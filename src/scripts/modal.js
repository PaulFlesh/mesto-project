import { avatarInput, nameInput, jobInput, avatar, profileName, profession } from "./profile.js";
import { hideError } from "./validation.js";
import { getUserInfo } from "./api.js";

export const avatarPopup = document.querySelector('.popup_avatar');
export const profilePopup = document.querySelector('.popup_profile');
export const placePopup = document.querySelector('.popup_place');
const popupOpened = document.querySelector('.popup_opened');

const escapeFromModal = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

const closeByOverlay = (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
};

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', closeByOverlay);
  document.addEventListener('keydown', escapeFromModal);
}
export const closePopup = (popup) => {
  document.removeEventListener('keydown', escapeFromModal);
  popup.removeEventListener('mousedown', closeByOverlay);
  popup.classList.remove('popup_opened');
}

const openAvatarPopup = () => {
  hideError();
  getUserInfo()
  .then((dataFromServer) => {
    avatarInput.value = dataFromServer.avatar;
    openPopup(avatarPopup);
    //disableButton(buttonAvatarPopup, validationConfig);
  })
  .catch(err => console.log(err))
};
const openProfilePopup = () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profession.textContent;
  openPopup(profilePopup);
};
const openPlacePopup = () => openPopup(placePopup);

document.querySelector('.profile__avatar').addEventListener('click', openAvatarPopup);
document.querySelector('.profile__edit-button').addEventListener('click', openProfilePopup);
document.querySelector('.profile__add-button').addEventListener('click', openPlacePopup);

const popupImage = document.querySelector('.popup_image');
const popupPic = popupImage.querySelector('.popup__pic');
const popupPicCaption = document.querySelector('.popup__pic-caption');

export const openImage = (data) => {
  popupPic.src = data.link;
  popupPic.alt = data.name;
  popupPicCaption.textContent = data.name;
  openPopup(popupImage);
  return data;
}

const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  });
});