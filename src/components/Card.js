import { popupOpenImage } from "../pages/index.js";

export default class Card {
  constructor({data, user, handleChangeLikeStatus, handleDeleteCard, handleCardClick}, cardSelector) {
    this._data = data; // Надо передать карточку с сервера
    this._user = user; // Передать юзера как целый объект
    this._name = data.name;
    this._link = data.link;
    this._handleDeleteCard = handleDeleteCard;
    this._handleChangeLikeStatus = handleChangeLikeStatus;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
  }

  _getCardFromTemplate() {
    const cardTemplate = document.querySelector(this._cardSelector).content.querySelector(".gallery__card").cloneNode(true);
    return cardTemplate;
  }
  
  generateCard() {
    this._card = this._getCardFromTemplate();
    this._setEventListeners();
    this._showDeleteIcon();
    this.updateLikesState(this._data);
    this._card.querySelector('.gallery__subtitle').textContent = this._name;
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = this._name;
    return this._card;
  }
  
  _showDeleteIcon() {
    if (this._data.owner._id !== this._user._id) {
      this._card
        .querySelector(".gallery__delete")
        .classList.add("gallery__delete_inactive");
    }
  }
  
  isLiked() {
    if (this._data.likes.some((like) => like._id === this._user._id))
			return true
		else return false
  }

  updateLikesState(data) {
    this._data = data;
    this._likeCounter.textContent = this._data.likes.length;
    if (this.isLiked()) {
      this._likeButton.classList.add('gallery__like_active');
    } else {
      this._likeButton.classList.remove('gallery__like_active');
    }
  }

  _setEventListeners() {
    this._cardPhoto = this._card.querySelector(".gallery__photo");
    this._deleteButton = this._card.querySelector(".gallery__delete");
    this._likeButton = this._card.querySelector(".gallery__like");
    this._likeCounter = this._card.querySelector(".gallery__like-counter");
    this._cardPhoto.addEventListener('click', () => this._handleCardClick(this._name, this._link));
    this._deleteButton.addEventListener('click', () => this._handleDeleteCard(this._card, this._data._id));
    this._likeButton.addEventListener('click', () => this._handleChangeLikeStatus(this._data._id));
  }
}
