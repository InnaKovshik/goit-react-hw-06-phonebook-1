import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import s from './contact.module.scss';

function Contact() {
  return (
    <div className={s.container}>
      <h1>PHONEBOOK</h1>
      <ContactForm />
      <h2>Contacts:</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default Contact;
