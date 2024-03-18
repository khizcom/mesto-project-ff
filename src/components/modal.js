// Функция открытия модального окна
function openModal(domElement) {
  domElement.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeModalByEscape);
}
// Функция закрытия модального окна
function closeModal(domElement) {
  document.removeEventListener("keydown", closeModalByEscape);
  domElement.classList.remove("popup_is-opened");
  }
// Функция закрытия модального окна кнопкой ESC
function closeModalByEscape(e) {
  if (e.key === "Escape") {
    const activePopup = document.querySelector(".popup_is-opened");
    closeModal(activePopup);
  }
}
// Функция закрытия модального окна кликом на оверлэй
function closeModalByClick(evt){
  if(evt.target.classList.contains('popup__close') || evt.target.classList.contains('popup')){
    closeModal(evt.currentTarget);
  }
}

export { openModal, closeModal, closeModalByEscape, closeModalByClick };
