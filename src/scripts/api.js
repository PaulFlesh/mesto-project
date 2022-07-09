import { avatarOnPage, profileName, profession } from './profile.js';
import { renderCard, elementsList } from './cards.js';

const config = {
  url: 'https://mesto.nomoreparties.co/v1/plus-cohort-13',
  headers: {
    authorization: 'eeb10f4c-568d-4124-bc82-28113d2b839d',
    'Content-Type': 'application/json',
  },
};

export let userId = null;

const onResponse = (response) => {
  return response.ok ? response.json() : Promise.reject(response);
};

export function getUserInfo() {
  return fetch(`${config.url}/users/me`, {
    headers: config.headers,
  }).then(onResponse);
}

export function getInitialCards() {
  return fetch(`${config.url}/cards`, {
    headers: config.headers,
  }).then(onResponse);
}

export function editProfile(data) {
  return fetch(`${config.url}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify(data),
  }).then(onResponse);
}

export function editAvatar(data) {
  return fetch(`${config.url}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify(data),
  }).then(onResponse);
}

export function getAllInfo() {
  return Promise.all([getInitialCards(), getUserInfo()])
}

// Выгружаем с сервера карточки из пула + данные пользователя 
getAllInfo()
  .then(([cards, user]) => {
    profileName.textContent = user.name;
    profession.textContent = user.about;
    avatarOnPage = user.avatar;
    console.log(avatarOnPage);
    console.log(user.avatar);
    userId = user._id;
    
    cards.forEach((data) => {
      renderCard(data, elementsList, userId);
    });
});

export function addCard(data) {
  return fetch(`${config.url}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(data),
  }).then(onResponse);
}

export function removeCard(dataId) {
  return fetch(`${config.url}/cards/${dataId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(onResponse);
}

export function likeCard(dataId) {
  return fetch(`${config.url}/cards/likes/${dataId}`, {
    method: "PUT",
    headers: config.headers,
  }).then(onResponse);
}

export function unlikeCard(dataId) {
  return fetch(`${config.url}/cards/likes/${dataId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(onResponse);
}

export function changeLikeStatus(dataId, isLike) {
  return fetch(`${config.url}/cards/likes/${dataId}`, {
    method: isLike ? "DELETE" : "PUT",
    headers: config.headers,
  }).then(onResponse);
}