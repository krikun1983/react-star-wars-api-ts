import { SWAPI_PEOPLE, HTTPS, SWAPI_ROOT, URL_IMG_PERSON, GUIDE_IMG_EXTENSION, SWAPI_PARAM_PAGE } from 'constants/api';

export const getPeoplePageId = (url: string): number => {
  const position = url.lastIndexOf(SWAPI_PARAM_PAGE);
  const id = url.slice(position + SWAPI_PARAM_PAGE.length, url.length);
  return +id;
};

const getId = (url: string, category: string) => {
  const id = url.replace(`${HTTPS}${SWAPI_ROOT}${category}`, '').replace(/\//g, '');
  return id;
};

export const getPeopleId = (url: string): string => getId(url, SWAPI_PEOPLE);

export const getPeopleImages = (id: string): string => `${URL_IMG_PERSON}/${id}${GUIDE_IMG_EXTENSION}`;
