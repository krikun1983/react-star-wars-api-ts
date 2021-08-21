import React, { useEffect, useState } from 'react';
import PeopleList from '../../components/people-page/people-list';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImages } from '../../services/getPeopleData';
import { PeopleListState, PeopleResultsBody } from '../../types/people-list';
import getApiResource from '../../utils/network';

const PeoplePage = (): JSX.Element => {
  const [people, setPeople] = useState<PeopleListState[]>([]);
  // fn запрос на сервер
  const gerResource = async (getUrl: string) => {
    const body = await getApiResource(getUrl);

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
  };

  useEffect(() => {
    gerResource(API_PEOPLE);
  }, []);

  return <>{people && <PeopleList people={people} />}</>;
};

export default PeoplePage;
