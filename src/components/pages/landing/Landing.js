import '../../../styles/pages/landing.scss';
import imgDiary from '../../../images/log5.png';
import FormLanding from './FormLanding';
import Footer from '../../Footer';

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
      <Footer />
    </div>
  );
}

export default Landing;
