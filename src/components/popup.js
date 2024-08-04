// Открытие попапов
export const openPopup = (popupType) => {
  popupType.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupEsc);
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
