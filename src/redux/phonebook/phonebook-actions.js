//redux
/*
import { v4 as uuidv4 } from 'uuid';
import phonebookTypes from 'redux/phonebook/phonebook-types';


export const addContact = (name, number) => ({
   type: phonebookTypes.ADD,
   payload: {
      id: uuidv4(),
      name: name,
      number: number,
   }
});

export const deleteContact = contactId => ({
   type: phonebookTypes.DELETE,
   payload: contactId
});

export const changeFilter = value => ({
   type: phonebookTypes.CHANGE_FILTER,
   payload: value
});*/


//redux/toolkit
import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';


export const addContact = createAction('phonebook/addContact', (name, number) => ({
   payload: {
      id: uuidv4(),
      name: name,
      number: number,
   },
}));
export const deleteContact = createAction('phonebook/deleteContact');
export const changeFilter = createAction('phonebook/changeFilter');



