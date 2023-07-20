import '../../../styles/pages/contact.scss';
import FormContact from './FormContact';
import Footer from '../../Footer';
import Header from '../../Header';

function Contact() {
  return (
    <div className='containerContact'>
      <Header />
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
