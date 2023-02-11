import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `element__card-item-like ${
    isLiked && "element__card-item-like_active"
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <div className="element__card">
      <img
        className="element__card-img"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="element__card-item">
        <h2 className="element__card-item-text">{card.name}</h2>
        <div className="element__card-item_like-container">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
            aria-label="лайк"
          ></button>
          <p className="element__card-item-like-number">{card.likes.length}</p>
        </div>
      </div>
      {isOwn && (
        <button
          className="element__card-delete"
          aria-label="удалить"
          onClick={handleDeleteClick}
        />
      )}
    </div>
  );
}

export default Card;
