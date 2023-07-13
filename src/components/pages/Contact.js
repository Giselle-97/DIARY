import '../../styles/pages/contact.scss';
import FormContact from './FormContact';
import imgDiary from '../../images/222.png';
//import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className='containerContact'>
      <div className='headerContact'>
        <img src={imgDiary} alt='' />
      </div>
      <div>
        <FormContact />
      </div>
    </div>
  );
}

export default Contact;
