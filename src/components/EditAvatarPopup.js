import PopupWithForm from "./PopupWithForm";
import { useRef, useEffect } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const avatarRef = useRef(null);

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      name="popup__edit-avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      isLoading={isLoading}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__container-field">
        <input
          id="avatar-input"
          className="popup__container-item"
          type="url"
          ref={avatarRef}
          placeholder="Ссылка на картинку"
          name="avatar"
          required
        />
        <span className="avatar-input-error popup__container-error"></span>
      </label>
      <button type="submit" className="popup__container-button">
          {isLoading ? "Сохранение..." : "Сохранить"}
      </button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;