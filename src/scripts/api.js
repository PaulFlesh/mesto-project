import { avatar, profileName, profession } from './profile.js';
import { renderCard, createCard, placeTemplate, elementsList } from './cards.js';

const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/plus-cohort-13',
  headers: {
    authorization: 'eeb10f4c-568d-4124-bc82-28113d2b839d',
    'Content-Type': 'application/json',
  },
};

const onResponse = (response) => {
  return response.ok ? response.json() : Promise.reject(response);
};

function getUserInfo() {
  return fetch(`${config.url}/users/me`, {
    headers: config.headers,
  }).then(onResponse);
}
getUserInfo().then((data) => {
  avatar = data.avatar;
  profileName.textContent = data.name;
  profession.textContent = data.about;
  userId = user._id;
})

export function getInitialCards() {
  return fetch(`${config.url}/cards`, {
    headers: config.headers,
  }).then(onResponse);
}
getInitialCards().then(data => {
  data.forEach((item) => {
    renderCard(item, elementsList);
  });
});

let userId = null;

function getAllInfo() {
  return Promise.all([getCards(), getUserInfo()])
}
getAllInfo()
  .then(([cards, user]) => {
    nameInfo.textContent = user.name;
    jobInfo.textContent = user.about;
    userAvatar.src = user.avatar;
    userId = user._id;
    cards.reverse().forEach((item) => {
      renderCard(data, postsContainer, userId);
    });
  
});


/*
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
*/

function editProfile(data) {
  return fetch(`${config.url}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify(data),
  }).then(onResponse);
}

function handleProfileChanges(evt) {
  evt.preventDefault();
  //renderLoading(buttonNamePopup, true);
  editProfile({name: nameInput.value, about: jobInput.value})
  .then((dataFromServer) => {
    nameInfo.textContent = nameInput.value;
    jobInfo.textContent = jobInput.value;
  })
  .then(() => {
    closePopup(profilePopup);
  })
  .catch(err => console.log(err))
  /*
  .finally(() => {
    renderLoading(buttonNamePopup, false);
  })
  */
}

function changeUserAvatar(evt) {
  evt.preventDefault();
  //renderLoading(buttonAvatarPopup, true);
  editUserAvatar({avatar: avatarInput.value})
  .then((dataFromServer) => {
    userAvatar.src = avatarInput.value;
  })
  .then(() => {
    closePopup(avatarPopup);
  })
  .catch(err => console.log(err))
  /*
  .finally(() => {
    renderLoading(buttonAvatarPopup, false);
  })
  */
}

const addNewCards = function(evt) {
  evt.preventDefault();
  //renderLoading(buttonPostPopup, true);
  addCard({name: inputPlaceTitle.value, link: inputPlaceLink.value})
    .then((dataFromServer) => {
      renderCard(dataFromServer, postsContainer, userId);
    })
    .catch(err => console.log(err))
    /*
    .finally(() => {
      renderLoading(buttonPostPopup, false);
    })
    */
  formPlace.reset();
  //disableButton(buttonPostPopup, validationConfig);
  closePopup(placePopup);
}

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
}
*/

function likeCard(dataId) {
  return fetch(`${config.url}/cards/likes/${dataId}`, {
    method: "PUT",
    headers: config.headers,
  }).then(onResponse);
}

function unlikeCard(dataId) {
  return fetch(`${config.url}/cards/likes/${dataId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(onResponse);
}

function editUserAvatar(data) {
  return fetch(`${config.url}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify(data),
  }).then(onResponse);
}