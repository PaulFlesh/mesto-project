const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-13',
  headers: {
    authorization: 'eeb10f4c-568d-4124-bc82-28113d2b839d',
    'Content-Type': 'application/json'
  }
}

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, config.headers)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
} 