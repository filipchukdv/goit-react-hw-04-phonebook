import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  handleChange = e => {
    const input = e.currentTarget;
    this.setState({ [input.name]: input.value });
  };

  handleSubmit = e => {
    const { name, number, contacts } = this.state;
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const form = e.currentTarget;
    this.setState({
      contacts: [...contacts, { id: nanoid(), name: name, number: number }],
    });
    form.reset();
  };

  deleteById = id => {
    console.log(id);
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    return (
      <>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <ContactList
          contacts={this.state.contacts}
          handleChange={this.handleChange}
          deleteById={this.deleteById}
          filter={this.state.filter}
        />
      </>
    );
  }
}
