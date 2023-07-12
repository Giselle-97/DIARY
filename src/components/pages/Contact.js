import '../../styles/pages/contact.scss';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className='containerContact'>
      <div>
        <img src='../assets/images/logo-diary-green.png' alt='' />
      </div>
      <div className='divContact'>
        <p className='divContact__textDate'>Datos personales</p>
        <form action='' className='divContact__form'>
          <div className='containerName'>
            <label htmlFor='name' className='labelContact'>
              Nombre
            </label>
            <input
              type='text'
              placeholder='Ej: María'
              className='containerName__input inputC'
            />
          </div>

          <div className='containerLastName'>
            <label htmlFor='lastName' className='labelContact'>
              Apellidos
            </label>
            <input
              type='text'
              placeholder='Ej: García Peña'
              className='containerLastName__input inputC'
            />
          </div>

          <div className='containerPhone'>
            <label htmlFor='phone' className='labelContact'>
              Teléfono
            </label>
            <input
              type='text'
              placeholder='Ej: 655 8777'
              className='containerPhone__input inputC'
            />
          </div>

          <div className='containerEmail'>
            <label htmlFor='email' className='labelContact'>
              Correo E.
            </label>
            <input
              type='text'
              placeholder='Ej: mariag@gmail.com'
              className='containerEmail__input inputC'
            />
          </div>

          <div className='containerQuestions'>
            <label htmlFor='questions' className='labelContact'>
              Preguntas
            </label>
            <input
              type='text'
              placeholder='Ej: ¿En qué te puedo ayudar? '
              className='containerQuestions__input inputC'
            />
          </div>
        </form>
        <button className='btn1'>Enviar</button>
        <div className='divReturn'>
          <Link to='/' className='divReturn__text'>
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
