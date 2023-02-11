export const BASE_URL = 'https://api.nomoreparties.co';

   function getResponse (res){
      if (res.ok) {
          return res.json()
      } return Promise.reject(`Ошибка ${res.status}`)
    }

    export const register = (password, email) =>{
      return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: password,
          email: email,
        }),
      })
      .then(getResponse);
    }

    export const authorize = (password, email) =>{
      return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: password,
          email: email,
        })
      })
      .then((data) => {
        if (data.user){
          localStorage.setItem('jwt', data.jwt);
          return data;
        }
      })
      .then(getResponse);
    }
  
    export const toCheck = (token) =>{
      return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      .then(getResponse);
    }

    