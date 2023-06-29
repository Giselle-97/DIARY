import '../../styles/pages/diary.scss';

function Diary() {
  return (
    <>
      <div>
        <p>365 días y un millón de planes</p>
        <p>Hoy</p>
        <p className='text'>Mañana</p>
        <p>Empiezo</p>
      </div>
      <div>
        <p>Contenido de la lista</p>
        <ul>
          <li>
            <form action=''>
              <label>Ir al gym</label>
              <input type='checkbox' />
              <label>Ir al gym</label>
              <input type='checkbox' />
              <label>Ir al gym</label>
              <input type='checkbox' />
            </form>
          </li>
        </ul>
        <button>Guardar</button>
      </div>
    </>
  );
}
export default Diary;
