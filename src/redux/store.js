import { configureStore, combineReducers } from '@reduxjs/toolkit';
import phonebookReducer from './reducers/phonebookReducer';

const rootReducer = combineReducers({
  contacts: phonebookReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
