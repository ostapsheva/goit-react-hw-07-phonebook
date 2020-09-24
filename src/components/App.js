import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
  getContactsSelector,
  getFilterSelector,
  getLoadingSelector,
} from '../redux/selectors';
import { fetchContacts } from '../redux/operations/contactOperations';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import './App.css';

export class App extends Component {
  state = {
    isMounted: false,
  };
  componentDidMount() {
    this.props.onFetchContacts();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.contacts !== this.props.contacts) {
      if (!prevState.isMounted) {
        this.setState({ isMounted: true });
      }
    }
  }

  render() {
    const contacts = this.props.contacts;
    const filter = this.props.filter !== '';
    const isMounted = this.state.isMounted;
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
        {isMounted && contacts.length < 1 && <p>No contacts...</p>}

        <CSSTransition
          in={contacts.length > 1 || filter}
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
}

const mapStateToProps = state => {
  return {
    contacts: getContactsSelector(state),
    filter: getFilterSelector(state),
    isLoading: getLoadingSelector(state),
  };
};

const mapDispatchToProps = {
  onFetchContacts: fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
