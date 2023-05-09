import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import Filter from 'components/Filter/Filter';
import { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = e => {
    const input = e.currentTarget;
    setFilter(input.value);
  };

  const handleSubmit = e => {
    const form = e.currentTarget;
    const formName = form.elements.name.value;
    const formNumber = form.elements.number.value;

    e.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === formName.toLowerCase()
      )
    ) {
      alert(`${formName} is already in contacts`);
      return;
    }
    setContacts([
      ...contacts,
      { id: nanoid(), name: formName, number: formNumber },
    ]);

    form.reset();
  };

  const deleteById = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filterContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2 className={css.title}>Contacts</h2>
      <Filter handleChange={handleChange} filter={filter} />
      <ContactList contacts={filterContacts()} deleteById={deleteById} />
    </div>
  );
};
