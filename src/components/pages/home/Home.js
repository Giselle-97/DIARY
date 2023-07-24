import '../../../styles/pages/home.scss';
import Header from '../../Header';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import imgHome from '../../../images/home.png';
import imgIconDiary from '../../../images/diary2.png';
import imgNotes from '../../../images/notas.png';
import imgCalendar from '../../../images/calendario3.png';
import imgContact from '../../../images/contacto1.png';
import imgSettings from '../../../images/ajustes1.png';

function Home() {
  return (
    <div className='containerHome'>
      <Header />
      <main className='heroHome'>
        <div>
          <p className='textWelcome'>Bienvenid@ a tu espacio personal!!!</p>
        </div>
        <div className='boxIconHome'>
          <div className='containerInfoIcon'>
            <Link className='linkHome2 link-icons' to='/Home'>
              <img className='linkHome2__icon2 iconM' src={imgHome} alt='' />
            </Link>
            <p>Volver a la página principal.</p>
          </div>
          <div className='containerInfoIcon'>
            <Link className='linkDiary2 link-icons' to='/Diary'>
              <img
                className='linkDiary2__icon2 iconM'
                src={imgIconDiary}
                alt='diary'
              />
            </Link>
            <p>Acceder a tu agenda personal.</p>
          </div>
          <div className='containerInfoIcon'>
            <Link Link className='linkNotes2 link-icons' to='/Notes'>
              <img
                className='linkNotes2__icon2 iconM'
                src={imgNotes}
                alt='notes'
              />
            </Link>
            <p>Explorar tus notas y apuntes guardados.</p>
          </div>
          <div className='containerInfoIcon'>
            <Link Link className='linkCalendar2 link-icons' to='/Calendar'>
              <img
                className='linkCalendar2__icon2 iconM'
                src={imgCalendar}
                alt='calendar'
              />
            </Link>
            <p>Ver tu calendario con eventos y citas.</p>
          </div>
          <div className='containerInfoIcon'>
            <Link Link className='linkContact2 link-icons' to='/Contact'>
              <img
                className='linkContact2__icon2 iconM'
                src={imgContact}
                alt='contact'
              />
            </Link>
            <p>Acceder a la página de contacto.</p>
          </div>
          <div className='containerInfoIcon'>
            <Link Link className='linkSettings2 link-icons' to='/Settings2'>
              <img
                className='linkSettings2__icon2 iconM'
                src={imgSettings}
                alt='settings2'
              />
            </Link>
            <p>Configurar tus ajustes personales.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Home;
