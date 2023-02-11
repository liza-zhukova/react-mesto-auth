import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import * as auth from '../utils/auth.js';

function Login(handleLogin) {
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
    if (!data.password || !data.email){
      return;
    }
    auth.authorize(data.password, data.email)
      .then((data) => {
  if (data.jwt){
    setData({password:'', email:''});
    handleLogin();
    navigate('/', {replace: true});
  }
 }) 
  }

  return(
    <div className='auth'>
    <h2 className='auth__title'>Вход</h2>
    <form className='auth__form' onSubmit={handleSubmit}>
        <label className='auth__label'>
            <input className='auth__input' onChange={handleChange} value={data.email || ''} ></input>
        </label>
        <label className='auth__label'>
            <input className='auth__input' type='password' onChange={handleChange} value={data.password || ''} ></input>
        </label>
        <button className='auth__button' type='submit'>Войти</button>
    </form>
</div>
  )
}

export default Login;