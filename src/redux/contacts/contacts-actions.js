import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: nanoid(5),
    name,
    number,
  },
}));

const removeContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');
// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, removeContact, changeFilter };
