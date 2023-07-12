import '../../styles/pages/home.scss';
import { Link } from 'react-router-dom';
import imgDiary from '../../images/222.png';
import imgLogo from '../../images/Giselle.png';
import imgHome from '../../images/home.png';
import imgIconDiary from '../../images/diary2.png';
import imgNotes from '../../images/notas.png';
import imgCalendar from '../../images/calendario3.png';
import imgContact from '../../images/contacto1.png';
import imgSettings from '../../images/ajustes1.png';
import imgMenu from '../../images/menu.png';

function Home() {
  return (
    <div className='containerHome'>
      <header className='headerHome'>
        <div className='headerHome__divImg'>
          <img
            className='headerHome__divImg--diary'
            src={imgDiary}
            alt='logo diary'
          />
        </div>

        <div className='headerHome__divIcon'>
          <Link className='linkMenu' to='/Menu'>
            <img className='linkMenu__icon' src={imgMenu} alt='menu' />
          </Link>
          <Link className='linkHome' to='/Home'>
            <img className='linkHome__icon' src={imgHome} alt='' />
          </Link>
          <Link className='linkDiary' to='/Diary'>
            <img className='linkDiary__icon' src={imgIconDiary} alt='diary' />
          </Link>
          <Link Link className='linkNotes' to='/Notes'>
            <img className='linkNotes__icon' src={imgNotes} alt='notes' />
          </Link>
          <Link Link className='linkCalendar' to='/Calendar'>
            <img
              className='linkCalendar__icon'
              src={imgCalendar}
              alt='calendar'
            />
          </Link>
          <Link Link className='linkContact' to='/Contact'>
            <img className='linkContact__icon' src={imgContact} alt='contact' />
          </Link>
          <Link Link className='linkSettings' to='/Settings'>
            <img
              className='linkSettings__icon'
              src={imgSettings}
              alt='settings'
            />
          </Link>
        </div>
      </header>
      <main className='heroHome'>
        <div className='containerLandingT'>
          <p className='containerLandingT__text'>
            Bienvenid@ a tu espacio personal!!!
          </p>

          <p className='containerLandingT__text2'>
            Haz que cada día valga la pena
          </p>
          <p className='containerLandingT__text3'>
            Gestiona tu tiempo....sácale el mayor provecho
          </p>
        </div>
      </main>
      <footer className='footerHome'>
        <div className='divFooter'>
          <nav>
            <Link className='divFooter__btn' to='/contact'>
              Contacto
            </Link>
          </nav>
          <img className='divFooter__img' src={imgLogo} alt='logo' />
        </div>
      </footer>
    </div>
  );
}
export default Home;
