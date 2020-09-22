import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { search, clearSearch } from '../actions/index';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome, search, clearSearch }) => {
  const inputStyle = classNames('input', { isHome });

  const handleInput = (event) => {
    const query = event.target.value;
    if (query === '') {
      clearSearch();
    } else {
      search(query);
    }
  };
  return (
    <section className='main'>
      <h2 className='main__title'>¿What do you wanna see today?</h2>
      <input
        type='text'
        name='query'
        className={inputStyle}
        placeholder='Search...'
        onChange={handleInput}
      />
    </section>
  );
};

Search.propTypes = {
  isHome: PropTypes.bool,
  clearSearch: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  search,
  clearSearch,
};
export default connect(null, mapDispatchToProps)(Search);
