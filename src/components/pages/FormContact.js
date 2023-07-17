import '../../styles/pages/formContact.scss';

function FormContact() {
  return (
    <div className='containerFormC'>
      <div className='form-box'>
        <form className='formContact'>
          <h2 className='titleDateContact'>Datos de Contacto</h2>
          <div className='divInputC'>
            <input type='text' required />
            <label className='lblName'>
              <span className='textName'>Nombre</span>
            </label>
          </div>

          <div className='divInputC'>
            <input type='text' required />
            <label className='lblLastName'>
              <span className='textLastName'>Apellidos</span>
            </label>
          </div>

          <div className='divInputC'>
            <input type='text' required />
            <label className='lblEmail'>
              <span className='textEmail'>Correo eletrónico</span>
            </label>
          </div>

          <div className='divInputC'>
            <input type='phone' required />
            <label className='lblPhone'>
              <span className='textPhone'>Teléfono</span>
            </label>
          </div>

          <div className='divInputC'>
            <input type='questions' required />
            <label className='lblQuestions'>
              <span className='textQuestions'>¿En qué le puedo ayudar?</span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
export default FormContact;
