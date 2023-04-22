import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ handleChange, filter }) => {
  return (
    <>
      <div className={css.title}>Find contacts by name</div>
      <input
        className={css.input}
        type="text"
        name="filter"
        onInput={handleChange}
        value={filter}
      />
    </>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
export default Filter;
