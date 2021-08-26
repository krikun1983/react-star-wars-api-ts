import { HTTP, HTTPS } from 'constants/api';
import { PeopleResultsBody } from 'types/people-list';
import { PersonFilmsPromise, PersonInfoApi } from 'types/person-list';

export const changeHTTP = (url: string): string => {
  const result = url ? url.replace(HTTP, HTTPS) : url;
  return result;
};

export const makeConcurrentRequest = async (url: string[]): Promise<PersonFilmsPromise[]> => {
  const response = await Promise.all(
    url.map(async res => {
      const resNew = await fetch(res);
      return resNew.json();
    }),
  );

  return response;
};

const getApiResource = async (url: string): Promise<boolean | PeopleResultsBody | PersonInfoApi> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      // console.log('Could not fetch', response.status);
      return false;
    }
    const body = await response.json();
    return body;
  } catch (error) {
    // console.error(error.message);
    return false;
  }
};

export default getApiResource;
