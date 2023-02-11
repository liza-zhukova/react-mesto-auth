import { useContext } from "react";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  cards,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container" onClick={onEditAvatar}>
          <img className="profile__avatar" src={`${currentUser.avatar}`} alt='аватар' />
          <button
            className="profile__avatar-edit"
            type="button"
            aria-label="аватар профиля"
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__info-name">{currentUser.name}</h1>
          <button
            className="profile__info-edit-button"
            onClick={onEditProfile}
            type="button"
            aria-label="редактировать профиль"
          ></button>
          <p className="profile__info-opinion">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          onClick={onAddPlace}
          type="button"
          aria-label="добавить карточку"
        ></button>
      </section>
      <section className="cards">
        <div className="element">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            ></Card>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
