import { deleteCardAPI, likeCardAPI, deleteLikeCardAPI } from "../api.js";

export const createCard = (card, handleImageClick, userData) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const cloneTemplate = cardTemplate.querySelector(".card").cloneNode(true);
  const cardDeleteButton = cloneTemplate.querySelector(".card__delete-button");
  const cardImage = cloneTemplate.querySelector(".card__image");
  const cardLikeButton = cloneTemplate.querySelector(".card__like-button");
  const cardlikeCounter = cloneTemplate.querySelector(".card__like-count");

  const cardOwnerID = card.owner._id;
  const userID = userData._id;
  const likesNumber = card.likes.length;

  if (userID !== cardOwnerID) {
    cardDeleteButton.style.visibility = "hidden";
  }

  cardlikeCounter.textContent = likesNumber;

  cloneTemplate.querySelector(".card__title").textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;

  //Слушатель на кнопку лайка
  cardLikeButton.addEventListener("click", () => {
    likeCard(cardLikeButton, card, cardlikeCounter);
  });

  // Слушатель на кнопку удаления карточки
  cardDeleteButton.addEventListener("click", () => {
    deleteCardAPI(card._id)
      .then(() => {
        deleteCard(cloneTemplate);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // Слушатель на открытие попапа по клику на изображение карточки
  cardImage.addEventListener("click", () => {
    handleImageClick(card.name, card.link);
  });

  if (card.likes.some((like) => like._id === userData._id)) {
    cardLikeButton.classList.add("card__like-button_is-active");
  }

  return cloneTemplate;
};

// Удаление карточки
function deleteCard(card) {
  card.remove();
}

//Лайк
function likeCard(likeButton, card, cardlikeCounter) {
  if (likeButton.classList.value.includes("card__like-button_is-active")) {
    deleteLikeCardAPI(card._id)
      .then((cardData) => {
        likeButton.classList.remove("card__like-button_is-active");
        console.log(cardData);
        cardlikeCounter.textContent = cardData.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    likeCardAPI(card._id)
      .then((cardData) => {
        likeButton.classList.add("card__like-button_is-active");
        console.log(cardData);
        cardlikeCounter.textContent = cardData.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
