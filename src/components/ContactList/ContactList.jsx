import ContactElem from './ContactElem/ContatctElem';
import Filter from 'components/Filter/Filter';
import css from './ContatcList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, handleChange, filter, deleteById }) => (
  <div className={css.contactListContainer}>
    <h2>Contacts</h2>
    <div>Find contacts by name</div>
    <Filter handleChange={handleChange} />
    <ul>
      {contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map(({ id, name, number }) => {
          return (
            <ContactElem
              key={id}
              id={id}
              name={name}
              number={number}
              deleteById={deleteById}
            />
          );
        })}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  deleteById: PropTypes.func.isRequired,
};

export default ContactList;
