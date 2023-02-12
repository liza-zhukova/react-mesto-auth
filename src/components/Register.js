import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import * as auth from '../utils/auth.js';

function Register() {
  const [data, setData] = useState({
    password: '',
    email: ''
  })

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;

    setData({
      ...data,
      [name]: value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
        auth.register(data.password, data.email)
        .then(() => {
          navigate('/login', {replace: true})
          });
  }

  return (
    <div className='auth'>
        <h2 className='auth__title'>Регистрация</h2>
        <form className='auth__form' onSubmit={handleSubmit}>
            <label className='auth__label'>
                <input className='auth__input' onChange={handleChange} value={data.email || ''} placeholder='Email'></input>
            </label>
            <label className='auth__label'>
                <input className='auth__input' type='password' onChange={handleChange} value={data.password || ''} placeholder='Пароль'></input>
            </label>
            <button className='auth__button' type='submit'>Зарегистрироваться</button>
        </form>
        <Link className='auth__login' to={'/sign-in'}>Уже зарегистрированы? Войти</Link>
    </div>
  )
} 

export default Register;