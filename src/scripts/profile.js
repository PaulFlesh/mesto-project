import { closePopup, avatarPopup, profilePopup } from "./modal.js";
import { patchUserInfo, renderLoading } from "./api.js";

const formAvatar = document.querySelector('[name="avatar-info"]');
export const avatarInput = document.querySelector('[name="profile-avatar"]');
//const avatarUrl = window.getComputedStyle(document.querySelector('.profile__avatar'), ':before').style.backgroundImage;
//export const avatar = avatarUrl.replace(/(url\(|\)|")/g, '');
export const avatar = window.getComputedStyle(document.querySelector('.profile__avatar'), ':before').getPropertyValue('background-image');

const formProfile = document.querySelector('[name="profile-info"]');
export const nameInput = document.querySelector('[name="profile-title"]');
export const jobInput = document.querySelector('[name="profile-subtitle"]');
export const profileName = document.querySelector('.profile__title');
export const profession = document.querySelector('.profile__subtitle');

function submitAvatarForm (evt) {
  evt.preventDefault();
  //avatar = avatarInput.value;
  avatar = `url(${avatarInput.value})`;
  closePopup(avatarPopup);
}
formAvatar.addEventListener('submit', submitAvatarForm); 

/* Оригинал
function submitProfileForm (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profession.textContent = jobInput.value;
  closePopup(profilePopup);
}
*/

// Тест
function submitProfileForm (evt) {
  //renderLoading(true);
  const title = nameInput.value;
  const subtitle = jobInput.value;
  //const { title, subtitle } = evt.currentTarget.elements;
  patchUserInfo({
    title: title.value,
    body: subtitle.value
  })
  closePopup(profilePopup);
}
formProfile.addEventListener('submit', submitProfileForm);