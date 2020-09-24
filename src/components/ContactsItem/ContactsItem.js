import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/actions/phonebookActions';
import styles from './ContactsItem.module.css';

function ContactsItem({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  const handleClick = e => dispatch(removeContact(e.currentTarget.dataset.id));

  return (
    <li className={styles.contactsList}>
      <span>{name}</span>
      <span className={styles.contactsNumber}>{number}</span>
      <button
        className={styles.btn}
        type="button"
        data-id={id}
        onClick={handleClick}
      >
        delete
      </button>
    </li>
  );
}

export default ContactsItem;
