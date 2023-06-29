import { Routes, Route, NavLink } from 'react-router-dom';
import Landing from './pages/Landing';
import Contact from './pages/Contact';

import '../styles/App.scss';

function App() {
  return (
    <div>
      <header class='header'>
        <img
          class='header__img'
          src='./assets/images/logo-diary3.png'
          alt='Logo diary'
        />
        <ul>
          <li>
            <NavLink to='/'>Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/diary'>Agenda</NavLink>
          </li>
          <li>
            <NavLink to='/calendar'>Calendar</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Landing></Landing>} />
          <Route path='/contact' element={<Contact></Contact>} />
        </Routes>
      </main>
      <footer class='footer'>
        <div class='divFooter'>
          <nav>
            <NavLink className='divFooter__btn' to='/contact'>
              Contacto
            </NavLink>
          </nav>
          <img
            class='divFooter__img'
            src='./assets/images/logo-giselle.png'
            alt='Logo diary'
          />
        </div>
      </footer>
    </div>
  );
}

export default App;
