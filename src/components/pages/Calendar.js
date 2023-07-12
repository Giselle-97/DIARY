import '../../styles/pages/calendar.scss';

function Calendar() {
  return (
    <div className='containerCalendar'>
      <form class='form'>
        <input type='text' required />
        <label class='lbl-nombre'>
          <span class='text-nomb'>Nombre</span>
        </label>
      </form>
    </div>
  );
}
export default Calendar;
