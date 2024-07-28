import './pages/index.css';
import { initialCards } from './scripts/cards.js'
import { createCard , deleteCard } from './components/card.js'
import { openPopap, closePopap } from './components/popup.js'

// DOM узлы
const placesList = document.querySelector('.places__list')
const editProfileForm = document.querySelector('.popup_type_edit')
const popupEditButton = document.querySelector('.profile__edit-button')
const popupAddButton = document.querySelector('.profile__add-button')
const popupAddNewCard = document.querySelector('.popup_type_new-card')

// Вывод карточки на страницу
initialCards.forEach(card => {
    placesList.append(createCard(card, deleteCard, showPopapCard))
})

// Открытие попапа изменения профиля
popupEditButton.addEventListener ('click', () => {
    openPopap(editProfileForm)
})

// Открытие попапа добавления карточки
popupAddButton.addEventListener ('click', () => {
    openPopap(popupAddNewCard)
})

    const showPopapCard = (name, link) => {
    const popupTypeImage = document.querySelector('.popup_type_image')
    const popupImage = popupTypeImage.querySelector('.popup__image')
    const popupCaption = popupTypeImage.querySelector('.popup__caption')
  
    popupImage.src = link
    popupImage.alt = name
    popupCaption.textContent = name

    openPopap(popupTypeImage)
  }