import '../../styles/pages/home.scss';
import { Link } from 'react-router-dom';
import imgLogo from '../images/giselle-logo.png';

function Footer() {
  return (
    <>
      <div className='divFooter'>
        <nav>
          <Link className='divFooter__btn' to='/contact'>
            Contacto
          </Link>
        </nav>
        <img className='divFooter__img' src={imgLogo} alt='' />
      </div>
    </>
  );
}
export default Footer;
