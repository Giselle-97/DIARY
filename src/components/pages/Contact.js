import '../../styles/pages/contact.scss';

function Contact() {
  return (
    <>
      <div>
        <img src='../assets/images/logo-diary-green.png' alt='' />
      </div>
      <div>
        <fieldset className='fieldset'>
          <legend>Datos personales</legend>
          <form action=''>
            <label for=''>Nombre</label>
            <input type='text' />
            <label for=''>Apellidos</label>
            <input type='text' />
            <label for=''>Teléfono</label>
            <input type='text' />
            <label for=''>Correo Electrónico</label>
            <input type='text' />
            <label for=''>Preguntas</label>
            <input type='text' />
          </form>
        </fieldset>
        <button>Enviar</button>
      </div>
    </>
  );
}

export default Contact;
