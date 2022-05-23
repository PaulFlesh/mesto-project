function popupToggle() {
  let popup = document.querySelector('.popup');
  if (popup.classList('.popup_opened') === null) {
    popup.classList.add('.popup_opened');
  } else {
    popup.classList.remove('.popup_opened');
  }
}

let popbtn = document.querySelector('.popup__edit-button');
popbtn.addEventListener('click', popupToggle);
let popbttn = document.querySelector('.popup__close-button');
popbttn.addEventListener('click', popupToggle);
