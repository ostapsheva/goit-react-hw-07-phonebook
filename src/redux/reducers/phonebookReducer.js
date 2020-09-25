import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  filterContacts,
  addContactSuccess,
  fetchContactsSuccess,
  removeContactSuccess,
} from '../actions/phonebookActions';

const onAddContact = (state, { type, payload }) => [...state, payload];
const onRemoveContact = (state, { type, payload }) => {
  return state.filter(item => item.id !== payload);
};

const items = createReducer([], {
  [fetchContactsSuccess]: (state, { type, payload }) => payload,
  [addContactSuccess]: onAddContact,
  [removeContactSuccess]: onRemoveContact,
});

const filter = createReducer('', {
  [filterContacts]: (state, { type, payload }) => payload,
});

export default combineReducers({ items, filter });
