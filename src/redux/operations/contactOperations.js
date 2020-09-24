import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from '../actions/phonebookActions';

const addContact = ({ name, number }) => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('http://localhost:3005/contacts', { name, number })
    .then(({ data }) => {
      dispatch(addContactSuccess(data));
    })
    .catch(err => dispatch(addContactError(err)));
};

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get('http://localhost:3005/contacts')
    .then(({ data }) => {
      dispatch(fetchContactsSuccess(data));
    })
    .catch(err => dispatch(fetchContactsError(err)));
};

const removeContact = id => dispatch => {
  dispatch(removeContactRequest());
  axios
    .delete(`http://localhost:3005/contacts/${id}`)
    .then(() => {
      dispatch(removeContactSuccess(id));
    })
    .catch(err => dispatch(removeContactError(err)));
};

export { addContact, fetchContacts, removeContact };
