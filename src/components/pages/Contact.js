import '../../styles/pages/contact.scss';
import FormContact from './FormContact';
import imgDiary from '../../images/222.png';
//import imgLogo from '../../images/Giselle.png';
//import { Link } from 'react-router-dom';
import Footer from '../Footer';

function Contact() {
  return (
    <div className='containerContact'>
      <div className='headerContact'>
        <img src={imgDiary} alt='' className='headerContact__img' />
      </div>
      <div className='divHeroContact'>
        <FormContact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
