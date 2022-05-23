function popupToggle() {
  let popup = document.querySelector('.popup');
  if (popup.classList('.popup_opened') === null) {
    popup.classList.add('.popup_opened');
  } else {
    popup.classList.remove('.popup_opened');
  }
}

document.querySelector('.popup__edit-button').addEventListener('click', popupToggle);
document.querySelector('.popup__close-button').addEventListener('click', popupToggle);
