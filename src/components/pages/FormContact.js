import '../../styles/pages/formContact.scss';

function FormContact() {
  return (
    <div className='containerFormC'>
      <form class='formContact'>
        <input type='text' required />
        <label class='lbl-nombre'>
          <span class='text-nomb'>Nombre</span>
        </label>
      </form>
    </div>
  );
}
export default FormContact;
