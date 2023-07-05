import '../../styles/pages/contact.scss';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
      <div>
        <img src='../assets/images/logo-diary-green.png' alt='' />
      </div>
      <div>
        <p className='textContact'>Datos personales</p>
        <form action=''>
          <label htmlFor='name' className='labelContact'>
            Nombre
          </label>
          <input type='text' placeholder='Ej: María' />
          <label htmlFor='lastName' className='labelContact'>
            Apellidos
          </label>
          <input type='text' placeholder='Ej: García Peña' />
          <label htmlFor='phone' className='labelContact'>
            Teléfono
          </label>
          <input type='text' placeholder='Ej: 655 8777' />
          <label htmlFor='email' className='labelContact'>
            Correo Electrónico
          </label>
          <input type='text' placeholder='Ej: mariag@gmail.com' />
          <label htmlFor='questions' className='labelContact'>
            Preguntas
          </label>
          <input type='text' placeholder='Ej: ¿En qué te puedo ayudar? ' />
        </form>
        <button className='btn1'>Enviar</button>
        <div className='divReturn'>
          <Link to='/' className='divReturn__text'>
            Volver
          </Link>
        </div>
      </div>
    </>
  );
}

export default Contact;
