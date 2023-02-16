import PopupWithForm from "./PopupWithForm";
import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="popup__profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      buttonName="Сохранить"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__container-field">
        <input
          id="name-input"
          className="popup__container-item"
          value={name || ''}
          type="text"
          onChange={handleNameChange}
          placeholder="Имя"
          name="name"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="name-input-error popup__container-error"></span>
      </label>
      <label className="popup__container-field">
        <input
          id="opinion-input"
          className="popup__container-item"
          value={description || ''}
          type="text"
          onChange={handleDescriptionChange}
          placeholder="О себе"
          name="about"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="opinion-input-error popup__container-error"></span>
      </label>
      <button type="submit" className="popup__container-button">
          {isLoading ? "Сохранение..." : "Сохранить"}
      </button>
    </PopupWithForm>
  );
}

export default EditProfilePopup;