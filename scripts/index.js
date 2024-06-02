// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard (card, {deleteCard}) {
    const cloneTemplate = cardTemplate.querySelector('.card').cloneNode(true);
    cloneTemplate.querySelector('.card__title').textContent = card.name;
    cloneTemplate.querySelector('.card__image').src = card.link;

    const cardDeleteButton = cloneTemplate.querySelector('.card__delete-button');
        cardDeleteButton.addEventListener('click', () => {
            deleteCard(cloneTemplate);
        });

    return cloneTemplate;
};

// @todo: Функция удаления карточки
function deleteCard(card) {
    card.remove();
};

// @todo: Вывести карточки на страницу
initialCards.forEach(function (card) {
    placesList.append(createCard(card, {deleteCard}))
});