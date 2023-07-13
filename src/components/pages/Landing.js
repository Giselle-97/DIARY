import '../../styles/pages/landing.scss';
//import { Link } from 'react-router-dom';
import imgDiary from '../../images/222.png';
//import imgLogo from '../../images/Giselle.png';
import FormLanding from '../FormLanding';
import Footer from '../Footer';

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
        <FormLanding />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default Landing;
