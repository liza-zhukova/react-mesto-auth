import React from "react";

function PopupWithForm({
  name,
  title,
  isOpen,
  buttonName,
  onClose,
  onSubmit,
  children,
}) {
  return (
    <div className={`popup ${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <h2 className="popup__container-title">{title}</h2>
        <form
          className="popup__container-form"
          method="post"
          name={name}
          onSubmit={onSubmit}
        >
          {children}
          <button type="submit" className="popup__container-button">
            {buttonName}
          </button>
        </form>
        <button
          className="popup__close"
          id="closeEditButton"
          type="button"
          aria-label="закрыть"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
