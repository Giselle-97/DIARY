import '../../styles/pages/landing.scss';
import { Link } from 'react-router-dom';
import imgDiary from '../../images/222.png';
import imgLogo from '../../images/Giselle.png';
//import imgIntagram from '../../images/instagram.png';
//import imgFacebook from '../../images/facebook.png';
//import imgLinkedin from '../../images/linkedin0 (1).png';

function Landing() {
  return (
    <div className='containerLanding'>
      <header className='header'>
        <img className='header__img' src={imgDiary} alt='logo diary' />
        <p className='header__text'>
          "El secreto del ÉXITO es organizar bien tu TIEMPO"
        </p>
      </header>
      <main className='hero'>
        <div className='divForm'>
          <div className='box1'>
            <p className='text1'>Bienvenido</p>
            <form className='form'>
              <div className='inputBox'>
                <input
                  type='text'
                  placeholder='email'
                  className='inputControl'
                />
              </div>

              <div className='inputBox'>
                <input
                  type='password'
                  placeholder='Password'
                  className='inputControl'
                />

                <div className='inputLink'>
                  <Link to='' className='inputLink__text'>
                    Has olvidado tu contraseña
                  </Link>
                </div>
              </div>
              <button type='submit' className='btnSubmit'>
                Iniciar sesión
              </button>
            </form>
            <p>No tienes una cuenta?</p>
          </div>
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
          <img className='divFooter__img' src={imgLogo} alt='logo' />
        </div>
      </footer>
    </div>
  );
}

export default Landing;
