import "./pages/index.css";
import { initialCards } from "./scripts/cards.js";
import {
  createCard,
  deleteCard,
  cardLike,
  likeCard,
} from "./components/card.js";
import {
  openPopup,
  closePopup,
  closePopupClickOverlay,
} from "./components/popup.js";

// DOM элементы
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const popupAddButton = document.querySelector(".profile__add-button");
const popupAddNewCard = document.querySelector(".popup_type_new-card");
const placesList = document.querySelector(".places__list");

const popups = document.querySelectorAll(".popup");
const popupsCrosses = document.querySelectorAll(".popup__close");

const popupEditButton = document.querySelector(".profile__edit-button");
const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupFormEditProfile = document.forms["edit-profile"];
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_description");

const popupFormCreateCard = document.forms["new-place"];
const popupInputTypeCardName = document.querySelector(
  ".popup__input_type_card-name"
);
const popupInputTypeUrl = document.querySelector(".popup__input_type_url");
const popupTypeImage = document.querySelector(".popup_type_image");
const popupImage = popupTypeImage.querySelector(".popup__image");
const popupCaption = popupTypeImage.querySelector(".popup__caption");

// Открытие попапа карточки
export const showPopupCard = (name, link) => {
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;

  openPopup(popupTypeImage);
};

// Открытие попапа изменения профиля
popupEditButton.addEventListener("click", () => {
  openPopup(popupTypeEdit);
  nameInput.value = profileTitle.innerHTML;
  jobInput.value = profileDescription.innerHTML;
});

// Изменение данных о профиле
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const nameInputValue = nameInput.value;
  const jobInputValue = jobInput.value;

  profileTitle.textContent = nameInputValue;
  profileDescription.textContent = jobInputValue;

  closePopup(popupTypeEdit);
}

// Обработчик формы изменения данных о профиле
popupFormEditProfile.addEventListener("submit", handleProfileFormSubmit);

// Открытие попапа добавления карточки
popupAddButton.addEventListener("click", () => {
  openPopup(popupAddNewCard);
});

// Вывод карточки на страницу
initialCards.forEach((card) => {
  placesList.append(createCard(card, deleteCard, showPopupCard, likeCard));
});

//Добавление слушаетля клика на крестик и закрытие попапов
popupsCrosses.forEach((cross) => {
  cross.addEventListener("click", () => {
    const popupCrossParent = cross.closest(".popup");
    closePopup(popupCrossParent);
  });
});

//Закрытие попапа по клику по бекгрунду
closePopupClickOverlay(popups);

//Добавление новой карточки
function handleFormCreateCardSubmit(evt) {
  evt.preventDefault();

  const cardName = popupInputTypeCardName.value;
  const urlImage = popupInputTypeUrl.value;

  const newCard = { name: cardName, link: urlImage };

  closePopup(popupAddNewCard);

  placesList.prepend(createCard(newCard, deleteCard, showPopupCard, likeCard));

  popupInputTypeCardName.value = "";
  popupInputTypeUrl.value = "";
}

// Обработчик формы добавления карточки
popupFormCreateCard.addEventListener("submit", handleFormCreateCardSubmit);

//Добавление плавных анимаций к попапам
popups.forEach((popup) => {
  popup.classList.add("popup_is-animated");
});
