import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import headerLogo from "../images/logo.svg";

function Header({ isLoggedIn, signOut, userEmail }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isRegister = location.pathname.includes("/sign-up");
  const isSignIn = location.pathname.includes("/sign-in");

  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={headerLogo} alt="лого" />
        {isLoggedIn &&
          <div className="header__container header__container_profile">
            <p className="header__email">{userEmail}</p>
            <button className="header__button" onClick={signOut}>
              Выход
            </button>
          </div>
        }
        {isRegister &&
          <button
            className="header__button"
            onClick={() => navigate("/sign-in", { replace: true })}
          >
            Вход
          </button>
        }
        {isSignIn &&
          <button
            className="header__button"
            onClick={() => navigate("/sign-up", { replace: true })}
          >
            Регистрация
          </button>
        }
      </div>
    </header>
  );
}

export default Header;