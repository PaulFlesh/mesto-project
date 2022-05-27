function popupToggleProfile() {
  let popup = document.querySelector('.popup-profile');
  popup.classList.toggle('popup_opened');
}

function popupTogglePlace() {
  let popup = document.querySelector('.popup-place');
  popup.classList.toggle('popup_opened');
}

let elementsContainer = document.querySelector('.elements');

function addPlace(placeName, placeImage) {
  const placeTemplate = document.querySelector('#element-template').content;
  const placeElement = placeTemplate.querySelector('.element').cloneNode(true);
  placeElement.querySelector('.element__name').textContent = placeName;
  placeElement.querySelector('.element__image').textContent = placeImage;
  placeElement.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
  songsContainer.append(songElement);
}

const addPlaceButton = container.querySelector('.form__submit-button_action_create');
addPlaceButton.addEventListener('click', function () {
  const placeName = document.querySelector('#element-title');
  const placeImage = document.querySelector('#element-image');
  addPlace(placeName.value, placeImage.value);
  //renderHasSongs();
  placeName.value = '';
  placeImage.value = '';
});