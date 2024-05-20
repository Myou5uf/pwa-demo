import React from 'react';
import {Form} from 'react-bootstrap';
import SearchIcon from './icons/SearchIcon';

const SearchInput = ({formClassName}) => {
  return (
    <Form className={`d-flex ${formClassName}`}>
      <div className='field-group'>
        <Form.Control
          type="search"
          placeholder="Найти нужную деталь"
          className="input-field search-input"
          aria-label="Найти нужную деталь"
        />
        <div className='input-icon'>
          <SearchIcon/>
        </div>
      </div>
    </Form>
  );
};

export default SearchInput;
