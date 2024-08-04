import "./pages/index.css";
import { initialCards } from "./scripts/cards.js";
import { createCard, deleteCard, cardLike } from "./components/card.js";
import {
  openPopup,
  closePopup,
  showPopupCard,
  closePopupClickOverlay,
} from "./components/popup.js";

// DOM элементы
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const popupAddButton = document.querySelector(".profile__add-button");
const popupAddNewCard = document.querySelector(".popup_type_new-card");
const placesList = document.querySelector(".places__list");

const popups = document.querySelectorAll(".popup");
const popupCross = document.querySelectorAll(".popup__close");

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

// Открытие попапа изменения профиля
popupEditButton.addEventListener("click", () => {
  openPopup(popupTypeEdit);
  nameInput.value = profileTitle.innerHTML;
  jobInput.value = profileDescription.innerHTML;
});

// Изменение данных о профиле
function handleFormSubmit(evt) {
  evt.preventDefault();
  const nameInputValue = nameInput.value;
  const jobInputValue = jobInput.value;

  profileTitle.textContent = nameInputValue;
  profileDescription.textContent = jobInputValue;

  closePopup(document.querySelector(".popup_is-opened"));
}

// Обработчик формы изменения данных о профиле
popupFormEditProfile.addEventListener("submit", handleFormSubmit);

// Открытие попапа добавления карточки
popupAddButton.addEventListener("click", () => {
  openPopup(popupAddNewCard);
});

// Вывод карточки на страницу
initialCards.forEach((card) => {
  placesList.append(createCard(card, deleteCard, showPopupCard, cardLike));
});

//Добавление слушаетля клика на крестик и закрытие попапов
popupCross.forEach((cross) => {
  cross.addEventListener("click", () => {
    const popapCrossParent = cross.closest(".popup");
    closePopup(popapCrossParent);
  });
});

//Закрытие попапа по клику по бекгрунду
closePopupClickOverlay(popups);

//Добавление новой карточки
function handleFormCreateCardSubmit(evt) {
  evt.preventDefault();
  const cardName = popupInputTypeCardName.value;
  const urlImage = popupInputTypeUrl.value;
  initialCards.unshift({ name: cardName, link: urlImage });
  const NewCard = initialCards[0];

  closePopup(document.querySelector(".popup_is-opened"));

  placesList.prepend(createCard(NewCard, deleteCard, showPopupCard, cardLike));
}

// Обработчик формы добавления карточки
popupFormCreateCard.addEventListener("submit", handleFormCreateCardSubmit);

//Добавление плавных анимаций к попапам
popups.forEach((popup) => {
  popup.classList.add("popup_is-animated");
});
