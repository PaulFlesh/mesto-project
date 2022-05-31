// Переключашка попапа профиля
function popupToggleProfile() {
  const popup = document.querySelector('.popup-profile');
  popup.classList.toggle('popup_opened');
}
// Нового места
function popupTogglePlace() {
  const popup = document.querySelector('.popup-place');
  popup.classList.toggle('popup_opened');
}
// И картинки
function popupToggleImage() {
  const popup = document.querySelector('.popup-image');
  popup.classList.toggle('popup_opened');
}

// Редактирование профиля через кнопку
const formElement = document.querySelector('[name="profile-info"]');
const nameInput = document.querySelector('[name="profile-title"]');
const jobInput = document.querySelector('[name="profile-subtitle"]');
const profileName = document.querySelector('.profile__title');
const profession = document.querySelector('.profile__subtitle');

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
    profileName.textContent = nameInput.value;
    profession.textContent = jobInput.value;
    popupToggleProfile();
}

formElement.addEventListener('submit', formSubmitHandler); 

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

const elementsList = document.querySelector('.elements__list');
const placeTemplate = document.querySelector('#element-template').content.querySelector('.element');
const placeElement = placeTemplate.cloneNode(true);
const placeImage = placeElement.querySelector('.element__image');
const placeName = placeElement.querySelector('.element__name');
const placeLike = placeElement.querySelector('.element__like');

const handleClickImage = function popupToggleImage() {
  const popupBtn = document.querySelector('.popup-image');
  popupBtn.classList.toggle('popup_opened');
  const popupPic = document.querySelector('.popup__pic');
}

// Создание карточки из массива initialCards
const createCard = function(initialCards) {
  placeImage.src = initialCards.link;
  placeName.textContent = initialCards.name;
  placeLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
  placeImage.addEventListener('click', handleClickImage);
  return placeElement;
}
// Рендер всех карточек массива
const renderCard = function(data, container) {
  const place = createCard(data);
  elementsList.appendChild(place);
}

initialCards.forEach(function(item) {
  renderCard(item, elementsList);
});

// Функция создания карточки через попап
function addPlace(name, image) {
  placeName.textContent = namee;
  placeImage.src = image;
  placeImage.alt = name;
  placeElement.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active'); // переключашка лайка
  });
  elementsList.appendChild(placeElement);
}

// Работа кнопки нового места
const addPlaceButton = document.querySelector('.form__submit-button_create-element');
addPlaceButton.addEventListener('click', function () {
  const elName = document.querySelector('#element-title');
  const elImage = document.querySelector('#element-image');
  addPlace(elName.value, elImage.value);
  elName.value = '';
  elImage.value = '';
  popupTogglePlace();
});

