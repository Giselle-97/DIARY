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

function Home() {
  return (
    <>
      <header className='headerHome'>
        <div className='headerHome__divImg'>
          <img className='header__img' src={imgDiary} alt='' />
        </div>
        <div className='headerHome__divIcon'>
          <Link className='linkHome' to='/Home'>
            <div className='divHome'>
              <p className='divHome__text'>Home</p>
              <img className='divHome__icon' src={imgHome} alt='' />
            </div>
          </Link>
          <Link className='linkDiary' to='/Diary'>
            <div className='divDiary'>
              <p className='divDiary__text'>Agenda</p>
              <img className='divDiary__icon' src={imgIconDiary} alt='' />
            </div>
          </Link>
          <Link Link className='linkNotes' to='/Notes'>
            <div className='divNotes'>
              <p className='divNotes__text'>Notas</p>
              <img className='divNotes__icon' src={imgNotes} alt='' />
            </div>
          </Link>
          <Link Link className='linkCalendar' to='/Calendar'>
            <div className='divCalendar'>
              <p className='divCalendar__text'>Calendar</p>
              <img className='divCalendar__icon' src={imgCalendar} alt='' />
            </div>
          </Link>
          <Link Link className='linkContact' to='/Contact'>
            <div className='divContact'>
              <p className='divContact__text'>Contacto </p>
              <img className='divContact__icon' src={imgContact} alt='' />
            </div>
          </Link>
          <Link Link className='linkSettings' to='/Settings'>
            <div className='divSettings'>
              <p className='divSettings__text'>Ajustes</p>
              <img className='divSettings__icon' src={imgSettings} alt='' />
            </div>
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
          <img className='divFooter__img' src={imgLogo} alt='' />
        </div>
      </footer>
    </>
  );
}
export default Home;
