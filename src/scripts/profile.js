import { closePopup, avatarPopup, profilePopup } from "./modal.js";
import { editProfile, editAvatar, renderLoading } from "./api.js";

const formAvatar = document.querySelector('[name="avatar-info"]');
export const avatarInput = document.querySelector('[name="profile-avatar"]');
export const avatarOnPage = document.querySelector('.profile__avatar-icon').src;
const buttonAvatarPopup = document.querySelector('.form__submit-button_edit-avatar');
const buttonNamePopup = document.querySelector('.form__submit-button_edit-profile');

const formProfile = document.querySelector('[name="profile-info"]');
export const nameInput = document.querySelector('[name="profile-title"]');
export const jobInput = document.querySelector('[name="profile-subtitle"]');
export const profileName = document.querySelector('.profile__title');
export const profession = document.querySelector('.profile__subtitle');

function submitAvatarForm (evt) {
  evt.preventDefault();
  editAvatar({ avatar: avatarInput.value })
  .then((dataFromServer) => {
    dataFromServer.avatar = avatarInput.value;
  })
  .then(() => {
    closePopup(avatarPopup);
  })
  .catch(err => console.log(err));
  /*
  .finally(() => {
    renderLoading(buttonNamePopup, false);
  })
  */
  console.log(`До редактирования avatar: ${avatarOnPage}`);
  avatarOnPage = avatarInput.value;
  console.log(`После редактирования avatar: ${avatarOnPage}`);
  closePopup(avatarPopup);
}
formAvatar.addEventListener('submit', submitAvatarForm); 

// Работает!
function submitProfileForm (evt) {
  evt.preventDefault();
  //renderLoading(true);
  editProfile({ name: nameInput.value, about: jobInput.value })
  .then((dataFromServer) => {
    dataFromServer.name = nameInput.value;
    dataFromServer.about = jobInput.value;
  })
  .then(() => {
    closePopup(profilePopup);
  })
  .catch(err => console.log(err));
  /*
  .finally(() => {
    renderLoading(buttonNamePopup, false);
  })
  */
  profileName.textContent = nameInput.value;
  profession.textContent = jobInput.value;
  closePopup(profilePopup);
}
formProfile.addEventListener('submit', submitProfileForm);