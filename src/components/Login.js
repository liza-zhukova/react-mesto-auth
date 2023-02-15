import React, {useState} from 'react';
import * as auth from '../utils/auth.js';
import { useNavigate } from 'react-router-dom';

function Login({handleLogin}) {

  const navigate = useNavigate();

  const [data, setData] = useState({
    password: '',
    email: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;

    setData({
      ...data,
      [name]: value
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    auth.authorize(data.password, data.email)
    .then((data) =>{
      if(data.token){
      handleLogin();
      localStorage.setItem('jwt', data.token)
      navigate('/');
      }
    })
    .catch(err => console.log(err));
};

  return(
    <div className='auth'>
    <h2 className='auth__title'>Вход</h2>
    <form className='auth__form' onSubmit={handleSubmit}>
        <label className='auth__label'>
            <input className='auth__input' type='email' name='email' onChange={handleChange} value={data.email || ''} placeholder='Email'></input>
        </label>
        <label className='auth__label'>
            <input className='auth__input' type='password' name='password' onChange={handleChange} value={data.password || ''} placeholder='Пароль'></input>
        </label>
        <button className='auth__button' type='submit'>Войти</button>
    </form>
</div>
  )
  }
export default Login;