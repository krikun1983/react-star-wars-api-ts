import { Stars } from 'store/types/favorite';

export const getLocalStorage = (key: string): Stars | null => {
  const data = localStorage.getItem(key);
  if (data !== null) {
    return JSON.parse(data as string);
  }
  return {};
};

export const setLocalStorage = (key: string, data: Stars | null): void => {
  localStorage.setItem(key, JSON.stringify(data));
};
