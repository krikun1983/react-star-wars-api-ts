import React, { useEffect, useState } from 'react';
import { PersonFilmsPromise } from 'types/person-list';
import { changeHTTP, makeConcurrentRequest } from 'utils/network';
import uuid from 'react-uuid';

type PersonFilmsPageProps = {
  personFilms: string[];
};

const PersonFilmsComponent = ({ personFilms }: PersonFilmsPageProps): JSX.Element => {
  const [filmNames, setFilmsNames] = useState<PersonFilmsPromise[]>([]);

  useEffect(() => {
    (async () => {
      const filmsHTTPS = personFilms.map(url => changeHTTP(url));
      const response = await makeConcurrentRequest(filmsHTTPS);
      setFilmsNames(response);
    })();
  }, [personFilms]);

  return (
    <div className="person-films_wrapper">
      <ul className="person-films__list">
        {filmNames
          .sort((a, b) => a.episode_id - b.episode_id)
          .map(({ title, episode_id }): JSX.Element => {
            return (
              <li className="person-films__item" key={uuid()}>
                <span className="person-films__item_episode">Episode {episode_id}</span>
                <span className="person-films__item_colon">:</span>
                <span className="person-films__item_title">{title}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default PersonFilmsComponent;
