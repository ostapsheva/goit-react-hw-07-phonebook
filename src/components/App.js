import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import './App.css';

function App() {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <div className="main-container">
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        unmountOnExit
        classNames="title"
      >
        <h1>Phonebook</h1>
      </CSSTransition>

      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length === 0 ? <p>No contacts...</p> : null}

      <CSSTransition
        in={contacts.length > 1}
        timeout={250}
        unmountOnExit
        classNames="filter"
      >
        <Filter />
      </CSSTransition>
      <ContactsList />
    </div>
  );
}

export default App;
