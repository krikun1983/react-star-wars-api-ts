import React, { useEffect, useState } from 'react';
import ErrorMessage from '../../components/ErrorMessage';
import PeopleList from '../../components/people-page/people-list';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImages } from '../../services/getPeopleData';
import { PeopleListState, PeopleResultsBody } from '../../types/people-list';
import getApiResource from '../../utils/network';

const PeoplePage = (): JSX.Element => {
  const [people, setPeople] = useState<PeopleListState[]>([]);
  const [errorApi, setErrorApi] = useState(false);
  // fn запрос на сервер
  const gerResource = async (getUrl: string) => {
    const body = await getApiResource(getUrl);

    if (body) {
      const peopleList = (body as PeopleResultsBody).results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImages(id);

        return {
          id,
          name,
          img,
        };
      });

      setPeople(peopleList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    gerResource(API_PEOPLE);
  }, []);

  return (
    <>
      {' '}
      {errorApi ? (
        <h2>
          <ErrorMessage />
        </h2>
      ) : (
        <>{people && <PeopleList people={people} />}</>
      )}
    </>
  );
};

export default PeoplePage;
