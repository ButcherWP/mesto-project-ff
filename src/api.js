const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-29",
  headers: {
    authorization: "0c5598f1-ce23-4f59-9db5-59c53bd41d35",
    "Content-Type": "application/json",
  },
};

//функция проверки ответа от сервера
const checkServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
};

export async function userInfo() {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then(checkServerResponse);
}

export async function getCards() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then(checkServerResponse);
}

export async function changingUserInfo(name, about) {
  fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then(checkServerResponse);
}

export async function addNewCard(cardName, cardLink) {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: cardName,
      link: cardLink,
    }),
  }).then(checkServerResponse);
}

export async function deleteCardAPI(card_id) {
  fetch(`${config.baseUrl}/cards/${card_id}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkServerResponse);
}

export async function likeCardAPI(card_id) {
  return fetch(`${config.baseUrl}/cards/likes/${card_id}`, {
    method: "PUT",
    headers: config.headers,
  }).then(checkServerResponse);
}

export async function deleteLikeCardAPI(card_id) {
  return fetch(`${config.baseUrl}/cards/likes/${card_id}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkServerResponse);
}

export async function changingUserAvatarAPI(avatarLink) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarLink,
    }),
  }).then(checkServerResponse);
}
