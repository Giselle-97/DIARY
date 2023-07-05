import '../../styles/pages/landingtwo.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className=''>
        <Link className='' to='/home'>
          Home
        </Link>
        <Link className='' to='/diary'>
          Agenda
        </Link>
        <Link Link className='btn__notes' to='/notes'>
          Notas
        </Link>
        <Link Link className='btn__calendar' to='/calendar'>
          Calendar
        </Link>
        <Link Link className='btn__contact' to='/contact'>
          Contacto
        </Link>
        <Link Link className='btn__contact' to='/settings'>
          Ajustes
        </Link>
      </div>
    </>
  );
}
export default Header;
