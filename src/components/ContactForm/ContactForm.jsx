import { Component } from 'react';

import generateUniqueId from 'generate-unique-id';
import { connect } from 'react-redux';

import fn from '../../redux/actions/phonebook-actions';
//import generate from '@babel/generator';

import s from './contactForm.module.scss';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  sendContactToApp(newContact) {
    console.log('newCont', newContact);

    this.props.handleAddContact(newContact);
  }

  showMessage(newContactDate) {
    alert(`${newContactDate.name} already in contacts`);
  }

  resetState() {
    this.setState(INITIAL_STATE);
  }

  createNewContact() {
    return {
      id: generateUniqueId(),
      ...this.state,
    };
  }

  handleNewValue = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  handleNewContact = () => {
    const newContactDate = this.state;
    const contacts = this.props.contacts;
    console.log('contacts', this.props.contacts);

    console.log('newContactDate', newContactDate);
    const checkedName = contacts.find(
      el => el.name.toLowerCase() === newContactDate.name.toLowerCase(),
    );

    if (!checkedName) {
      let newContact = this.createNewContact();
      this.sendContactToApp(newContact);
    } else {
      this.showMessage(newContactDate);
    }
    this.resetState();
  };

  render() {
    return (
      <form className={s.form}>
        <label key="name" className={s.label}>
          <input
            type="text"
            key="name"
            name="name"
            value={this.state.name}
            onChange={this.handleNewValue}
            className={s.input}
          />
        </label>
        <label key="number" className={s.label}>
          <input
            type="text"
            key="number"
            name="number"
            value={this.state.number}
            onChange={this.handleNewValue}
            className={s.input}
          />
        </label>
        <button
          onClick={this.handleNewContact}
          disabled={!this.state.name || !this.state.number}
          className={s.btn}
        >
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.items,
  };
};

const mapDispathcToProps = dispatch => {
  return {
    handleAddContact: newContact => dispatch(fn.addContact(newContact)),
    // handleFilterValue: (event) => dispatch(filterContacts(event))
  };
};

export default connect(mapStateToProps, mapDispathcToProps)(ContactForm);
