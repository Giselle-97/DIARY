import '../../styles/pages/diary.scss';

function Diary() {
  return (
    <>
      <div>
        <p className='text_diary'>365 días y un millón de planes..</p>
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
        <button className='btn1'>Guardar</button>
      </div>
    </>
  );
}
export default Diary;
