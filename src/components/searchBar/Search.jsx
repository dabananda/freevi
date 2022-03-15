import React from 'react';
import './search.scss'

const Search = props => {
  return (
    <div className="d-flex input-group justify-content-center">
      <input
        type="text"
        className="form-control searchBox"
        placeholder="Search for copyright free images & videos..."
        value={props.search}
        onChange={event => props.handleChange(event)}
      />
      <button className="btn btn-primary" onClick={() => props.handleKeyword()}>
        Search
      </button>
    </div>
  );
};

export default Search;
