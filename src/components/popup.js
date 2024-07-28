//Открытие попапов
export const openPopap = (popupType) => {
    popupType.classList.add('popup_is-opened');
}

//Закрытие попапов
export const closePopap = (popup) => {
    popup.classList.remove('popup_is-opened');
}