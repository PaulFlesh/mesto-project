import { closePopup, profilePopup } from "./modal.js";

const formProfile = document.querySelector('[name="profile-info"]');
export const nameInput = document.querySelector('[name="profile-title"]');
export const jobInput = document.querySelector('[name="profile-subtitle"]');
export const profileName = document.querySelector('.profile__title');
export const profession = document.querySelector('.profile__subtitle');

function submitProfileForm (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profession.textContent = jobInput.value;
  closePopup(profilePopup);
}
formProfile.addEventListener('submit', submitProfileForm); 


