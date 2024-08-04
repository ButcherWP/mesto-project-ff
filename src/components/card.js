export const createCard = (card, callback, popupShow, cardLike) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cloneTemplate = cardTemplate.querySelector(".card").cloneNode(true);
  const cardDeleteButton = cloneTemplate.querySelector(".card__delete-button");
  const cardImage = cloneTemplate.querySelector(".card__image");
  const cardLikeButton = cloneTemplate.querySelector(".card__like-button");

  cloneTemplate.querySelector(".card__title").textContent = card.name;
  cloneTemplate.querySelector(".card__image").src = card.link;
  cloneTemplate.querySelector(".card__image").alt = card.name;

  //Слушатель на кнопку лайка
  cardLikeButton.addEventListener("click", () => {
    cardLike(cardLikeButton);
  });

  // Слушатель на кнопку удаления карточки
  cardDeleteButton.addEventListener("click", () => {
    callback(cloneTemplate);
  });

  // Слушатель на открытие попапа по клику на изображение карточки
  cardImage.addEventListener("click", () => {
    popupShow(card.name, card.link);
  });

  return cloneTemplate;
};

// Удаление карточки
export const deleteCard = (card) => {
  card.remove();
};

//Лайк
export function cardLike(likeButton) {
  if (likeButton.classList.contains("card__like-button_is-active")) {
    likeButton.classList.remove("card__like-button_is-active");
  } else {
    likeButton.classList.add("card__like-button_is-active");
  }
}
