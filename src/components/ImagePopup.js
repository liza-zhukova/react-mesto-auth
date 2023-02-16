function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div className={`popup popup_photo ${isOpen && "popup_opened"}`}>
      <div className="popup__photo-container">
        <img
          className="popup__photo-big"
          src={`${card.link}`}
          alt={card.name}
        />
        <p className="popup__photo-container-title">{card.name}</p>
        <button
          className="popup__close"
          id="closeCardButton"
          type="button"
          onClick={onClose}
          aria-label="закрыть"
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;