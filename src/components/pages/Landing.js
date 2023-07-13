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
      <main className='hero'></main>
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
