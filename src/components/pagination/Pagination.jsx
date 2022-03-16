import React from 'react';
import './pagination.scss';

const Pagination = props => {
  const { handlePageIncrese, handlePageDecrese } = props;

  return (
    <div className="mb-4 mt-5 pn">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" onClick={() => handlePageDecrese()}>
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={() => handlePageIncrese()}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
