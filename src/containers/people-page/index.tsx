import React, { useEffect, useState } from 'react';
import ErrorMessage from 'components/errorMessage';
import PeopleList from 'components/people-page/people-list';
import { API_PEOPLE } from 'constants/api';
import { getPeopleId, getPeopleImages, getPeoplePageId } from 'services/getPeopleData';
import { PeopleListState, PeopleResultsBody } from 'types/people-list';
import getApiResource from 'utils/network';
import useQueryParams from 'hooks/useQueryParams';
import PeopleNavigation from 'components/people-page/people-navigation';

const PeoplePage = (): JSX.Element => {
  const [people, setPeople] = useState<PeopleListState[]>([]);
  const [errorApi, setErrorApi] = useState(false);
  const [prevPage, setPrevPage] = useState<string>('');
  const [nextPage, setNextPage] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get('page');

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
      setPrevPage((body as PeopleResultsBody).previous);
      setNextPage((body as PeopleResultsBody).next);
      setCurrentPage(getPeoplePageId(getUrl));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    gerResource(API_PEOPLE + queryPage);
  }, []);

  return (
    <>
      {' '}
      {errorApi ? (
        <h2>
          <ErrorMessage />
        </h2>
      ) : (
        <>
          <PeopleNavigation
            gerResource={gerResource}
            prevPage={prevPage}
            nextPage={nextPage}
            currentPage={currentPage}
          />
          {people && <PeopleList people={people} />}
        </>
      )}
    </>
  );
};

export default PeoplePage;
