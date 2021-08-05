import ContactForm from '../components/contacts/ContactForm';
import Filter from '../components/contacts/Filter';
import ContactList from '../components/contacts/ContactList';

import s from '../components/';

const Contacts = () => {
  return (
    <div className={s.container}>
      <ContactForm />
      <h2>Contacts: </h2>
      <Filter />
      <ContactList />
    </div>
  );
};
export default Contacts;
