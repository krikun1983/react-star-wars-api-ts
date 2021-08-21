import { HTTP, HTTPS } from 'constants/api';
import { PeopleResultsBody } from 'types/people-list';

export const changeHTTP = (url: string): string => {
  const result = url ? url.replace(HTTP, HTTPS) : url;
  return result;
};

const getApiResource = async (url: string): Promise<boolean | PeopleResultsBody> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log('Could not fetch', response.status);
      return false;
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error(error.message);
    return false;
  }
};

export default getApiResource;
