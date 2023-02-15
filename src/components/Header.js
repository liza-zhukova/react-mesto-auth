import { useNavigate } from 'react-router-dom';
import headerLogo from '../images/logo.svg';


function Header({isLoggedIn, signOut}){

  const navigate = useNavigate();

    return(
        <header className="header">
          <div className='header__container'>
             <img className="header__logo" src={headerLogo} alt="лого" />
             {isLoggedIn ? 
             <>
            <button className='header__button'></button>
            <button className='header__button' onClick={signOut}>Выход</button>
            </>
            :
            <>
            <button className='header__button' onClick={()=> navigate('/sign-in', {replace:true})}>Вход</button>  
            <button className='header__button' onClick={()=> navigate('/sign-up', {replace:true})}>Регистрация</button> 
            </>
            }
          </div>
        </header>
    )
}

export default Header;