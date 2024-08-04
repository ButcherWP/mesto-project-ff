// Открытие попапов
export const openPopup = (popupType) => {
  popupType.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupEsc);
};

// Открытие попапа карточки
export const showPopupCard = (name, link) => {
  const popupTypeImage = document.querySelector(".popup_type_image");
  const popupImage = popupTypeImage.querySelector(".popup__image");
  const popupCaption = popupTypeImage.querySelector(".popup__caption");

  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;

  openPopup(popupTypeImage);
};

// Закрытие попапов
export const closePopup = (popup) => {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closePopupEsc);
};

//Закрытие попапа по клику по бекгрунду
export const closePopupClickOverlay = (popups) => {
  popups.forEach((popup) => {
    popup.addEventListener("click", (event) => {
      if (event.target.classList.contains("popup")) {
        closePopup(popup);
      }
    });
  });
};

//Закрытие попапа на esc
function closePopupEsc(event) {
  if (event.key === "Escape") {
    closePopup(document.querySelector(".popup_is-opened"));
  }
}
