import { combineReducers } from '@reduxjs/toolkit';
import favoriteReducer from './favoriteReducer';

const rootReducer = combineReducers({
  favoritePerson: favoriteReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
