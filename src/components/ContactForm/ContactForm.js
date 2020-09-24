import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../../redux/actions/phonebookActions';
import { CSSTransition } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import Alert from '../Alert/Alert';
import styles from './ContactForm.module.css';
import '../App.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    error: false,
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    if (
      this.props.state.contacts.items.find(
        contact => contact.name === this.state.name,
      )
    ) {
      this.setState({ error: true, name: '', number: '' });
      setTimeout(() => {
        this.setState({ error: false });
      }, 2500);
    } else {
      const contact = {
        name: this.state.name,
        number: this.state.number,
        id: uuidv4(),
      };
      this.props.addContact(contact);
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    return (
      <>
        <form className={styles.form} onSubmit={this.handleSubmitForm}>
          <label>
            Name
            <input
              className={styles.input}
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Number
            <input
              className={styles.input}
              name="number"
              type="text"
              value={this.state.number}
              onChange={this.handleChange}
              required
            />
          </label>
          <button className={styles.btn} type="submit">
            Add contact
          </button>
        </form>
        <CSSTransition
          in={this.state.error}
          timeout={250}
          unmountOnExit
          classNames="alert"
        >
          <Alert />
        </CSSTransition>
      </>
    );
  }
}
const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = {
  addContact: addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
