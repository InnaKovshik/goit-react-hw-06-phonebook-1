import './App.module.scss';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import s from './App.module.scss';

function App() {
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

export default App;
