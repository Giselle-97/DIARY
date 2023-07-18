import '../../styles/pages/mycalendar.scss';
import Header from '../Header';
import Footer from '../Footer';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

function MyCalendar() {
  const myEventsList = [
    {
      id: 0,
      title: 'All Day Event very long title',
      allDay: true,
      start: new Date(2023, 6, 17),
      end: new Date(2023, 6, 17),
    },
  ];
  return (
    <div className='containerCalendar'>
      <Header />
      <div>
        <Calendar
          localizer={localizer}
          events={myEventsList}
          startAccessor='start'
          endAccessor='end'
          style={{ height: 500 }}
        />
      </div>
      <Footer />
    </div>
  );
}
export default MyCalendar;
