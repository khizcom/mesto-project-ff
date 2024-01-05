// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");

// @todo: Функция создания карточки
function createCard(cardData, deleteCardFunc) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  cardDeleteButton.addEventListener('click', deleteCardFunc);

  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCardFunc(event) {
  event.target.closest('.card').remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((el) => placesList.append(createCard(el, deleteCardFunc)));
