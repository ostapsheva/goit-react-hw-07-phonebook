import React from 'react';
import { useSelector } from 'react-redux';
import ContactsItem from '../ContactsItem/ContactsItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './ContactList.module.css';

function ContactsList() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter.toLowerCase());
  const filteredContacts = contacts.filter(contact =>
    contact.name ? contact.name.toLowerCase().includes(filter) : contacts,
  );

  return (
    <TransitionGroup component="ul" className={styles.ul}>
      {filteredContacts.map(elem => (
        <CSSTransition
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
