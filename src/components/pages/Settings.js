import '../../styles/pages/settings.scss';

function Settings() {
  return (
    <div className='containerSettings'>
      <div className='divEmails'>
        <input className='inputEmails' type='text' required />
        <label className='labels' htmlFor=''>
          Email
        </label>
      </div>
    </div>
  );
}
export default Settings;
