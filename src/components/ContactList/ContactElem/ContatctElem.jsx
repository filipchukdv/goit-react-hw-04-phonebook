import css from './ContactElem.module.css';
import PropTypes from 'prop-types';

const ContactElem = ({ name, number, deleteById, id }) => {
  return (
    <li className={css.item}>
      {name} : {number}
      <button
        type="button"
        onClick={() => deleteById(id)}
        className={css.button}
      >
        Delete
      </button>
    </li>
  );
};

ContactElem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  deleteById: PropTypes.func,
  id: PropTypes.string,
};

export default ContactElem;
