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

// Объявление констант профиля на странице и полей окна редактирования
const formElement = document.querySelector('[name="profile-info"]');
const nameInput = document.querySelector('[name="profile-title"]');
const jobInput = document.querySelector('[name="profile-subtitle"]');
const profileName = document.querySelector('.profile__title');
const profession = document.querySelector('.profile__subtitle');

// Объявление модальных окон 
const profilePopup = document.querySelector('.popup_profile');
const placePopup = document.querySelector('.popup_place');

// Создание переключашек модальных окон профиля и нового места
const togglePopup = function (popup) {
  popup.classList.toggle('popup_opened')
}

const handleClickProfile = function () {
  togglePopup(profilePopup);    
}

const handleClickPlace = function () {
  togglePopup(placePopup);    
}

document.querySelector('.profile__edit-button').addEventListener('click', handleClickProfile);
document.querySelector('.profile-close-btn').addEventListener('click', handleClickProfile);

document.querySelector('.profile__add-button').addEventListener('click', handleClickPlace);
document.querySelector('.place-close-btn').addEventListener('click', handleClickPlace);

// Функция перезаписи информации профиля
function formSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
  profileName.textContent = nameInput.value;
  profession.textContent = jobInput.value;
  handleClickProfile();
}

formElement.addEventListener('submit', formSubmitHandler); 

// Объявление констант окна картинок
const popupImage = document.querySelector('.popup_image');
const popupPic = popupImage.querySelector('.popup__pic');
const popupPicCaption = document.querySelector('.popup__pic-caption');

// Функция открытия окна с указанной картинкой (из массива)
const handleClickImage = function (data) {
  popupPic.src = data.link;
  popupPicCaption.textContent = data.name;
  togglePopup(popupImage);    
}
document.querySelector('.image-close-btn').addEventListener('click', handleClickImage);

const elementsList = document.querySelector('.elements__list');
const placeTemplate = document.querySelector('#element-template').content.querySelector('.element');

const createCard = function(data) {
  const placeElement = placeTemplate.cloneNode(true);
  const placeName = placeElement.querySelector('.element__name');
  const placeImage = placeElement.querySelector('.element__image');
  const placeBin = placeElement.querySelector('.element__bin');
  const placeLike = placeElement.querySelector('.element__like');
  placeName.textContent = data.name;
  placeImage.src = data.link;
  placeImage.alt = data.name;
  placeImage.addEventListener('click', () => handleClickImage(data));
  placeBin.addEventListener('click', function () {
    placeElement.remove();
  });
  placeLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
  return placeElement;
}

// Функция открытия окна с указанной картинкой (из окна нового места)
const clickImage = function (plName, plImage) {
  popupPic.src = plImage;
  popupPicCaption.textContent = plName;
  togglePopup(popupImage);    
}
document.querySelector('.image-close-btn').addEventListener('click', handleClickImage);

// Функция создания карточки из модального окна
function addPlace(plName, plImage) {
  const placeElement = placeTemplate.cloneNode(true);
  const placeName = placeElement.querySelector('.element__name');
  const placeImage = placeElement.querySelector('.element__image');
  const placeBin = placeElement.querySelector('.element__bin');
  const placeLike = placeElement.querySelector('.element__like');
  placeName.textContent = plName;
  placeImage.src = plImage;
  placeImage.alt = plName;
  placeImage.addEventListener('click', () => clickImage(plName, plImage));
  placeBin.addEventListener('click', function () {
    placeElement.remove();
  });
  placeLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
  });
  elementsList.insertBefore(placeElement, elementsList.firstChild);
}

// Работа кнопки создания нового места
const addPlaceButton = document.querySelector('.form__submit-button_create-element');
addPlaceButton.addEventListener('click', function () {
  const placeName = document.querySelector('#element-title');
  const placeImage = document.querySelector('#element-image');
  addPlace(placeName.value, placeImage.value);
  placeName.value = '';
  placeImage.value = '';
  handleClickPlace();
});

const renderCard = function(data, container) {
  const place = createCard(data);
  container.appendChild(place);
}

initialCards.forEach(function(item) {
  renderCard(item, elementsList);
});
