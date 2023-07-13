import '../../styles/pages/formContact.scss';

function FormContact() {
  return (
    <div className='containerFormC'>
      <form class='formContact'>
        <div className='divInputC'>
          <input type='text' required />
          <label class='lblName'>
            <span class='textName'>Nombre</span>
          </label>
        </div>

        <div>
          <input type='text' required />
          <label class='lblLastName'>
            <span class='textLastName'>Apellidos</span>
          </label>
        </div>

        <div>
          <input type='email' required />
          <label class='lblEmail'>
            <span class='textEmail'>Correo eletrónico</span>
          </label>
        </div>

        <div>
          <input type='phone' required />
          <label class='lblPhone'>
            <span class='textPhone'>Teléfono</span>
          </label>
        </div>

        <div>
          <input type='questions' required />
          <label class='lblQuestions'>
            <span class='textQuestions'>¿En qué le puedo ayudar?</span>
          </label>
        </div>
      </form>
    </div>
  );
}
export default FormContact;
