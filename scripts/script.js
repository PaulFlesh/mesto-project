// Переключашка попапа профиля
function popupToggleProfile() {
  document.querySelector('.popup-profile').classList.toggle('popup_opened');
}
document.querySelector('.profile__edit-button').addEventListener('click', popupToggleProfile);
document.querySelector('.profile-close-btn').addEventListener('click', popupToggleProfile);
// Переключашка попапа нового места
function popupTogglePlace() {
  document.querySelector('.popup-place').classList.toggle('popup_opened');
}
document.querySelector('.profile__add-button').addEventListener('click', popupTogglePlace);
document.querySelector('.place-close-btn').addEventListener('click', popupTogglePlace);

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

// тут оптимизация
/*
const placeElement = placeTemplate.cloneNode(true);
const placeImage = placeElement.querySelector('.element__image');
const placeName = placeElement.querySelector('.element__name');
const placeLike = placeElement.querySelector('.element__like');
*/

const handleClickImage = function popupToggleImage() {
  const popupBtn = document.querySelector('.popup-image');
  popupBtn.classList.toggle('popup_opened');
  const popupPic = document.querySelector('.popup__pic');
}

const createCard = function(initialCards) {
  const placeElement = placeTemplate.cloneNode(true);
  // Добавляем корзине функцию удаления карточки
  const placeBin = placeElement.querySelector('.element__bin');
  placeBin.addEventListener('click', function () {
    placeElement.remove();
  });
  const placeImage = placeElement.querySelector('.element__image');
  placeImage.src = initialCards.link;
  const placeName = placeElement.querySelector('.element__name');
  placeName.textContent = initialCards.name;
  const placeLike = placeElement.querySelector('.element__like');
  // Добавляем лайку переключашку
  placeLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
  placeImage.addEventListener('click', handleClickImage);
  return placeElement;
}

const renderCard = function(data, container) {
  const place = createCard(data);
  elementsList.appendChild(place);
}

initialCards.forEach(function(item) {
  renderCard(item, elementsList);
});

// Функция создания карточки из шаблона (пока рабочая)
function addPlace(placeName, placeImage) {
  const placeTemplate = document.querySelector('#element-template').content;
  const placeElement = placeTemplate.querySelector('.element').cloneNode(true);
  placeElement.querySelector('.element__bin').addEventListener('click', function () {
    placeElement.remove();
  });
  placeElement.querySelector('.element__name').textContent = placeName;
  placeElement.querySelector('.element__image').src = placeImage;
  placeElement.querySelector('.element__image').alt = placeName;
  placeElement.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
  elementsList.insertBefore(placeElement, elementsList.firstChild);
}

// Работа кнопки нового места
const addPlaceButton = document.querySelector('.form__submit-button_create-element');
addPlaceButton.addEventListener('click', function () {
  const placeName = document.querySelector('#element-title');
  const placeImage = document.querySelector('#element-image');
  addPlace(placeName.value, placeImage.value);
  placeName.value = '';
  placeImage.value = '';
  popupTogglePlace();
});

// Переключашка изображения с карточки
/*
const toggleImage = function popupToggleImage() {
  document.querySelector('.popup-image').classList.toggle('popup_opened');
}
document.querySelector('.element__image').addEventListener('click', toggleImage);
document.querySelector('.image-close-btn').addEventListener('click', toggleImage);
*/