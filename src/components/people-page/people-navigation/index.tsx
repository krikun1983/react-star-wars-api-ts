import UiButton from 'components/UI/UIButton';
import React from 'react';
import { Link } from 'react-router-dom';
import { PropsPeopleNavigation } from 'types/people-list';

const PeopleNavigation = ({ gerResource, prevPage, nextPage, currentPage }: PropsPeopleNavigation): JSX.Element => {
  const handleChangeNext = () => gerResource(nextPage);
  const handleChangePrev = () => gerResource(prevPage);
  return (
    <div className="btns-container">
      <Link to={`/people/?page=${currentPage - 1}`} className="btn-link">
        <UiButton text="Previous" onClick={handleChangePrev} disabled={!prevPage} />
      </Link>
      <Link to={`/people/?page=${currentPage + 1}`} className="btn-link">
        <UiButton text="Next" onClick={handleChangeNext} disabled={!nextPage} />
      </Link>
    </div>
  );
};

export default PeopleNavigation;
