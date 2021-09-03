import React from 'react';
import { PeopleListState } from 'types/people-list';
import uuid from 'react-uuid';
import { Link } from 'react-router-dom';

type SearchPageInfoProps = {
  people: PeopleListState[];
};

const SearchPageInfo = ({ people }: SearchPageInfoProps): JSX.Element => {
  return (
    <>
      <div>
        {people.length ? (
          <ul className="search-page-list">
            {people.map(({ id, name, img }) => {
              return (
                <li className="search-page-list__item" key={uuid()}>
                  <Link to={`people/${id}`}>
                    <img className="search-page-list__photo" src={img} alt={name} />
                    <p className="search-page-list__name">{name}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <h2 className="search-page-comment">No results</h2>
        )}
      </div>
    </>
  );
};

export default SearchPageInfo;
