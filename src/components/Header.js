import { Route, Routes, useNavigate } from "react-router-dom";
import headerLogo from "../images/logo.svg";

function Header({ signOut, userEmail }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={headerLogo} alt="лого" />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="header__container header__container_profile">
                <p className="header__email">{userEmail}</p>
                <button className="header__button" onClick={signOut}>
                  Выход
                </button>
              </div>
            }
          />
          <Route
            path="/sign-up"
            element={
              <button
                className="header__button"
                onClick={() => navigate("/sign-in", { replace: true })}
              >
                Вход
              </button>
            }
          />
          <Route
            path="sign-in"
            element={
              <button
                className="header__button"
                onClick={() => navigate("/sign-up", { replace: true })}
              >
                Регистрация
              </button>
            }
          />
        </Routes>
      </div>
    </header>
  );
}

export default Header;
