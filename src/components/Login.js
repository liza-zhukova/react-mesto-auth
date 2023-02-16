import React, { useState } from "react";

function Login({ handleAuthorize }) {
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
    handleAuthorize(data.password, data.email);
  };

  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <label className="auth__label">
          <input
            className="auth__input"
            type="email"
            name="email"
            onChange={handleChange}
            value={data.email || ""}
            placeholder="Email"
          ></input>
        </label>
        <label className="auth__label">
          <input
            className="auth__input"
            type="password"
            name="password"
            onChange={handleChange}
            value={data.password || ""}
            placeholder="Пароль"
          ></input>
        </label>
        <button className="auth__button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}
export default Login;