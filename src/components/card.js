// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: Функция создания карточки
function createCard(cardData, deleteCardFunc, openCard, likeCard) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  cardImage.addEventListener("click", () =>
    openCard(cardData.name, cardData.link)
  );
  cardDeleteButton.addEventListener("click", deleteCardFunc);
  cardLikeButton.addEventListener("click", (evt) => likeCard(evt));

  return cardElement;
}

function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

// @todo: Функция удаления карточки
function deleteCardFunc(event) {
  event.target.closest(".card").remove();
}

export { createCard, likeCard, deleteCardFunc };
