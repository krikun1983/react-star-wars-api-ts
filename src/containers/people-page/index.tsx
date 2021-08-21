import React, { useEffect, useState } from 'react';
import { API_PEOPLE } from '../../constants/api';
import { PeopleListState, PeopleResultsBody } from '../../types/people-list';
import getApiResource from '../../utils/network';

const PeoplePage = (): JSX.Element => {
  const [people, setPeople] = useState<PeopleListState[]>([]);
  // fn запрос на сервер
  const gerResource = async (getUrl: string) => {
    const body = await getApiResource(getUrl);

    const peopleList = (body as PeopleResultsBody).results.map(({ name, url }) => {
      return {
        name,
        url,
      };
    });

    setPeople(peopleList);
  };

  useEffect(() => {
    gerResource(API_PEOPLE);
  }, []);

  return (
    <>
      {people && (
        <ul>
          {people.map(({ name, url }) => {
            return <li key={url}>{name}</li>;
          })}
        </ul>
      )}
    </>
  );
};

export default PeoplePage;
