import React from "react";
import succesImg from "../images/succes.png";
import failedImg from "../images/failed.png";

function InfoTooltip({ isOpen, onClose, isSucces }) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        {isSucces ? (
          <>
            <img className="popup__img" src={succesImg} alt="успешно" />
            <p className="popup__article">Вы успешно зарегистрировались!</p>
            <button
              className="popup__close"
              type="button"
              onClick={onClose}
              aria-label="закрыть"
            ></button>
          </>
        ) : (
          <>
            <img className="popup__img" src={failedImg} alt="ошибка" />
            <p className="popup__article">
              Что-то пошло не так! Попробуйте ещё раз.
            </p>
            <button
              className="popup__close"
              type="button"
              onClick={onClose}
              aria-label="закрыть"
            ></button>
          </>
        )}
      </div>
    </div>
  );
}

export default InfoTooltip;
