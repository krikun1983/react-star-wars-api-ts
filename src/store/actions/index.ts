import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_TO_FAVORITE } from 'store/constants';
import { FavoritePersonAction, Stars } from 'store/types/favorite';

export const setPersonToFavorite = (person: Stars): FavoritePersonAction => ({
  type: ADD_PERSON_TO_FAVORITE,
  payload: person,
});
export const removePersonToFavorite = (personId: string): FavoritePersonAction => ({
  type: REMOVE_PERSON_TO_FAVORITE,
  payload: personId,
});
