import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import './SearchInput.css';


const SearchInput = ({placeholder}) => {
  return (
    <div className={'search-input-wrap'}>
      <span><FontAwesomeIcon icon='search' size={'xs'} /></span>
      <input placeholder={placeholder} />
    </div>
  )
}


export default SearchInput;