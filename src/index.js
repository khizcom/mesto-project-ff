import "./styles/index.css";
import * as data from "./components/data.js";
import { initialCards } from "./cards";
import {
  openModal,
  closeModal,
  closeModalByClick,
} from "./components/modal.js";
import { createCard, likeCard, deleteCardFunc } from "./components/card.js";

// @todo: Темплейт карточки
export const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");

// Функция открытия карточки
function openCard(name, link) {
  openModal(data.imageCardPopup);
  data.popupImage.src = link;
  data.popupImage.alt = name;
  data.popupCaption.textContent = name;
}

// @todo: Вывести карточки на страницу
initialCards.forEach((el) =>
  placesList.append(createCard(el, deleteCardFunc, openCard, likeCard))
);

data.profileEditBtn.addEventListener("click", (evt) => {
  openModal(data.editProfilePopup);
  data.nameInput.value = data.profileTitle.textContent;
  data.jobInput.value = data.profileDescription.textContent;
});
data.addCardBtn.addEventListener("click", (evt) => {
  openModal(data.addCardPopup);
});
data.editProfilePopup.addEventListener("click", closeModalByClick);
data.addCardPopup.addEventListener("click", closeModalByClick);
data.imageCardPopup.addEventListener("click", closeModalByClick);

// Функция сабмита изменения данных профиля
function handleFormSubmit(evt) {
  evt.preventDefault();
  const name = data.nameInput.value;
  const about = data.jobInput.value;
  data.profileTitle.textContent = name;
  data.profileDescription.textContent = about;
  closeModal(data.editProfilePopup);
}

data.formElement.addEventListener("submit", handleFormSubmit);

// Функция сабмита формы добавления новой карточки
function addNewCard(evt) {
  evt.preventDefault();
  const card = {
    name: data.placeName.value,
    link: data.placeLink.value,
  };
  const cardClone = createCard(card, deleteCardFunc, openCard, likeCard);
  placesList.prepend(cardClone);
  closeModal(evt.target.closest(".popup"));
  data.newPlaceForm.reset();
}
data.newPlaceForm.addEventListener("submit", addNewCard);
