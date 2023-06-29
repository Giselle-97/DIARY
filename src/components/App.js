import { Routes, Route, NavLink } from 'react-router-dom';
import Landing from './pages/Landing';
import Landingtwo from './pages/Landingtwo';
import Diary from './pages/Diary';
import Notes from './pages/Notes';
import Calendar from './pages/Calendar';
import Contact from './pages/Contact';
import Settings from './pages/Settings';
import imgDiary from '../images/logo-diary.png';
import imgLogo from '../images/logo-giselle.png';
import '../styles/App.scss';

function App() {
  return (
    <div>
      <header className='header'>
        <img className='header__img' src={imgDiary} />

        <ul>
          <li>
            <NavLink to='/'>Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/diary'>Agenda</NavLink>
          </li>
          <li>
            <NavLink to='/notes'>Notas</NavLink>
          </li>
          <li>
            <NavLink to='/calendar'>Calendar</NavLink>
          </li>
          <li>
            <NavLink to='/contacto'>Contacto</NavLink>
          </li>
          <li>
            <NavLink to='/settings'>Ajustes</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Landing></Landing>} />
          <Route path='/landingtwo' element={<Landingtwo></Landingtwo>} />
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
            <NavLink className='divFooter__btn' to='/contact'>
              Contacto
            </NavLink>
          </nav>
          <img src={imgLogo} />
        </div>
      </footer>
    </div>
  );
}

export default App;
