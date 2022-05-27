function popupToggleProfile() {
  let popup = document.querySelector('.popup-profile');
  popup.classList.toggle('popup_opened');
}

function popupTogglePlace() {
  let popup = document.querySelector('.popup-place');
  popup.classList.toggle('popup_opened');
}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

let elementsList = document.querySelector('.elements__list');

function generatePlaces() {
  const placeTemplate = document.querySelector('#element-template').content;
  const placeElement = placeTemplate.querySelector('.element').cloneNode(true);
  for (i = 0; i < initialCards.length; i++) {
    placeElement.querySelector('.element__name').textContent = placeName;
    placeElement.querySelector('.element__image').src = placeImage;
    placeElement.querySelector('.element__image').alt = placeName;
    placeElement.querySelector('.element__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like_active');
    });
    elementsList.appendChild(placeElement);
  };
}

function addPlace(placeName, placeImage) {
  const placeTemplate = document.querySelector('#element-template').content;
  const placeElement = placeTemplate.querySelector('.element').cloneNode(true);
  placeElement.querySelector('.element__name').textContent = placeName;
  placeElement.querySelector('.element__image').src = placeImage;
  placeElement.querySelector('.element__image').alt = placeName;
  placeElement.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
  elementsList.prependChild(placeElement);
}

const addPlaceButton = document.querySelector('.form__submit-button_create-element');
addPlaceButton.addEventListener('click', function () {
  const placeName = document.querySelector('#element-title');
  const placeImage = document.querySelector('#element-image');
  addPlace(placeName.value, placeImage.value);
  placeName.value = '';
  placeImage.value = '';
  popupTogglePlace();
});
