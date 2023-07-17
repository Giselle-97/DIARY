import '../../styles/pages/formContact.scss';

function FormContact() {
  return (
    <div className='containerFormC'>
      <form className='formContact' autoComplete='off'>
        <h2 className='titleDateContact'>Datos de Contacto</h2>
        <div className='divInputC'>
          <input type='text' name='name' placeholder='Nombre' />

          <input type='text' name='lastname' placeholder='Apellidos' />

          <input type='email' name='email' placeholder='Correo Electrónico' />

          <input type='tel' name='phone' placeholder='Teléfono' />

          <textarea
            name='message'
            cols='30'
            rows='5'
            placeholder='Mensaje'
            sentences
          ></textarea>
          <input className='btnContact' type='submit' name='' value='Enviar' />
        </div>
      </form>
    </div>
  );
}
export default FormContact;
