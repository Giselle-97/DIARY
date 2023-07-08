import { Link } from 'react-router-dom';
import imgDiary from '../../images/logo.png';
import imgLogo from '../../images/giselle-logo.png';
import '../../styles/pages/landing.scss';

function Landing() {
  return (
    <div>
      <header className='header'>
        <img className='header__img' src={imgDiary} alt='' />
        <p className='header__text'>
          "El secreto del ÉXITO es organizar bien tu TIEMPO"
        </p>
      </header>
      <main className='hero'>
        <div className='divHero'>
          <form className='container'>
            <fieldset className='container__login'>
              <legend className='legend'>Crea tu perfil</legend>
              <div className='container__input'>
                <label className='userLabel' for='user'>
                  Usuario
                </label>
                <input
                  className='user'
                  type='text'
                  name='user'
                  placeholder='nina@gmail.com'
                />
              </div>
              <div className='container__input'>
                <label className='userLabel' for='password'>
                  Contraseña
                </label>
                <input
                  className='password'
                  type='text'
                  name='password'
                  placeholder='nina555'
                />
              </div>
              <div className='divBtn'>
                <button className='btn'>Registrarse</button>
              </div>
            </fieldset>
          </form>
        </div>
      </main>
      <footer className='footer'>
        <div className='divFooter'>
          <nav>
            <Link className='divFooter__btn' to='/contact'>
              Contacto
            </Link>
            <Link to='/home' className='divReturn__text'>
              Home
            </Link>
          </nav>
          <img className='divFooter__img' src={imgLogo} alt='' />
        </div>
      </footer>
    </div>
  );
}

export default Landing;
