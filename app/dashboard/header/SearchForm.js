import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({placeholder}) => (
  <form className="search-form search-form-expanded">
    <div className="input-group">
      <input type="text" className="form-control" placeholder={placeholder} />
      <span className="input-group-btn">
        <a className="btn submit">
          <i className="icon-magnifier" />
        </a>
      </span>
    </div>
  </form>
);

SearchForm.propTypes = {
  placeholder: PropTypes.string
};

export default SearchForm;