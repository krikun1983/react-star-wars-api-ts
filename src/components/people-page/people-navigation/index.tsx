import React from 'react';
import { Link } from 'react-router-dom';
import { PropsPeopleNavigation } from 'types/people-list';

const PeopleNavigation = ({ gerResource, prevPage, nextPage, currentPage }: PropsPeopleNavigation): JSX.Element => {
  const handleChangeNext = () => gerResource(nextPage);
  const handleChangePrev = () => gerResource(prevPage);
  return (
    <div className="btns-container">
      <Link to={`/people/?page=${currentPage - 1}`} className="btn-link">
        <button onClick={handleChangePrev} type="button" disabled={!prevPage}>
          Previous
        </button>
      </Link>
      <Link to={`/people/?page=${currentPage + 1}`} className="btn-link">
        <button onClick={handleChangeNext} type="button" disabled={!nextPage}>
          Next
        </button>
      </Link>
    </div>
  );
};

export default PeopleNavigation;
