import '../../styles/pages/landing.scss';

function Landing() {
  return (
    <>
      <div className='divHero'>
        <p className='divHero__text'>
          tu Tiempo....tu Tesoro... Dale a cada día la posibilidad de ser el
          mejor día de tu VIDA.
        </p>

        <p className='divHero__text--text2'>
          Organiza tu día a día de una manera más fácil y cómoda.
        </p>
      </div>
      <div className='divHero2'>
        <form className='container'>
          <fieldset className='container__login'>
            <legend className='legend'>Crea tu perfil</legend>
            <div className='container__input'>
              <label className='userLabel' for='user'>
                Usuario
              </label>
              <input
                className='user'
                type='text'
                name='user'
                placeholder='nina@gmail.com'
              />
            </div>
            <div className='container__input'>
              <label className='userLabel' for='password'>
                Contraseña
              </label>
              <input
                className='password'
                type='text'
                name='password'
                placeholder='nina555'
              />
            </div>
            <div className='divBtn'>
              <button className='btn'>Registrarse</button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default Landing;
