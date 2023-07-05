import '../../styles/pages/home.scss';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className='containerLandingT'>
        <p className='containerLandingT__text'>
          Bienvenid@ a tu espacio personal!!!
        </p>
        <div className='containerBtn'>
          <Link className='btn__diary' to='/Diary'>
            <button className='btnDiary btn1'>Agenda</button>
          </Link>

          <Link Link className='btn__calendar' to='/Calendar'>
            <button className='btnCalendar btn1'>Calendar</button>
          </Link>
          <Link Link className='btn__notes' to='/Notes'>
            <button className='btnContact btn1'>Notas</button>
          </Link>
          <Link Link className='btn__contact' to='/Contact'>
            <button className='btnContact btn1'>Contacto</button>
          </Link>
        </div>
        <p className='containerLandingT__text2'>
          Haz que cada día valga la pena
        </p>
        <p className='containerLandingT__text3'>
          Gestiona tu tiempo....sácale el mayor provecho
        </p>
      </div>
    </>
  );
}
export default Home;
