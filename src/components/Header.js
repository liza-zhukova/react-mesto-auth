import { useLocation, useNavigate } from 'react-router-dom';
import headerLogo from '../images/logo.svg'


function Header(){

  const navigate = useNavigate();
  const location = useLocation();

  const isSignUp = location.pathname.includes('/sign-up');

    return(
        <header className="header">
          <div className='header__container'>
          <img className="header__logo" src={headerLogo} alt="лого" />
          {isSignUp ? 
          <button className='header__button' onClick={()=> navigate('/sign-in', {replace:false})}>Вход</button>
               
            :
            <button className='header__button' onClick={()=> navigate('/sign-up', {replace:false})}>Регистрация</button>  
          }
                </div>
        </header>
    )
}

export default Header;