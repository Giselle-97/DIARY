import '../../styles/pages/home.scss';
import Header from '../Header';
import Footer from '../Footer';

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
      <Footer />
    </div>
  );
}
export default Home;
