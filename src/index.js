import "./pages/index.css";
import { createCard } from "./components/card.js";
import {
  openPopup,
  closePopup,
  closePopupClickOverlay,
} from "./components/popup.js";
import { enableValidation, clearValidation } from "./components/validation.js";
import {
  userInfo,
  getCards,
  changingUserInfo,
  addNewCard,
  changingUserAvatarAPI,
} from "./api.js";

// DOM элементы
const profileImage = document.querySelector(".profile__image");
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

const popupInputTypeAvatarUrl = document.querySelector(
  ".popup__input_type_avatar_url"
);
const popupEditAvatar = document.querySelector(".popup_type_edit_avatar");
const avatar = document.querySelector(".profile__image-container");
const popupFormEditAvatar = document.forms["edit-avatar"];

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "form__input-error_active",
};

let user;

Promise.all([userInfo(), getCards()])
  .then(([userData, cardsData]) => {
    user = userData;
    profileTitle.textContent = userData.name;
    profileDescription.textContent = userData.about;
    profileImage.src = userData.avatar;
    cardsData.forEach((card) => {
      placesList.append(createCard(card, showPopupCard, userData));
    });
  })
  .catch((error) => {
    console.error(error);
  });

// Открытие попапа карточки
export const showPopupCard = (name, link) => {
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;

  openPopup(popupTypeImage);
  clearValidation(popupFormCreateCard, validationConfig);
};

// Открытие попапа изменения профиля
popupEditButton.addEventListener("click", () => {
  openPopup(popupTypeEdit);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.innerHTML;
  clearValidation(popupFormEditProfile, validationConfig);
});

// Открытие попапа изменения аватара
avatar.addEventListener("click", () => {
  openPopup(popupEditAvatar);
  clearValidation(popupFormEditAvatar, validationConfig);
});

// Изменение данных о профиле
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameInputValue = nameInput.value;
  const jobInputValue = jobInput.value;
  const formButton = popupFormEditProfile.querySelector(".popup__button");
  const textButton = "Сохранить";

  formButton.textContent = "Сохранение...";

  changingUserInfo(nameInputValue, jobInputValue)
    .then(() => {
      closePopup(popupTypeEdit);
      profileTitle.textContent = nameInputValue;
      profileDescription.textContent = jobInputValue;
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      formButton.textContent = textButton;
    });
}

// Обработчик формы изменения данных о профиле
popupFormEditProfile.addEventListener("submit", handleProfileFormSubmit);

// Открытие попапа добавления карточки
popupAddButton.addEventListener("click", () => {
  openPopup(popupAddNewCard);
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
  const formButton = popupFormCreateCard.querySelector(".popup__button");
  const textButton = formButton.value;

  formButton.textContent = "Сохранение...";

  addNewCard(cardName, urlImage)
    .then((cardData) => {
      closePopup(popupAddNewCard);
      placesList.prepend(createCard(cardData, showPopupCard, user));
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      formButton.textContent = textButton;
    });

  popupInputTypeCardName.value = "";
  popupInputTypeUrl.value = "";
}

// Обработчик формы добавления карточки
popupFormCreateCard.addEventListener("submit", handleFormCreateCardSubmit);

//Добавление плавных анимаций к попапам
popups.forEach((popup) => {
  popup.classList.add("popup_is-animated");
});

function avatarChanging(evt) {
  evt.preventDefault();

  const avatarLink = popupInputTypeAvatarUrl.value;
  const formButton = popupFormEditAvatar.querySelector(".popup__button");
  const textButton = formButton.value;

  formButton.textContent = "Сохранение...";

  changingUserAvatarAPI(avatarLink)
    .then((avatarData) => {
      profileImage.src = avatarData.avatar;
      closePopup(popupEditAvatar);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      formButton.textContent = textButton;
    });
}

// Обработчик формы обновления аватара
popupFormEditAvatar.addEventListener("submit", avatarChanging);

// Вызовем функцию
enableValidation(validationConfig);
