import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_TO_FAVORITE } from 'store/constants';
import { FavoritePersonAction, FavoritePersonState, Stars } from 'store/types/favorite';

const initialState: FavoritePersonState = {
  favoritePerson: {},
};

const favoriteReducer = (state = initialState, action: FavoritePersonAction): FavoritePersonState => {
  const result = { ...state.favoritePerson };
  switch (action.type) {
    case ADD_PERSON_TO_FAVORITE:
      return { ...state, favoritePerson: { ...state.favoritePerson, ...(action.payload as Stars) } };
    case REMOVE_PERSON_TO_FAVORITE:
      delete result[action.payload as string];
      return {
        ...state,
        favoritePerson: result,
      };
    default:
      return state;
  }
};

export default favoriteReducer;
