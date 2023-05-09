class Api{
    constructor({url, headers}){
      this._url = url;
      this._headers = headers;
    }
  
    getProfileInfo() {
      this._profileInfo = fetch(`${this._url}/users/me`, {
        method: 'GET',
        headers: this._headers,
        credentials: 'include',
      })
      .then(this._checkPromise);
      return this._profileInfo;
    }
  
    getCards() {
      this._cards = fetch(`${this._url}/cards`, {
        method: 'GET',
        headers: this._headers,
        credentials: 'include',
      })
        .then(this._checkPromise);
        return this._cards;
    }
  
    editProfile(userOpinion) {
      this._editInfo = fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify({
          name: userOpinion.name,
          about: userOpinion.about,
        }),
      })
      .then(this._checkPromise);
      return this._editInfo;
    }
  
    addNewCards(name, link) {
      this._newCards = fetch(`${this._url}/cards`, {
        method: 'POST',
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify({
          name: name,
          link: link,
        }),
      })
      .then(this._checkPromise);
      return this._newCards;
    }
  
    likeCard(like) {
      this._addedLike = fetch(`${this._url}/cards/${like._id}/likes`, {
        method: 'PUT',
        headers: this._headers,
        credentials: 'include',
      })
      .then(this._checkPromise);
      return this._addedLike;
    }
  
    removeLikeCard(like) {
      this._removedLike = fetch(`${this._url}/cards/${like._id}/likes`, {
        method: 'DELETE',
        headers: this._headers,
        credentials: 'include',
      })
      .then(this._checkPromise);
      return this._removedLike;
    }
      
    deleteCard(id) {
      this._deletedCard = fetch(`${this._url}/cards/${id}`, {
        method: 'DELETE',
        headers: this._headers,
        credentials: 'include',
      })
      .then(this._checkPromise);
      return this._deletedCard;
    }

    changeLikeCardStatus(cardId, isLiked) {
      this._likedCard = fetch(`${this._url}/cards/${cardId}/likes`, {
          method: isLiked ? "PUT" : "DELETE",
          credentials: 'include',
          headers: this._headers,
      })
      .then(this._checkPromise);
      return this._likedCard;
    }
      
    updateAvatar(link) {
      this._avatar = fetch(`${this._url}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify({
          avatar: link.avatar,
        }),
      })
      .then(this._checkPromise);
      return this._avatar;
    }
  
    _checkPromise(response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Ошибка: ${response.status}`);
    }
  }



  const api = new Api({
    url: 'https://api.mesto.project.nomoredomains.monster',
    headers: {
      'Content-Type': 'application/json',
      authorization : `Bearer ${localStorage.getItem('jwt')}`,
    },
  })

  export { api };