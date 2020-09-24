import React from 'react';
import { useSelector } from 'react-redux';
import {
  getContactsSelector,
  getFilteredContacts,
} from '../../redux/selectors';
import ContactsItem from '../ContactsItem/ContactsItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './ContactList.module.css';

function ContactsList() {
  const contacts = useSelector(state => getContactsSelector(state));
  const filteredContacts = useSelector(state => getFilteredContacts(state));

  return (
    <TransitionGroup component="ul" className={styles.ul}>
      {filteredContacts.map(elem => (
        <CSSTransition
          in={contacts.length > 0}
          key={elem.id}
          timeout={250}
          unmountOnExit
          classNames={styles}
        >
          <ContactsItem key={elem.id} contact={elem}></ContactsItem>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

export default ContactsList;
