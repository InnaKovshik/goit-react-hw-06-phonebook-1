import { connect } from 'react-redux';
import fn from '../../redux/actions/phonebook-actions';

import s from './Filter.module.scss';

const Filter = ({ filter, handleFilterValue }) => {
  return (
    <label className={s.findField}>
      Find contacts by name:{' '}
      <input
        type="text"
        name=""
        value={filter}
        onChange={handleFilterValue}
        className={s.findInput}
      />
    </label>
  );
};

const mapStateToProps = state => {
  return {
    filter: state.filter,
  };
};

const mapDispathcToProps = dispatch => {
  return {
    handleFilterValue: event => dispatch(fn.filterContacts(event.target.value)),
  };
};
export default connect(mapStateToProps, mapDispathcToProps)(Filter);
