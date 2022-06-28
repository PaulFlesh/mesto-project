import { initialCards } from "./data.js";
import { openImage } from "./modal.js";
import { toggleButtonState } from "./validation.js";

const formPlace = document.querySelector('[name="element-creation"]');
const elementsList = document.querySelector('.elements__list');
const placeTemplate = document.querySelector('#element-template').content.querySelector('.element');
const placeTemplateName = document.querySelector('#element-title');
const placeTemplateImage = document.querySelector('#element-image');
const addPlaceButton = document.querySelector('.form__submit-button_create-element');

const createCard = (data) => {
  const placeElement = placeTemplate.cloneNode(true);
  const placeName = placeElement.querySelector('.element__name');
  const placeImage = placeElement.querySelector('.element__image');
  const placeBin = placeElement.querySelector('.element__bin');
  const placeLike = placeElement.querySelector('.element__like');
  placeName.textContent = data.name;
  placeImage.src = data.link;
  placeImage.alt = data.name;
  placeImage.addEventListener('click', () => openImage(data));
  const removePlace = () => placeElement.remove();
  placeBin.addEventListener('click', () => removePlace());
  const toggleLike = () => placeLike.classList.toggle('element__like_active');
  placeLike.addEventListener('click', () => toggleLike());
  return placeElement;
}

// Кладем карточку в начало списка
const renderCard = (data, container) => {
  const place = createCard(data);
  container.append(place);
}

// Раскладываем карточки из исходного массива
initialCards.forEach(function(item) {
  renderCard(item, elementsList);
});

// Функция создания карточки из модального окна
function addPlace (evt) {
  evt.preventDefault();
  const data = {
    name: placeTemplateName.value,
    link: placeTemplateImage.value    
  };
  const newCard = createCard(data);
  elementsList.prepend(newCard);
  toggleButtonState (); ////
  formPlace.reset();
  closePlacePopup();
}
formPlace.addEventListener('submit', addPlace);