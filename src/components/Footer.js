import '../styles/pages/footer.scss';
import { Link } from 'react-router-dom';
import imgLogo from '../images/log4.png';

function Footer() {
  return (
    <>
      <div className='divFooter'>
        <nav>
          <Link className='divFooter__btn' to='/contact'>
            Contacto
          </Link>
          <Link to='/home' className='divReturn__text'>
            Home
          </Link>
        </nav>
        <img className='divFooter__img' src={imgLogo} alt='logo giselle' />
      </div>
    </>
  );
}
export default Footer;
