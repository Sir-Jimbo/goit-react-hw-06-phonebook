//redux
/*
import { combineReducers } from 'redux';
import phonebookTypes from 'redux/phonebook/phonebook-types';

const contactsReducer = (state = [], { type, payload }) => {
   switch (type) {
      case phonebookTypes.ADD:
         return [...state, payload];
      case phonebookTypes.DELETE:
         return state.filter(({ id }) => id !== payload)
      default:
         return state;
   }
};

const filterReducer = (state = '', { type, payload }) => {
   switch (type) {
      case phonebookTypes.CHANGE_FILTER:
         return payload;
      default:
         return state;
   }
};

const phonebookReducer = combineReducers({
   contacts: contactsReducer,
   filter: filterReducer
});

export default phonebookReducer;
*/

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './phonebook-actions';

const contactsReducer = createReducer([], {
   [actions.addContact]: (state, { payload }) => [...state, payload],
   [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload)
});

const filterReducer = createReducer('', {
   [actions.changeFilter]: (_, { payload }) => payload
});

const phonebookReducer = combineReducers({
   contacts: contactsReducer,
   filter: filterReducer
});

export default phonebookReducer;
