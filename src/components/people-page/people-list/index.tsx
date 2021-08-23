import React from 'react';
import { Link } from 'react-router-dom';
import { PeopleListStateProps } from 'types/people-list';

const PeopleList = ({ people }: PeopleListStateProps): JSX.Element => {
  return (
    <ul className="list__container">
      {people.map(({ id, name, img }) => {
        return (
          <li className="list__item" key={id}>
            <Link to="/" className="list__item_link">
              <img className="list__item_photo" src={img} alt={name} />
              <p className="list__item_name">{name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PeopleList;
