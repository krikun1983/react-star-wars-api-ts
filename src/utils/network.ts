const SWAPI_ROOT = 'https://swapi.dev/api/';
const SWAPI_PEOPLE = 'people/';
export const PEOPLE = `${SWAPI_ROOT}${SWAPI_PEOPLE}`;

const getApiResource = async (url: string): Promise<boolean> => {
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
