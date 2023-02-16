import { useState } from "react";
import { Link } from "react-router-dom";

function Register({ handleRegister }) {
  const [data, setData] = useState({
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(data.password, data.email);
  };

  return (
    <div className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <label className="auth__label">
          <input
            className="auth__input"
            name="email"
            type="email"
            onChange={handleChange}
            value={data.email || ""}
            placeholder="Email"
          ></input>
        </label>
        <label className="auth__label">
          <input
            className="auth__input"
            name="password"
            type="password"
            onChange={handleChange}
            value={data.password || ""}
            placeholder="Пароль"
          ></input>
        </label>
        <button className="auth__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <Link className="auth__login" to={"/sign-in"}>
        Уже зарегистрированы? Войти
      </Link>
    </div>
  );
}

export default Register;