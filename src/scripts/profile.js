import { closePopup, avatarPopup, profilePopup } from "./modal.js";

const formAvatar = document.querySelector('[name="avatar-info"]');
export const avatarInput = document.querySelector('[name="profile-avatar"]');
export const avatar = window.getComputedStyle(document.querySelector('.profile__avatar'), ':before').getPropertyValue('background-image');

const formProfile = document.querySelector('[name="profile-info"]');
export const nameInput = document.querySelector('[name="profile-title"]');
export const jobInput = document.querySelector('[name="profile-subtitle"]');
export const profileName = document.querySelector('.profile__title');
export const profession = document.querySelector('.profile__subtitle');

function submitAvatarForm (evt) {
  evt.preventDefault();
  //avatar.style.backgroundImage = avatarInput.value;
  closePopup(avatarPopup);
}
formAvatar.addEventListener('submit', submitAvatarForm); 

function submitProfileForm (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profession.textContent = jobInput.value;
  closePopup(profilePopup);
}
formProfile.addEventListener('submit', submitProfileForm); 


