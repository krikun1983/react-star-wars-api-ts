import SearchPageInfo from 'components/search-page/search-page-info';
import { API_SEARCH } from 'constants/api';
import React, { useCallback, useEffect, useState } from 'react';
import { getPeopleId, getPeopleImages } from 'services/getPeopleData';
import { PeopleListState, PeopleResultsBody } from 'types/people-list';
import getApiResource from 'utils/network';
import { debounce } from 'lodash';
import UIInput from 'components/UI/UIInput';
import icon_cancel from 'assets/images/cancel/cancel.svg';

const SearchPage = (): JSX.Element => {
  const [errorApi, setErrorApi] = useState(false);
  const [inputSearchValue, setInputSearchValue] = useState<string>('');
  const [people, setPeople] = useState<PeopleListState[]>([]);

  const getResponse = async (param: string) => {
    const res = await getApiResource(API_SEARCH + param);

    if (res) {
      const peopleList = (res as PeopleResultsBody).results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImages(id);

        return {
          id,
          name,
          img,
        };
      });
      setPeople(peopleList);
      setErrorApi(errorApi);
    } else {
      setErrorApi(!errorApi);
    }
  };

  useEffect(() => {
    getResponse('');
  }, []);

  const debounceGetResponse = useCallback(
    debounce(value => getResponse(value), 400),
    [],
  );

  const handleInputChange = (value: string) => {
    setInputSearchValue(value);
    debounceGetResponse(value);
  };

  return (
    <>
      <h2 className="header__text">Search</h2>
      <div className="input__search_wrapper">
        <UIInput
          classes="input__search"
          value={inputSearchValue}
          type="text"
          handleInputChange={handleInputChange}
          placeholder="input characters's name"
        />
        <img
          src={icon_cancel}
          alt="clear"
          className={`input__clear ${!inputSearchValue && 'input__clear_disabled'}`}
          onClick={() => inputSearchValue && handleInputChange('')}
          role="presentation"
        />
      </div>
      <SearchPageInfo people={people} />
    </>
  );
};

export default SearchPage;
