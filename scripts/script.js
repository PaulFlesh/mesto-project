// Объявление констант профиля и формы добавления нового места
const formElement = document.querySelector('[name="profile-info"]');
const nameInput = document.querySelector('[name="profile-title"]');
const jobInput = document.querySelector('[name="profile-subtitle"]');
const profileName = document.querySelector('.profile__title');
const profession = document.querySelector('.profile__subtitle');
const formImage = document.querySelector('[name="element-creation"]');

// Объявление модальных окон 
const profilePopup = document.querySelector('.popup_profile');
const placePopup = document.querySelector('.popup_place');

// Создание функций открытия/закрытия модальных окон профиля и нового места
const openPopup = (popup) => popup.classList.add('popup_opened');
const closePopup = (popup) => popup.classList.remove('popup_opened');

const openProfilePopup = () => openPopup(profilePopup);
const closeProfilePopup = () => closePopup(profilePopup);

const openPlacePopup = () => openPopup(placePopup);
const closePlacePopup = () => {
  closePopup(placePopup);
  formImage.reset();
};

document.querySelector('.profile__edit-button').addEventListener('click', openProfilePopup);
document.querySelector('.profile-close-btn').addEventListener('click', closeProfilePopup);

document.querySelector('.profile__add-button').addEventListener('click', openPlacePopup);
document.querySelector('.place-close-btn').addEventListener('click', closePlacePopup);

// Функция перезаписи информации профиля
function submitProfileForm (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
  profileName.textContent = nameInput.value;
  profession.textContent = jobInput.value;
  closeProfilePopup();
}
formElement.addEventListener('submit', submitProfileForm); 

// Объявление констант окна картинок
const popupImage = document.querySelector('.popup_image');
const popupPic = popupImage.querySelector('.popup__pic');
const popupPicCaption = document.querySelector('.popup__pic-caption');

// Функция открытия окна с указанной картинкой (из массива)
const openImage = (data) => {
  popupPic.src = data.link;
  popupPicCaption.textContent = data.name;
  openPopup(popupImage);
  return data;
}

const closeImage = () => closePopup(popupImage);

document.querySelector('.image-close-btn').addEventListener('click', closeImage);

const elementsList = document.querySelector('.elements__list');
const placeTemplate = document.querySelector('#element-template').content.querySelector('.element');

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

const renderCard = (data, container) => {
  const place = createCard(data);
  container.append(place);
}

initialCards.forEach(function(item) {
  renderCard(item, elementsList);
});

const placeTemplateName = document.querySelector('#element-title');
const placeTemplateImage = document.querySelector('#element-image');
const addPlaceButton = document.querySelector('.form__submit-button_create-element');

// Функция создания карточки из модального окна
function addPlace (evt) {
  evt.preventDefault();
  const data = {
    name: placeTemplateName.value,
    link: placeTemplateImage.value    
  };
  const newCard = createCard(data);
  elementsList.prepend(newCard);
  closePlacePopup();
}
formImage.addEventListener('submit', addPlace); // Лучше вешать обработчик на форму, но карточка создается и через 1с получаю 405 ошибку.
