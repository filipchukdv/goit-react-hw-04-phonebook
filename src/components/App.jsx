import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import Filter from 'components/Filter/Filter';

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
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const { contacts } = this.state;
    e.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState({
      contacts: [...contacts, { id: nanoid(), name: name, number: number }],
      name: name,
      number: number,
    });
    form.reset();
  };

  deleteById = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  filterContacts = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  render() {
    return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2 className={css.title}>Contacts</h2>
        <Filter handleChange={this.handleChange} filter={this.state.filter} />

        <ContactList
          contacts={this.filterContacts()}
          deleteById={this.deleteById}
          filter={this.state.filter}
        />
      </div>
    );
  }
}
