import { avatar, profileName, profession } from './profile.js';
import { renderCard, createCard, placeTemplate, elementsList } from './cards.js';

const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/plus-cohort-13',
  headers: {
    authorization: 'eeb10f4c-568d-4124-bc82-28113d2b839d',
    'Content-Type': 'application/json'
  }
}

function getUserInfo() { // Вытаскиваем объект пользователя
  return fetch('https://mesto.nomoreparties.co/v1/plus-cohort-13/users/me', {
    method: 'GET',
    headers: {
      authorization: 'eeb10f4c-568d-4124-bc82-28113d2b839d',
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(data => {
      avatar = data.avatar;
      profileName.textContent = data.name;
      profession.textContent = data.about;
    })
    .catch((err) => {
      console.log(err);
    })
}
getUserInfo(); // вызываем при загрузке страницы

export const getInitialCards = () => { // Загружаем карточки из пула в инете
  return fetch('https://mesto.nomoreparties.co/v1/plus-cohort-13/cards', {
    method: 'GET',
    headers: {
      authorization: 'eeb10f4c-568d-4124-bc82-28113d2b839d',
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(data => {
      data.forEach(function(item) {
        renderCard(item, elementsList);
      });
    })
    .catch((err) => {
      console.log(err);
    })
}
getInitialCards();

export const patchUserInfo = (data) => { // Редактируем объект пользователя
  return fetch('https://mesto.nomoreparties.co/v1/plus-cohort-13/cards', {
    method: 'PATCH',
    headers: {
      authorization: 'eeb10f4c-568d-4124-bc82-28113d2b839d',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: data.name,
      about: data.about
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      profileName.textContent = data.name;
      profession.textContent = data.about;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false);
    })
}
/*
function createNewCard(data) { // Добавляем новое место
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    config.headers,
    body: JSON.stringify({
      name: data.name,
      link: data.link
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      placeName.textContent = data.name;
      placeImage.src = data.link;
      placeImage.alt = data.name;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false);
    })
}*/
/*
function deleteCard(cardId) { // Удаляем карточку места
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: 'eeb10f4c-568d-4124-bc82-28113d2b839d',
      'Content-Type': 'application/json'
    },
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    })
}*/
/*
function likeCard(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: 'eeb10f4c-568d-4124-bc82-28113d2b839d',
      'Content-Type': 'application/json'
    },
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    })
}

function unlikeCard(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: 'eeb10f4c-568d-4124-bc82-28113d2b839d',
      'Content-Type': 'application/json'
    },
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    })
}*/
/*
function editAvatar(data) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: {
      authorization: 'eeb10f4c-568d-4124-bc82-28113d2b839d',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: data.avatar
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false);
    })
}*/
/*
// Тест. Пока для всех сабмитов сразу
export function renderLoading(isLoading) {
  if (isLoading) {
    //ищем сабмит нужной формы и меняем textContent
    const submitBtns = document.querySelectorAll('.form__submit-button');
    submitBtns.forEach(button => button.textContent = 'Сохранение...');
  } else {
    //возвращаем исходный textContent
    submitBtns.forEach(button => button.textContent.reset());
  }
}
*/