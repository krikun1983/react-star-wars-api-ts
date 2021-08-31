import { configureStore } from '@reduxjs/toolkit';
import { setLocalStorage } from 'utils/localStorage';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
});

store.subscribe(() => {
  setLocalStorage('store', store.getState().favoritePerson.favoritePerson);
});

export default store;
