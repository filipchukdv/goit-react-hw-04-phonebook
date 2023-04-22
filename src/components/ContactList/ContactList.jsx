import ContactElem from './ContactElem/ContatctElem';
import css from './ContatcList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, handleChange, filter, deleteById }) => (
  <div className={css.contactListContainer}>
    <ul>
      {contacts
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
  filter: PropTypes.string.isRequired,
  deleteById: PropTypes.func.isRequired,
};

export default ContactList;
