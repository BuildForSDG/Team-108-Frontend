import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SearchInput.css';


const SearchInput = ({ placeholder }) => (
    <div className={'search-input-wrap'}>
      <span><FontAwesomeIcon icon='search' size={'xs'} /></span>
      <input placeholder={placeholder} />
    </div>
);

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired
};


export default SearchInput;
