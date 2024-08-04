export const createCard = (card, deleteCard, handleImageClick, likeCard) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cloneTemplate = cardTemplate.querySelector(".card").cloneNode(true);
  const cardDeleteButton = cloneTemplate.querySelector(".card__delete-button");
  const cardImage = cloneTemplate.querySelector(".card__image");
  const cardLikeButton = cloneTemplate.querySelector(".card__like-button");

  cloneTemplate.querySelector(".card__title").textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;

  //Слушатель на кнопку лайка
  cardLikeButton.addEventListener("click", () => {
    likeCard(cardLikeButton);
  });

  // Слушатель на кнопку удаления карточки
  cardDeleteButton.addEventListener("click", () => {
    deleteCard(cloneTemplate);
  });

  // Слушатель на открытие попапа по клику на изображение карточки
  cardImage.addEventListener("click", () => {
    handleImageClick(card.name, card.link);
  });

  return cloneTemplate;
};

// Удаление карточки
export const deleteCard = (card) => {
  card.remove();
};

//Лайк
export function likeCard(likeButton) {
  likeButton.classList.toggle("card__like-button_is-active");
}
