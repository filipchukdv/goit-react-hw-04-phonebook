import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const ContactForm = ({ handleSubmit }) => (
  <>
    <form onSubmit={handleSubmit} className={css.form}>
      <div className={css.inputTitle}>Name</div>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        className={css.input}
      />
      <div className={css.inputTitle}>Number</div>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        className={css.input}
      />
      <button type="submit" className={css.button}>
        Add contact
      </button>
    </form>
  </>
);

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
