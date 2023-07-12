import '../../styles/pages/notes.scss';

function Notes() {
  return (
    <div className='containerNotes'>
      <div className='box'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <p>Aquí va la fecha</p>
        <form action=''>
          <select name='' id=''>
            <option value=''>Fuente</option>
            <option value=''>Estilos</option>
            <option value=''>Stikers</option>
          </select>
        </form>
        <p>Si puedes soñarlo, puedes hacerlo</p>
        <p>Comienza a escribir aquí......</p>
        <button className='btn1'>Guardar</button>
      </div>
    </div>
  );
}
export default Notes;
