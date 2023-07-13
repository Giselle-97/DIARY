import '../../styles/pages/landing.scss';
//import { Link } from 'react-router-dom';
//import imgDiary from '../../images/222.png';
//import imgLogo from '../../images/Giselle.png';
import imgInstagram from '../../images/instagram.png';
import imgFacebook from '../../images/facebook.png';
import imgLinkedin from '../../images/linkedin0 (1).png';

function Landing() {
  /*EVENTO CLIK
  hay que traer btnregistro, btn iniciar s, contenedor registro, contenedor inicar sesión"
  if(e.target===$btnSingIn || e.target === $btnSingUp){
    $singIn.classList.toggle('active);
    $sinUp.classList.toggle('active')
  }
  */
  return (
    <div className='containerLanding'>
      <main className='hero'>
        <div className='containerForm signUp'>
          <div className='welcomeBack'>
            <div className='message'>
              <h2>Bienvenido a Diary</h2>
              <p>Si ya tienes una cuenta por favor inicia sesión aquí</p>
              <button className='signUpBtn'>Iniciar sesión</button>
            </div>
          </div>
          <form className='formL'>
            <p className='createAccount'>Crear una cuenta</p>
            <div className='icons'>
              <div className='borderIcon iconInstagram'>
                <img src={imgInstagram} alt='logo instagram' className='icon' />
              </div>
              <div className='borderIcon iconFacebook'>
                <img src={imgFacebook} alt='logo facebook' className='icon' />
              </div>
              <div className='borderIcon iconLinkedin'>
                <img src={imgLinkedin} alt='logo linkedin' className='icon' />
              </div>
            </div>
            <input type='text' placeholder='name' />
            <input type='email' placeholder='email' />
            <input type='password' placeholder='password' />
            <input type='button' value='Registrarse' className='inputBtn' />
          </form>
        </div>
        <div className='containerForm signIn'>
          <div className='welcomeBack'>
            <div className='message'>
              <h2>Bienvenido de nuevo</h2>
              <p>Si aún no tienes una cuenta por favor registrese aquí</p>
              <button className='signInBtn'>Registrarse</button>
            </div>
          </div>
          <form className='formL'>
            <p className='createAccount'>Iniciar sesión</p>
            <div className='icons'>
              <div className='borderIcon iconInstagram'>
                <img src={imgInstagram} alt='logo instagram' className='icon' />
              </div>
              <div className='borderIcon iconFacebook'>
                <img src={imgFacebook} alt='logo facebook' className='icon' />
              </div>
              <div className='borderIcon iconLinkedin'>
                <img src={imgLinkedin} alt='logo linkedin' className='icon' />
              </div>
            </div>

            <input type='email' placeholder='email' />
            <input type='password' placeholder='password' />
            <input type='button' value='Iniciar sesión' className='inputBtn' />
          </form>
        </div>
      </main>
    </div>
  );
}

export default Landing;
