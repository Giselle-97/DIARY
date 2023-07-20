import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from './pages/landing/Landing';
import Home from './pages/home/Home';
import Diary from './pages/diary/Diary';
import Notes from './pages/notes/Notes';
import MyCalendar from './pages/calendar/MyCalendar';
import Contact from './pages/contact/Contact';
import Settings from './pages/settings/Settings';
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
        <Route path='/calendar' element={<MyCalendar></MyCalendar>} />
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path='/settings' element={<Settings></Settings>} />
      </Routes>
    </>
  );
}

export default App;
