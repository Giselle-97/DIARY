import '../../styles/pages/home.scss';
import { Link } from 'react-router-dom';
import imgLogo from '../../images/Giselle.png';
import Header from '../Header';

function Home() {
  return (
    <div className='containerHome'>
      <Header />
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
