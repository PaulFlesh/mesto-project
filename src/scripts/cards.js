import { getUserInfo, closePopup, placePopup, userId } from "./api.js";
import { openImage, closePopup, placePopup } from "./modal.js";

const formPlace = document.querySelector('[name="element-creation"]');
export const elementsList = document.querySelector('.elements__list');
export const placeTemplate = document.querySelector('#element-template').content.querySelector('.element');
const placeTemplateName = document.querySelector('#element-title');
const placeTemplateImage = document.querySelector('#element-image');
//const addPlaceButton = document.querySelector('.form__submit-button_create-element');

export const createCard = (data) => {
  const placeElement = placeTemplate.cloneNode(true);
  const placeName = placeElement.querySelector('.element__name');
  const placeImage = placeElement.querySelector('.element__image');
  const placeBin = placeElement.querySelector('.element__bin');
  const placeLike = placeElement.querySelector('.element__like');
  const likeCounter = placeElement.querySelector('.element__like-count');
  placeName.textContent = data.name;
  placeImage.src = data.link;
  placeImage.alt = data.name;
  likeCounter.textContent = data.likes.length;

  getUserInfo()
  .then((dataFromServer) => {
    if (data.owner._id === dataFromServer._id) {
      placeBin.style.display = 'block';
    }
  })
  .catch(err => console.log(err))

  placeImage.addEventListener('click', () => openImage(data));
  const removePlace = () => placeElement.remove();
  placeBin.addEventListener('click', () => removePlace());
  const toggleLike = () => placeLike.classList.toggle('element__like_active');
  placeLike.addEventListener('click', () => toggleLike());
  return placeElement;
}

export const renderCard = (data, container, userId) => {
  const place = createCard(data, userId);
  container.append(place);
}
/*
function addPlace (evt) {
  //renderLoading(buttonPostPopup, true);
  const data = {
    name: placeTemplateName.value,
    link: placeTemplateImage.value    
  };
  //
  const newCard = createCard(data);
  elementsList.prepend(newCard);
  formPlace.reset();
  const submitButton = formPlace.querySelector('.form__submit-button_create-element');
  submitButton.classList.add('form__submit-button_disabled');
  submitButton.disabled = 'disabled';
  closePopup(placePopup);
}
formPlace.addEventListener('submit', addPlace);
*/
function addPlace (evt) {
  //renderLoading(buttonPostPopup, true);
  createCard({name: inputPlaceTitle.value, link: inputPlaceSubtitle.value})
  .then((dataFromServer) => {
    renderCard(dataFromServer, elementsList, userId);
  })
  .catch(err => console.log(err))
  /*
  .finally(() => {
    renderLoading(buttonPostPopup, false);
  })
  */
  formPlace.reset();
  //disableButton(buttonPostPopup, validationConfig);
  closePopup(placePopup);
}
formPlace.addEventListener('submit', addPlace);