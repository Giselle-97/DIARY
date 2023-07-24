import '../../../styles/pages/formLanding.scss';
import React, { useState } from 'react';
import imgInstagram from '../../../images/instagram.png';
import imgFacebook from '../../../images/facebook.png';
import imgLinkedin from '../../../images/linkedin.png';

function FormLanding() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleToggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className='containerLanding'>
      <main className='hero'>
        <div className={`containerForm ${showLoginForm ? 'signIn' : 'signUp'}`}>
          <div className='welcomeBack'>
            <div className='divMessage'>
              <h2 className='divMessage__text1'>
                {showLoginForm ? 'Bienvenido de nuevo' : 'Bienvenido a Diary'}
              </h2>
              <p className='divMessage__text2'>
                {showLoginForm
                  ? 'Si aún no tienes una cuenta por favor regístrate aquí'
                  : 'Si ya tienes una cuenta por favor inicia sesión aquí'}
              </p>
              <button
                className={showLoginForm ? 'signInBtn' : 'signUpBtn'}
                onClick={handleToggleForm}
              >
                {showLoginForm ? 'Registrarse' : 'Iniciar sesión'}
              </button>
            </div>
          </div>
          <form className='formL'>
            <p className='createAccount'>
              {showLoginForm ? 'Iniciar sesión' : 'Crear una cuenta'}
            </p>
            <div className='icons'>
              <div className='borderIcon iconInstagram'>
                <img src={imgInstagram} alt='logo instagram' className='icon' />
              </div>
              <div className='borderIcon iconFacebook'>
                <img src={imgFacebook} alt='logo facebook' className='icon' />
              </div>
              <div className='borderIcon iconLinkedin'>
                <img src={imgLinkedin} alt='logo linkedin' className='icon' />
              </div>
            </div>
            {!showLoginForm && (
              <input
                className='inputFormLanding'
                type='text'
                placeholder='name'
              />
            )}
            <input
              className='inputFormLanding'
              type='email'
              placeholder='email'
            />
            <input
              className='inputFormLanding'
              type='password'
              placeholder='password'
            />
            <input
              type='button'
              value={showLoginForm ? 'Iniciar sesión' : 'Registrarse'}
              className='inputBtn'
            />
          </form>
        </div>
      </main>
    </div>
  );
}

export default FormLanding;
