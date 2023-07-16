import '../../styles/pages/notes.scss';
import Header from '../Header';
import Footer from '../Footer';

function Notes() {
  return (
    <div className='containerNotes'>
      <Header />
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
      <Footer />
    </div>
  );
}
export default Notes;
