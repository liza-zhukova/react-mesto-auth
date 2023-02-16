import PopupWithForm from "./PopupWithForm";
import { useState, useEffect } from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [cardName, setCardName] = useState("");
  const [cardLink, setCardLink] = useState("");

  useEffect(() => {
    setCardName("");
    setCardLink("");
  }, [isOpen]);

  function handleCardNameChange(evt) {
    setCardName(evt.target.value);
  }

  function handleCardLinkChange(evt) {
    setCardLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace({
      name: cardName,
      link: cardLink,
    });
  }

  return (
    <PopupWithForm
      name="popup__add-card"
      title="Новое место"
      isOpen={isOpen}
      buttonName="Создать"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__container-field">
        <input
          id="title-input"
          className="popup__container-item"
          type="text"
          value={cardName || ''}
          onChange={handleCardNameChange}
          placeholder="Название"
          name='name' 
          required
          minLength="2"
          maxLength="30"
        />
        <span className="title-input-error popup__container-error"></span>
      </label>
      <label className="popup__container-field">
        <input
          id="link-input"
          className="popup__container-item"
          type="url"
          value={cardLink || ''} 
          onChange={handleCardLinkChange}
          placeholder="Ссылка на картинку"
          name="link"
          required
        />
        <span className="link-input-error popup__container-error"></span>
      </label>
      <button type="submit" className="popup__container-button">
          {isLoading ? "Создание..." : "Создать"}
      </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;