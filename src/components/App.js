import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Diary from './pages/Diary';
import Notes from './pages/Notes';
import Calendar from './pages/Calendar';
import Contact from './pages/Contact';
import Settings from './pages/Settings';
//import imgDiary from '../images/logo.png';
//import imgLogo from '../images/giselle-logo.png';
//import { Link } from 'react-router-dom';
import '../styles/App.scss';

function App() {
  const { pathname } = useLocation();

  if (pathname === '/') {
    return <Landing></Landing>;
  }
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home></Home>} />
        <Route path='/diary' element={<Diary></Diary>} />
        <Route path='/notes' element={<Notes></Notes>} />
        <Route path='/calendar' element={<Calendar></Calendar>} />
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path='/settings' element={<Settings></Settings>} />
      </Routes>
    </>
  );
}

export default App;
