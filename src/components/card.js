export const createCard = (card, callback, popapShow) => {
    const cardTemplate = document.querySelector('#card-template').content;
    const cloneTemplate = cardTemplate.querySelector('.card').cloneNode(true);
    const cardDeleteButton = cloneTemplate.querySelector('.card__delete-button');
    const cardImage = cloneTemplate.querySelector('.card__image')

    cloneTemplate.querySelector ('.card__title').textContent = card.name;
    cloneTemplate.querySelector ('.card__image').src = card.link;
    cloneTemplate.querySelector ('.card__image').alt = card.name;

    // Слушатель на кнопку удаления карточки
    cardDeleteButton.addEventListener ('click', () => {
            callback(cloneTemplate);
        })

    // Слушатель на открытие попапа по клику на изображение карточки
    cardImage.addEventListener ('click', () => {
        popapShow(card.name, card.link)
        })

    return cloneTemplate;
};

// Удаление карточки
export const deleteCard = (card) => {
    card.remove();
}