import PropTypes from 'prop-types';

const Filter = ({ handleChange }) => {
  return <input type="text" name="filter" onInput={handleChange} />;
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
export default Filter;
