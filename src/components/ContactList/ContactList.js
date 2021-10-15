import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteBtn }) => {
  return (
    <ul className={s.list}>{contacts.map( contact => {
      return (
        <li key={contact.id} className={s.item}>
          <p className={s.text}>{contact.name}</p>
          <p className={s.text}>{contact.number}</p>
          <button className={s.deleteBtn} type="button" id={contact.id} onClick={() => onDeleteBtn(contact.id)} >Delete ❌</button>
        </li>);
      })}
    </ul>
  )
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteBtn: PropTypes.func.isRequired,
}

export default ContactList;