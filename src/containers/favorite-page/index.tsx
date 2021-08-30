import PeopleList from 'components/people-page/people-list';
import useTypeSelector from 'hooks/useTypeSelector';
import React, { useEffect, useState } from 'react';
import { PeopleListState } from 'types/people-list';

const FavoritePage = (): JSX.Element => {
  const [people, setPeople] = useState<PeopleListState[]>([]);
  const { favoritePerson } = useTypeSelector(state => state.favoritePerson);

  useEffect(() => {
    const arrayPeople = Object.entries(favoritePerson);

    if (arrayPeople.length) {
      const res = arrayPeople.map(item => {
        return {
          id: item[0],
          ...item[1],
        };
      });
      setPeople(res);
    }
  }, []);

  return <>{people.length ? <PeopleList people={people} /> : <h2 className="favorite-comment">No data</h2>}</>;
};

export default FavoritePage;
