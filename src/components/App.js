import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Diary from './pages/Diary';
import Notes from './pages/Notes';
import Calendar from './pages/Calendar';
import Contact from './pages/Contact';
import Settings from './pages/Settings';
import imgDiary from '../images/logo.png';
import imgLogo from '../images/giselle-logo.png';
import { Link } from 'react-router-dom';
import '../styles/App.scss';

function App() {
  const { pathname } = useLocation();

  if (pathname === '/') {
    return <Landing></Landing>;
  }
  return (
    <div>
      <header className='header'>
        <img className='header__img' src={imgDiary} alt='' />
      </header>
      <main>
        <Routes>
          <Route path='/home' element={<Home></Home>} />
          <Route path='/diary' element={<Diary></Diary>} />
          <Route path='/notes' element={<Notes></Notes>} />
          <Route path='/calendar' element={<Calendar></Calendar>} />
          <Route path='/contact' element={<Contact></Contact>} />
          <Route path='/settings' element={<Settings></Settings>} />
        </Routes>
      </main>
      <footer className='footer'>
        <div className='divFooter'>
          <nav>
            <Link className='divFooter__btn' to='/contact'>
              Contacto
            </Link>
            <Link to='/home' className='divReturn__text'>
              Home
            </Link>
          </nav>
          <img className='divFooter__img' src={imgLogo} alt='' />
        </div>
      </footer>
    </div>
  );
}

export default App;
