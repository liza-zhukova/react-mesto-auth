import { useLocation, useNavigate } from 'react-router-dom';
import headerLogo from '../images/logo.svg'


function Header(){

  const navigate = useNavigate();
  const location = useLocation();

  const isSignUp = location.pathname.includes('/sign-up');
  const isProfile = location.pathname.includes('/');

    return(
        <header className="header">
          <div className='header__container'>
             <img className="header__logo" src={headerLogo} alt="лого" />
             {isSignUp ? 
               <button className='header__button' onClick={()=> navigate('/sign-in', {replace:true})}>Вход</button>      
               :
                <button className='header__button' onClick={()=> navigate('/sign-up', {replace:true})}>Регистрация</button>  
             }
             {isProfile &&
              <>
                <button className='header__button'></button>
                <button className='header__button' onClick={() => navigate('/sign-in', {replace: true})}>Выход</button>
              </>
             }
          </div>
        </header>
    )
}

export default Header;