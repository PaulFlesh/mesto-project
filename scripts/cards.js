import { initialCards } from "./data.js";

export const elementsList = document.querySelector('.elements__list');
export const placeTemplate = document.querySelector('#element-template').content.querySelector('.element');

export const createCard = (data) => {
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

export const renderCard = (data, container) => {
  const place = createCard(data);
  container.append(place);
}

export function initiate() {
  initialCards.forEach(function(item) {
    renderCard(item, elementsList);
  });
}
